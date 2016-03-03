class User < ActiveRecord::Base
	validates :username, :password, :password_digest, :session_token, presence: true
	after_initialize :ensure_session_token

	def password=
		self.password_digest = 
	end
end