require 'test_helper'

class OrderTest < ActiveSupport::TestCase

  should have_many :orderings
  should belong_to :user
end
