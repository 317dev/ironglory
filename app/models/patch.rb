class Patch < ApplicationRecord

  belongs_to :year
  belongs_to :category
  has_many :orderings
  has_many :orders, through: :orderings

  mount_uploader :image, ImageUploader

  validates :name, :description, :sku, :price, :quantity, presence: true

  before_save :convert_price_to_pennies

  def convert_price_from_pennies
    self.price = price / 100
  end

  def convert_price_to_pennies
    self.price = price * 100
  end
end
