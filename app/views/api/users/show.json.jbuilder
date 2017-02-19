json.extract! @user, :username, :id
json.favorites @user.favorites.pluck(:spot_id)