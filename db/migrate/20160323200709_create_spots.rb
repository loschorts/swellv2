class CreateSpots < ActiveRecord::Migration
  def change
    create_table :spots do |t|
    	t.string :name, null: false
    	t.string :spitcast_county, null: false
    	t.string :county_name, null: false
    	t.float :lat, null: false
    	t.float :lng, null: false
    	t.integer :spitcast_id, null: false
      t.timestamps null: false
    end
    
    add_index :spots, :spitcast_county
    add_index :spots, :spitcast_id, unique: true
  end
end
