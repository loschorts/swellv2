class User < ActiveRecord::Base

	attr_reader :password

	validates :username, :email, :password_digest, :session_token, presence: true
	validates :username, :email, uniqueness: true
	validate :session_token_uniqueness
	validates :password, length: {minimum: 6}, allow_nil: :true
	after_initialize :ensure_session_token

	def password= password
		self.password_digest = BCrypt::Password.create(password)
		@password = password
	end

	def self.find_by_credentials username, password
		user = User.find_by(username: username)
		user.password_is?(password) ? user : nil
	end

	def password_is? password
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def reset_session_token!
		self.session_token = new_session_token
	end

	private

	def ensure_session_token
		self.session_token ||= new_session_token
	end

	def new_session_token
		SecureRandom.base64
	end

	def session_token_uniqueness
		while User.find_by(session_token: self.session_token)
			self.session_token = new_session_token
		end
	end

end