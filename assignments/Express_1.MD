# ExpressJS Assignments

## Task 1: Express.js Web Server Setup

Create a basic skincare website called GlowDerma with the following features 🌟:

1. Project Setup 📁
   - Create and navigate to directory `GlowDerma`
   - Initialize npm and install Express.js
   - Create `index.js` as the entry point

2. Implement Core Routes 🛣️
   - `GET /`: Welcome message
   - `GET /about`: Company description in HTML
   - `GET /contact`: Contact information in JSON
   - `GET /products`: Product catalog in JSON
   - Sample products data:
     ```json
     [
       {
         "name": "Hydrating Serum",
         "price": "$25",
         "description": "A lightweight serum that deeply hydrates and plumps the skin."
       },
       {
         "name": "Vitamin C Cream",
         "price": "$30",
         "description": "Brightens skin tone and reduces the appearance of dark spots."
       }
     ]
     ```

3. Server Configuration ⚙️
   - Set up Express server on port 5000
   - Add appropriate server startup message

4. Version Control 📝
   - Initialize Git repository
   - Create `.gitignore` for `node_modules`
   - Set up GitHub repository
   - Push initial commit

5. API Testing 🧪
   - Set up Postman collection
   - Test all endpoints
   - Verify responses and status codes

6. Error Handling ⚠️
   - Implement 404 handler for undefined routes
   - Return appropriate error message in JSON format

Key improvements made:
- Streamlined the instructions
- Grouped related tasks
- Removed redundant code blocks
- Kept only essential sample data
- Added clear section organization
- Used emojis for better visual hierarchy

## Task 2: Express.js Routes & API Development 

Build the following features for GlowDerma's order management system 🏥:

1. Define the orders data: 📦
   ```javascript
   const orders = [
     { id: 1, product: 'Anti-Aging Serum', quantity: 2 },
     { id: 2, product: 'Vitamin C Moisturizer', quantity: 1 },
     { id: 3, product: 'Hyaluronic Acid', quantity: 3 }
   ]
   ```

2. Implement order lookup endpoint: 🔍
   - Route: `GET /orders/:orderID`
   - Return matching order with status 200
   - Return "Order Not Found" with status 404 if no match

3. Define the products catalog: 💄
   ```javascript
   const products = [
     { id: 11, name: "Retinol Serum", price: 1200, availableQty: 50 },
     { id: 12, name: "Niacinamide Solution", price: 800, availableQty: 30 },
     { id: 14, name: "Peptide Moisturizer", price: 1500, availableQty: 100 },
     { id: 15, name: "Glycolic Acid Toner", price: 900, availableQty: 20 }
   ]
   ```

4. Create product filtering endpoint: 🔎
   - Route: `GET /products`
   - Filter options:
     - No params: Return all products
     - `name`: Filter by product name (e.g., `?name=Retinol`)
     - `maxPrice`: Filter by maximum price (e.g., `?maxPrice=1000`)
     - Support combining both filters

5. Implement shopping cart functionality: 🛒
   - Initialize empty `shoppingCart` array
   - Create endpoints:
     - `GET /cart`: Return cart contents
     - `POST /cart`: Add items
       - Required fields: `id`, `name`, `price`, `qty`
       - Return 400 if any field is missing

6. Set up Postman testing: 🧪
   - Create a pre-request script that:
     - Maintains a product name array
     - Randomly selects a name
     - Stores it as `randomITEMName`
     - Uses it in POST request body

## Task 3: Express.js Middlewares

Continue with the GlowDerma project and implement the following middleware in `index.js` 🚀:

1. Create a request logger middleware that outputs: 📝
   `DATETIME | HTTP METHOD | PATH` for every incoming request and simultaneously stores the same inside a `server.log` file

2. Implement a 404 handler middleware that: 🚫
   - Catches requests to undefined routes
   - Returns "We don't have this page yet!"
   - Sets status code to 404

3. Add an error handling middleware that: ⚠️
   - Catches all server errors
   - Logs the error to terminal
   - Returns "Sorry! Something went wrong"
   - Sets status code to 500

