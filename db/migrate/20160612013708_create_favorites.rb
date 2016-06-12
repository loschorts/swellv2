class CreateFavorites < ActiveRecord::Migration
  def change
    create_table :favorites do |t|
    	t.integer :user_id, null: false
    	t.integer :spot_id, null: false
      t.timestamps null: false
    end

    add_index :user_id, unique: true
    add_index :spot_id, unique: true
    add_index [:user_id, :spot_id], unique: true
  end
end
