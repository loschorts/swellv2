class User < ActiveRecord::Base

	attr_reader :password
	attr_accessor :guest

	validates :username, :password_digest, :session_token, presence: true
	validates :username, uniqueness: true
	validates :password, length: {minimum: 6}, allow_nil: :true
	validate :valid_username
	
	after_initialize :ensure_session_token, :ensure_guest_status
	before_validation :ensure_session_token_uniqueness

	def password= password
		self.password_digest = BCrypt::Password.create(password)
		@password = password
	end

	def self.find_by_credentials username, password
		user = User.find_by(username: username)
		return nil unless user
		user.password_is?(password) ? user : nil
	end

	def password_is? password
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def reset_session_token!
		self.session_token = new_session_token
		ensure_session_token_uniqueness
		self.save
		self.session_token
	end

	def self.new_guest
		User.find_by(username: 'guest').destroy
		User.create(
			username: 'guest',
			password: 'password',
			guest: true)
	end

	private

	def ensure_session_token
		self.session_token ||= new_session_token
	end

	def new_session_token
		SecureRandom.base64
	end

	def ensure_session_token_uniqueness
		while User.find_by(session_token: self.session_token)
			self.session_token = new_session_token
		end
	end

	def ensure_guest_status
		self.guest ||= false
	end

	def valid_username
		if self.username == 'guest' && !self.guest
			self.errors[:username] << "cannot be '#{self.username}'"
		end
	end

end