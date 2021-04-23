# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Review.destroy_all
Walker.destroy_all

Walker.create(name: "Jimmy Johnson", image: "https://i.imgur.com/iMLvOXG.jpg", quote: "I just love the challenge of walking cats.")
Walker.create(name: "Jerry Jerison", image: "https://i.imgur.com/SEYOlCu.jpg", quote: "Walking cats is like a box of chocolates, you never know what you are going to get.")
Walker.create(name: "Karl Karlson", image: "https://i.imgur.com/f6IYtQl.png", quote: "My doctor told me no more dangerous sports. So I took up cat walking to get my adrenaline rush.")
Walker.create(name: "Sally Simpson", image: "https://i.imgur.com/Hki8TUd.jpg", quote: "Cat scratches are just angel kisses.")
Walker.create(name: "Ben Jamin", image: "https://i.imgur.com/smbmvDk.jpg", quote: "Sometimes life puts you on a leash and drags you around.")
Walker.create(name: "Stephen Stevens", image: "https://i.imgur.com/7F1IBGQ.jpg", quote: "Cool cats got to stick together.")
Walker.create(name: "Luke Wilde", image: "https://i.imgur.com/leB59wa.jpg", quote: "Walking dogs was just too mainstream.")
Walker.create(name: "John Locke", image: "https://i.imgur.com/Spo0W5a.jpg", quote: "What do you mean we are walking cats?")
Walker.create(name: "Bethany Betcher", image: "https://i.imgur.com/VRDICGA.jpg", quote: "I don't think of it as walking a cat. More like walking a friend.")
Walker.create(name: "Wilson White", image: "https://i.imgur.com/clQbNI6.jpg", quote: "There is nothing more satisfying than a cat giving up its when on a leash.")