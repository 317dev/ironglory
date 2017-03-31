class Order < ApplicationRecord

  belongs_to :user, optional: true
  has_many :orderings
  has_many :patches, through: :orderings
  has_many :addresses, as: :addressings

  has_secure_token
end
