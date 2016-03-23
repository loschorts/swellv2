class CreateCounties < ActiveRecord::Migration
  def change
    create_table :counties do |t|
    	t.string :name, null: false
    	t.string :spitcast_county, null: false
    	t.integer :region_id, null: false
      t.timestamps null: false
    end

    add_index :counties, :spitcast_county, unique: true
    add_index :counties, :region_id
  end
end
