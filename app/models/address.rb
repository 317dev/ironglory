class Address < ApplicationRecord
  
  belongs_to :addressings, polymorphic: true
end
