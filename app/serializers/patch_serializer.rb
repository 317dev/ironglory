class PatchSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :sku, :price, :quantity, :image, :featured, :limited_edition

  belongs_to :category
  belongs_to :year

  def image
    object.image.url
  end
end