4. Set up static file serving: 🖼️
   - Create a `public` directory in project root
   - Download [this image](https://github.com/smaranjitghose/ParulUniversityMEAN/blob/main/practice_problems/datasets/static_file_demo.png)
   - Save it in the `public` directory
   - Configure middleware to serve files from `public` under the `/assets` path


## Task 4: Dynamic Views with Handlebars 🎨

Enhance the GlowDerma project by creating dynamic views using Handlebars:

1. Project Setup 📦
   - Install Handlebars:
     ```bash
     npm install express-handlebars
     ```
   - Create views directory structure:
     ```
     views/
     ├── layouts/
     │   └── main.hbs
     ├── partials/
     │   └── footer.hbs
     └── pages/
         ├── services.hbs
         └── reviews.hbs
     ```

2. Footer Partial Creation 🦶
   - Pass footer data:
     ```json
     {
       "clinic": {
         "name": "GlowDerma Skin Clinic",
         "address": "123 Health Avenue",
         "email": "care@glowderma.com",
         "phone": "+91 98765 43210",
         "social": {
           "instagram": "@glowderma",
           "facebook": "/glowderma"
         }
       }
     }
     ```
   - Display all clinic information
   - Must be included in all subsequent pages

3. Services Page ("/services") 💆‍♀️
   - Pass service data:
     ```json
     {
       "featured": true,
       "services": [
         {
           "name": "Basic Facial",
           "duration": "30 mins",
           "available": true,
           "details": {
             "sessions": 1,
             "consultation": true
           }
         },
         {
           "name": "Advanced Facial",
           "duration": "60 mins",
           "available": false,
           "details": {
             "sessions": 2,
             "consultation": true
           }
         }
       ]
     }
     ```
   - Display "Featured Services" heading only when featured is true
   - Create list of all services showing names and duration
   - For each service, show session count and consultation status
   - Display "Currently Unavailable" for unavailable services

4. Reviews Page ("/reviews") ⭐
   - Create these custom helpers:
     ```javascript
     const helpers = {
       // Format date to "DD Month YYYY"
       formatDate: function(date) {
         // "2024-02-01" -> "01 February 2024"
       },
       // Display star rating
       showStars: function(rating) {
         // 4 -> "★★★★☆"
       }
     }
     ```
   - Pass review data:
     ```json
     {
       "reviews": [
         {
           "name": "John Doe",
           "date": "2024-02-01",
           "rating": 4,
           "comment": "Excellent service!"
         },
         {
           "name": "Jane Smith",
           "date": "2024-01-28",
           "rating": 5,
           "comment": "Great results!"
         }
       ]
     }
     ```
   - Show each review with formatted date and star rating
   - Display the comment for each review

## Task 5: Router Middleware and Repo-Restructuring 🏗️

Refactor the GlowDerma project to implement proper code organization using Express Router and Controllers:

1. Project Structure 📂
   ```
   GlowDerma/
   ├── controllers/
   │   ├── homeController.js
   │   ├── productController.js
   │   ├── orderController.js
   │   ├── cartController.js
   │   ├── serviceController.js
   │   └── reviewController.js
   ├── routes/
   │   ├── homeRoutes.js
   │   ├── productRoutes.js
   │   ├── orderRoutes.js
   │   ├── cartRoutes.js
   │   ├── serviceRoutes.js
   │   └── reviewRoutes.js
   ├── views/ (existing)
   ├── public/ (existing)
   ├── index.js
   └── package.json
   ```

2. Move Business Logic to Controllers 🎮
   - Create separate controller files for each feature
   - Each controller should handle:
     - Data processing
     - Business logic
     - Response formatting
     - Template rendering (for views)

3. Create Route Files 🛣️
   - Implement Express Router for each feature
   - Move existing routes from `index.js` to respective route files
   - Link routes to controller methods
   - Keep URL patterns consistent

4. Update Main Application File ⚙️
   - Modify `index.js` to:
     - Import all route modules
     - Mount routers on appropriate paths
     - Keep middleware configuration
     - Maintain error handling
     - Continue serving on port 5000


## Task 6: MongoDB Integration with Mongoose 🗃️

Enhance the GlowDerma project by integrating MongoDB, focusing on CRUD operations for the Product feature:

1. Database Setup 🔌
   - Create `config/db.js`:
     ```javascript
     // Connection URL
     MONGODB_URI = "mongodb://localhost:27017/glowderma"
     ```
   - Install required packages:
     ```bash
     npm install mongoose dotenv
     ```
   - Implement MongoDB connection with error handling

2. Create Product Model 📝
   - Create `models/Product.js`:
     ```javascript
     {
       name: String,         // "Retinol Serum"
       price: Number,        // 1200
       description: String,  // "Anti-aging serum..."
       inStock: Boolean,     // true
       quantity: Number      // 50
     }
     ```

3. Modify Product Controller 🎮
   - Update `productController.js` to implement:
     ```javascript
     // CRUD Operations
     getAllProducts()   // GET /products
     getProductById()  // GET /products/:id
     createProduct()   // POST /products
     updateProduct()   // PUT /products/:id
     deleteProduct()   // DELETE /products/:id
     ```

4. Update Product Routes 🛣️
   - Modify `routes/productRoutes.js` to include all CRUD endpoints
   - Implement proper error handling
   - Return appropriate HTTP status codes





