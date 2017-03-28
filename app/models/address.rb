class Address < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :order, optional: true

  # is there a way to require that only one of these be present?
end
