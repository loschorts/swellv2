class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.references :imageable, polymorphic: true, index: true
      t.string :path, null: false
      t.string :caption

      t.timestamps null: false
    end
  end
end
