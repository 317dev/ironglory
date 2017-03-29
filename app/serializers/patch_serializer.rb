class PatchSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :sku, :price, :quantity
end
