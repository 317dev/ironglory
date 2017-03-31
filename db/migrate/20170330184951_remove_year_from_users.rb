class RemoveYearFromUsers < ActiveRecord::Migration[5.0]
  def change
    remove_reference :users, :year, foreign_key: true
  end
end
