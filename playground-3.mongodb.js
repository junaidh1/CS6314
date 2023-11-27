// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('sweetbeecakes');

// Create a new document in the collection.
db.getCollection('products').insertMany([
    {
      "item_id": 1001,
      "item_name": "French Bread",
      "item_type": "bread",
      "item_description": "A delightful twisted French bread with soft texture.",
      "item_size": "Medium",
      "item_price": 4.99,
      "item_details": "Freshly baked using traditional French techniques for an authentic taste.",
      "item_image": "images/bread-french.jpeg"
    },
    {
      "item_id": 1002,
      "item_name": "Sourdough Bread",
      "item_type": "bread",
      "item_description": "Sourdough bread with a tangy flavor and chewy texture.",
      "item_size": "Medium",
      "item_price": 5.49,
      "item_details": "Made with a natural sourdough starter for exceptional taste and aroma.",
      "item_image": "images/bread-sourdough.jpeg"
    },
    {
      "item_id": 1003,
      "item_name": "Birthday Cake",
      "item_type": "cake",
      "item_description": "A scrumptious birthday cake perfect for celebrations.",
      "item_size": "9-inch",
      "item_price": 29.99,
      "item_details": "Moist layers with creamy frosting, guaranteed to make your day special.",
      "item_image": "images/cake-birthday.jpeg"
    },
    {
      "item_id": 1004,
      "item_name": "Fruit Cake",
      "item_type": "cake",
      "item_description": "Delicious fruit cake loaded with assorted fruits.",
      "item_size": "8-inch",
      "item_price": 27.99,
      "item_details": "Rich in flavor, filled with a variety of fruits, a perfect treat for any occasion.",
      "item_image": "images/cake-fruit.jpeg"
    },
    {
      "item_id": 1005,
      "item_name": "Fruit and Nut Cake",
      "item_type": "cake",
      "item_description": "A delightful combination of fruits and nuts in a moist cake.",
      "item_size": "7-inch",
      "item_price": 31.99,
      "item_details": "Packed with strawberries, dried fruits, and nuts. A healthy blend of sweetness and crunchiness.",
      "item_image": "images/cake-fruitandnut.jpeg"
    },
    {
      "item_id": 1006,
      "item_name": "German Cake",
      "item_type": "cake",
      "item_description": "Traditional German cake with unique flavors and textures.",
      "item_size": "10-inch",
      "item_price": 35.99,
      "item_details": "Authentic recipe delivering a taste of Germany with every bite.",
      "item_image": "images/cake-german.jpeg"
    },
    {
      "item_id": 1007,
      "item_name": "Wedding Cake (Purple)",
      "item_type": "cake",
      "item_description": "An elegant purple-themed wedding cake for your special day.",
      "item_size": "Multiple Tiers",
      "item_price": 199.99,
      "item_details": "Exquisitely decorated and designed to make your wedding memorable.",
      "item_image": "images/cake-wedding-purple.jpeg"
    },
    {
      "item_id": 1008,
      "item_name": "Wedding Cake (White)",
      "item_type": "cake",
      "item_description": "A classic white-themed wedding cake to adorn your celebration.",
      "item_size": "Multiple Tiers",
      "item_price": 189.99,
      "item_details": "Beautifully crafted layers symbolizing purity and new beginnings.",
      "item_image": "images/cake-wedding-white.jpeg"
    },
    {
      "item_id": 1009,
      "item_name": "Chocolate Chip Cookies",
      "item_type": "cookies",
      "item_description": "Large delicious cookies loaded with chocolate chips.",
      "item_size": "Pack of 6",
      "item_price": 24.99,
      "item_details": "Perfectly baked cookies with a generous amount of chocolate chips in every bite.",
      "item_image": "images/cookies-chocolatechip.jpeg"
    },
    {
      "item_id": 1010,
      "item_name": "Blueberry Muffin",
      "item_type": "muffin",
      "item_description": "A delightful muffin bursting with fresh blueberries.",
      "item_size": "Six Medium Size",
      "item_price": 18.99,
      "item_details": "Made with plump orgnic blueberries, a perfect breakfast or snack choice.",
      "item_image": "images/muffin-blueberry.jpeg"
    },
    {
      "item_id": 1050,
      "item_name": "Pecan Pie",
      "item_type": "pie",
      "item_description": "Delicious pecan pie with a buttery crust and rich filling.",
      "item_size": "7-inch",
      "item_price": 15.99,
      "item_details": "Loaded with pecans and baked to perfection, a classic dessert choice.",
      "item_image": "images/pie-pecan.jpeg"
    }
  ]);
