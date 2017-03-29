class AddLimitedEditionToPatches < ActiveRecord::Migration[5.0]
  def change
    add_column :patches, :limited_edition, :boolean
  end
end
