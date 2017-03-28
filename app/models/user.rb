class User < ApplicationRecord

  has_many :orders

  has_secure_password
  validates :first_name, :last_name, :email, presence: true
  validates :email, uniqueness: true

  # do we want usernames here?
end
