class Ordering < ApplicationRecord
  
  belongs_to :order
  belongs_to :patch
end
