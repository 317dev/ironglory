class RemoveCategoryFromUsers < ActiveRecord::Migration[5.0]
  def change
    remove_reference :users, :category, foreign_key: true
  end
end
