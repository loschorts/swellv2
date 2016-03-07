# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

ActiveRecord::Base.connection.reset_pk_sequence!('users')

User.create(username: "loschorts", email: "ken@ken.com", password: "kenken")
User.create(username: "audball", email: "audrey@audrey.com", password: "kenissexy")
User.create(username: "guest", email: "guest@guest.com", password: "password")