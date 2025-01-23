# Express 2

### 1. GlowDerma Project
Open index.js for modifications

### 2. Orders Array
```javascript
[
  { id: 1, product: 'Anti-Aging Serum', quantity: 2 },
  { id: 2, product: 'Vitamin C Moisturizer', quantity: 1 },
  { id: 3, product: 'Hyaluronic Acid', quantity: 3 }
]
```

### 3. /orders/:orderID Route
Create GET handler that:
- Uses orderID parameter
- Returns matching order (Status 200)
- Returns "Order Not Found" for no match (Status 404)

### 4. Products Array
```javascript
[
  { id: 11, name: "Retinol Serum", price: 1200, availableQty: 50 },
  { id: 12, name: "Niacinamide Solution", price: 800, availableQty: 30 },
  { id: 14, name: "Peptide Moisturizer", price: 1500, availableQty: 100 },
  { id: 15, name: "Glycolic Acid Toner", price: 900, availableQty: 20 }
]
```

### 5. /products Route
Create GET handler that filters by:
- No parameters: Return full list
- name parameter (Example: name=Retinol)
- maxPrice parameter (Example: maxPrice=1000)
- Both parameters combined

### 6. Shopping Cart
Initialize empty `shoppingCart` array

### 7. /cart Route
Create handlers:
- GET: Return cart contents
- POST:
  - Process JSON body (id, name, price, qty)
  - Add item if all fields present
  - Return error if fields missing (Status 400)
