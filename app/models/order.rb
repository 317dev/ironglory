class Order < ApplicationRecord

  belongs_to :user, optional: true
  has_many :orderings
  has_many :patches, through: :orderings
end
