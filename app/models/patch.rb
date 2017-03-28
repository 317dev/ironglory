class Patch < ApplicationRecord

  belongs_to :year
  belongs_to :category
  has_many :orderings
  has_many :orders, through: :orderings
end
