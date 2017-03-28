class PatchSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :sku, :price, :available
end
