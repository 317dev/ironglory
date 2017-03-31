class User < ApplicationRecord

  has_many :orders
  has_many :addresses, as: :addressings

  has_secure_password
  has_secure_token

  validates :first_name, :last_name, :email, :username, presence: true
  validates :email, :username, uniqueness: true

end
