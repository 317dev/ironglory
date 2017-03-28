require 'test_helper'

class UserTest < ActiveSupport::TestCase

  context "associations" do
    should have_many :orders
  end

  context "validations" do
    should have_secure_password
    should validate_presence_of :first_name
    should validate_presence_of :last_name
    should validate_presence_of :email
  end

  # check their docs again for a potentially better way to do first/last name
end
