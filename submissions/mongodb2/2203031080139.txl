1. db.products.insertOne({  "name": "Wireless Earbuds Pro",  "brand": "AudioMax",  "category": "Electronics",  "price": 149.99,  "stock": 60,  "ratings": [4.7, 4.6, 4.8],  "description": "Premium wireless earbuds with noise-canceling and 20-hour battery life",  "tags": ["wireless", "bluetooth", "audio", "earbuds", "noise-canceling"],  "lastUpdated": new Date("2024-12-13"),  "specifications": {    "color": "White",    "weight": "100g",    "connectivity": "Bluetooth 5.2",    "batteryLife": "20 hours"  }});

2. db.products.find({price:{$lt:100}},{name:true,_id:false})

3. db.products.updateOne({name:"Wireless Headphones"},{$set:{stock:40}})

4. db.products.deleteMany({category:"Gaming"})

5. db.products.find().sort({price:-1})

6. db.products.find({stock:{$gt:50,$lt:100}},{name:true,_id:false})

7. db.products.find({ "tags":{$in:["wireless","bluetooth"]}},{"name":1,"_id": 0 });

8. db.products.aggregate([{$addFields:{averageRating:{ $avg:"$ratings"}}},{$matc$match:{averageRating:{ $gt:4.5}}},{ $project:{"name":1,"averageRating":1,"_id":0}}]);

9. db.products.find({"lastUpdated":{$gt:newDate("2024-02-01")}},{"name":1,"lastUpdated":1,"_id":0});

10. db.products.find({"ratings":{ $size:3}},{"name": 1,"ratings":1,"_id":0});

11. db.products.find({"tags":{"$in":["wireless","charging"]}})

12. db.products.find({"description":{"$regex":"programmable","$options":"i"}})

13. db.products.find({description:"(fitness|exercise)"},{name:true,_id:false})

14. 

15. db.products.createIndex({price:1,stock:1})

16. db.products.find({category:"Electronics"}).sort({price:1})

17. db.products.createIndex({ name: "text", description: "text", tags: "text" })

18. db.products.updateMany({stock:{$gt:100}},[{$set:{price:{$multiply:["$price",0.9]}}}])

19. 
    
20. 