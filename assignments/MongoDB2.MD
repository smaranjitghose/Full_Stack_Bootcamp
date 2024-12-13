# MongoDB Practice Dataset and Questions

## Dataset Setup

```javascript
[
  {
    "_id": 1,
    "name": "Wireless Headphones",
    "brand": "SoundMax",
    "category": "Electronics",
    "price": 129.99,
    "stock": 45,
    "ratings": [4.5, 4.0, 5.0, 4.8],
    "description": "Premium noise-canceling wireless headphones with 30-hour battery life",
    "tags": ["wireless", "bluetooth", "audio", "noise-canceling"],
    "lastUpdated": ISODate("2024-01-15"),
    "specifications": {
      "color": "Black",
      "weight": "250g",
      "connectivity": "Bluetooth 5.0"
    }
  },
  {
    "_id": 2,
    "name": "Smart Watch Pro",
    "brand": "TechFit",
    "category": "Electronics",
    "price": 199.99,
    "stock": 30,
    "ratings": [4.2, 4.7, 4.5],
    "description": "Advanced fitness tracking smartwatch with heart rate monitoring",
    "tags": ["smartwatch", "fitness", "health", "bluetooth"],
    "lastUpdated": ISODate("2024-01-20"),
    "specifications": {
      "color": "Silver",
      "weight": "45g",
      "waterResistant": true
    }
  },
  {
    "_id": 3,
    "name": "Coffee Maker Deluxe",
    "brand": "HomeStyle",
    "category": "Appliances",
    "price": 79.99,
    "stock": 60,
    "ratings": [4.0, 4.2, 3.8, 4.5, 4.1],
    "description": "12-cup programmable coffee maker with auto-shutoff feature",
    "tags": ["coffee", "kitchen", "brewing", "appliance"],
    "lastUpdated": ISODate("2024-02-01"),
    "specifications": {
      "color": "Stainless Steel",
      "capacity": "12 cups",
      "programmable": true
    }
  },
  {
    "_id": 4,
    "name": "Gaming Mouse",
    "brand": "GamePro",
    "category": "Gaming",
    "price": 59.99,
    "stock": 100,
    "ratings": [4.8, 4.9, 4.7],
    "description": "High-precision gaming mouse with customizable RGB lighting",
    "tags": ["gaming", "mouse", "rgb", "computer"],
    "lastUpdated": ISODate("2024-02-05"),
    "specifications": {
      "color": "Black",
      "dpi": "16000",
      "programmableButtons": 8
    }
  },
  {
    "_id": 5,
    "name": "Yoga Mat Premium",
    "brand": "FitLife",
    "category": "Sports",
    "price": 45.99,
    "stock": 75,
    "ratings": [4.6, 4.4, 4.8],
    "description": "Extra thick eco-friendly yoga mat with carrying strap",
    "tags": ["yoga", "fitness", "exercise", "mat"],
    "lastUpdated": ISODate("2024-02-10"),
    "specifications": {
      "color": "Purple",
      "thickness": "6mm",
      "material": "TPE"
    }
  },
  {
    "_id": 6,
    "name": "Portable Speaker",
    "brand": "SoundMax",
    "category": "Electronics",
    "price": 89.99,
    "stock": 50,
    "ratings": [4.3, 4.6, 4.4],
    "description": "Waterproof portable Bluetooth speaker with 20-hour battery life",
    "tags": ["speaker", "bluetooth", "portable", "waterproof"],
    "lastUpdated": ISODate("2024-02-15")
  },
  {
    "_id": 7,
    "name": "Digital Camera",
    "brand": "PhotoPro",
    "category": "Electronics",
    "price": 549.99,
    "stock": 15,
    "ratings": [4.7, 4.8, 4.9],
    "description": "24MP digital camera with 4K video capability",
    "tags": ["camera", "photography", "video", "4k"],
    "lastUpdated": ISODate("2024-02-20")
  },
  {
    "_id": 8,
    "name": "Blender Plus",
    "brand": "HomeStyle",
    "category": "Appliances",
    "price": 69.99,
    "stock": 40,
    "ratings": [4.2, 4.0, 4.3],
    "description": "High-power blender with multiple speed settings",
    "tags": ["blender", "kitchen", "smoothie", "appliance"],
    "lastUpdated": ISODate("2024-02-25")
  },
  {
    "_id": 9,
    "name": "Running Shoes",
    "brand": "SportFlex",
    "category": "Sports",
    "price": 119.99,
    "stock": 85,
    "ratings": [4.5, 4.6, 4.4],
    "description": "Lightweight running shoes with enhanced cushioning",
    "tags": ["shoes", "running", "sports", "footwear"],
    "lastUpdated": ISODate("2024-03-01")
  },
  {
    "_id": 10,
    "name": "Smart Doorbell",
    "brand": "SecureHome",
    "category": "Smart Home",
    "price": 149.99,
    "stock": 25,
    "ratings": [4.4, 4.2, 4.5],
    "description": "WiFi-enabled video doorbell with motion detection",
    "tags": ["security", "smart home", "camera", "wifi"],
    "lastUpdated": ISODate("2024-03-05")
  },
  {
    "_id": 11,
    "name": "Electric Kettle",
    "brand": "HomeStyle",
    "category": "Appliances",
    "price": 39.99,
    "stock": 70,
    "ratings": [4.3, 4.1, 4.4],
    "description": "Fast-boiling electric kettle with auto-shutoff",
    "tags": ["kettle", "kitchen", "appliance", "electric"],
    "lastUpdated": ISODate("2024-03-10")
  },
  {
    "_id": 12,
    "name": "Gaming Keyboard",
    "brand": "GamePro",
    "category": "Gaming",
    "price": 129.99,
    "stock": 55,
    "ratings": [4.7, 4.8, 4.6],
    "description": "Mechanical gaming keyboard with RGB backlighting",
    "tags": ["gaming", "keyboard", "mechanical", "rgb"],
    "lastUpdated": ISODate("2024-03-15")
  },
  {
    "_id": 13,
    "name": "Resistance Bands",
    "brand": "FitLife",
    "category": "Sports",
    "price": 29.99,
    "stock": 120,
    "ratings": [4.4, 4.5, 4.3],
    "description": "Set of 5 resistance bands with different strength levels",
    "tags": ["fitness", "exercise", "strength", "workout"],
    "lastUpdated": ISODate("2024-03-20")
  },
  {
    "_id": 14,
    "name": "Smart Light Bulbs",
    "brand": "SecureHome",
    "category": "Smart Home",
    "price": 34.99,
    "stock": 90,
    "ratings": [4.2, 4.3, 4.1],
    "description": "WiFi-enabled smart LED bulbs with color changing",
    "tags": ["lighting", "smart home", "led", "wifi"],
    "lastUpdated": ISODate("2024-03-25")
  },
  {
    "_id": 15,
    "name": "Wireless Charger",
    "brand": "TechFit",
    "category": "Electronics",
    "price": 49.99,
    "stock": 65,
    "ratings": [4.5, 4.4, 4.6],
    "description": "Fast wireless charging pad with multiple device support",
    "tags": ["charger", "wireless", "electronics", "charging"],
    "lastUpdated": ISODate("2024-03-30")
  }
]

```

