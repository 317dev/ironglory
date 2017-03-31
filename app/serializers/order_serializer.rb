class OrderSerializer < ActiveModel::Serializer
  attributes :id, :token

  has_one :user
  has_many :orderings
end
