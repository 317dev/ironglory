# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'csv'

csv_text = File.read(Rails.root.join('lib', 'seeds', 'iron_glory_inventory.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  p = Patch.new
  p.name = row['Product']
  p.description = row['Description']
  p.sku = row['SKU']
  p.price = row['Price']
  p.quantity = row['Available'].gsub(/\D/, "")
  p.year = Year.find_or_create_by!(year: row['Year'])
  p.category = Category.find_or_create_by!(name: row['Category'])
  p.image = Rails.root.join("public/img/#{p.sku.downcase}.png").open
  p.save!
end

User.create!(first_name: "admin1", last_name: "admin1", username: "admin", password: "cupcakes", email: "example@example.org", admin: true)

5.times do
  order = Order.create!
  order.patches = Patch.all.sample(3)
end