## Practice Questions

1. Write a query to insert a new product in the collection with all required fields.

2. Find all products with a price less than $100.

3. Update the stock quantity of "Wireless Headphones" to 40.

4. Delete all products from the "Gaming" category.

5. Find all products and sort them by price in descending order.

6. Find products with stock between 50 and 100 units.

7. Find products that have either "wireless" or "bluetooth" in their tags.

8. Find products where the average rating is greater than 4.5.

9. Find products that were last updated after February 1st, 2024.

10. Find products with exactly 3 ratings.

11. Perform a text search to find products related to "wireless charging".

12. Find products that contain the word "programmable" in their description.

13. Search for products containing either "fitness" or "exercise" in their description.

14. Write a query to list all indexes in the products collection.

15. Create a compound index on price and stock fields.

16. Explain the query plan for finding products by category and sorting by price.

17. Find products using the text index and sort by relevance score.

18. Find the average price of products in each category.

19. Find products with the highest rating average.

20. Count the number of products by brand and sort by count in descending order.

21. Calculate the average rating for each brand, considering all product ratings.

22. Find the top 3 categories by total inventory value (price * stock).

23. Generate a report of products that need restocking (stock < 30).

24. Update all products' prices with a 10% discount for items with stock > 100.

25. Add a "featured" field to all products with ratings average > 4.5.
