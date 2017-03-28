class AddYearIdToPatches < ActiveRecord::Migration[5.0]
  def change
    add_reference :patches, :year, foreign_key: true
  end
end
