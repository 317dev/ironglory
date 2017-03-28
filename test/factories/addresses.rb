FactoryGirl.define do
  factory :address do
    street "MyString"
    street_two "MyString"
    city "MyString"
    state "MyString"
    zip_code 1
    user nil
    order nil
  end
end
