class Image < ActiveRecord::Base
  belongs_to :imageable, polymorphic: true
  validates :path, :imageable, presence: true
end
