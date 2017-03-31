class AddAddressingsToAddress < ActiveRecord::Migration[5.0]
  def change
    add_column :addresses, :addressings_id, :integer
    add_column :addresses, :addressings_type, :string
  end
end
