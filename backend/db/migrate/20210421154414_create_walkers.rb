class CreateWalkers < ActiveRecord::Migration[6.1]
  def change
    create_table :walkers do |t|
      t.string :name
      t.string :image
      t.string :quote

      t.timestamps
    end
  end
end
