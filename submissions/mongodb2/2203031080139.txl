1. db.products.insertOne({  "name": "Wireless Earbuds Pro",  "brand": "AudioMax",  "category": "Electronics",  "price": 149.99,  "stock": 60,  "ratings": [4.7, 4.6, 4.8],  "description": "Premium wireless earbuds with noise-canceling and 20-hour battery life",  "tags": ["wireless", "bluetooth", "audio", "earbuds", "noise-canceling"],  "lastUpdated": new Date("2024-12-13"),  "specifications": {    "color": "White",    "weight": "100g",    "connectivity": "Bluetooth 5.2",    "batteryLife": "20 hours"  }});

2. db.products.find({price:{$lt:100}},{name:true,_id:false})

3. db.products.updateOne({name:"Wireless Headphones"},{$set:{stock:40}})

4. db.products.deleteMany({category:"Gaming"})

5. db.products.find().sort({price:-1})

6. db.products.find({stock:{$gt:50,$lt:100}},{name:true,_id:false})

7. db.products.find(  { "tags": { $in: ["wireless", "bluetooth"] } },  { "name": 1, "_id": 0 });

8. db.products.aggregate([  {$addFields: { averageRating: { $avg: "$ratings" }}  },{$matc$match: { averageRating: { $gt: 4.5 } }  },  { $project: { "name": 1, "averageRating": 1, "_id": 0 }  }]);

9. db.products.find(  { "lastUpdated": { $gt: new Date("2024-02-01") } },  { "name": 1, "lastUpdated": 1, "_id": 0 });

10. db.products.find(  { "ratings": { $size: 3 } },  { "name": 1, "ratings": 1, "_id": 0 });