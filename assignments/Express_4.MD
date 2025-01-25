<h1 align="center">Express 4</h1>

Continue with the GlowDerma project and implement the following routes using Handlebars:

1. Doctors Page ("/doctors")
   - Create a simple HTML page showing a heading "Our Expert Doctors" 
   - Include a paragraph about the clinic's medical expertise
   - Serve this static content using Handlebars template engine
   - The page should use the main layout file

2. Services Page ("/services")
   - Create a route that accepts a query parameter 'category'
   - Display the category name as a heading on the page
   - Example: /services?category=Dermatology should display "Dermatology Services" as heading
   - Style the heading appropriately

3. Appointments ("/book-appointment")
   - Create a route that handles POST requests
   - Accept the following JSON data in request body:
     ```json
     {
       "name": "Patient Name",
       "email": "email@example.com",
       "service": "Service Name",
       "preferredDate": "2024-01-24",
       "preferredTime": "10:00 AM"
     }
     ```
   - Display this appointment data in a formatted card on the page

4. Offerings ("/offerings")
   - Create a route that passes the following JSON data to the template:
     ```json
     {
       "offerings": [
         {
           "name": "Anti-Aging Treatment",
           "price": 5000,
           "duration": "60 mins",
           "description": "Advanced treatment to reduce fine lines and wrinkles",
           "available": true
         },
         {
           "name": "Acne Treatment",
           "price": 3000,
           "duration": "45 mins",
           "description": "Specialized treatment for acne-prone skin",
           "available": true
         },
         {
           "name": "Chemical Peel",
           "price": 4000,
           "duration": "30 mins",
           "description": "Skin resurfacing treatment for even tone",
           "available": false
         }
       ]
     }
     ```
   - Use #each helper to create offering cards
   - Each card should display all offering details
   - Add conditional styling for unavailable treatments

5. Testimonials ("/testimonials")
   - Pass an array of testimonial objects containing:
     ```json
     {
       "testimonials": [
         {
           "name": "John Doe",
           "rating": 5,
           "comment": "Excellent service!",
           "date": "2024-01-20"
         },
         {
           "name": "Jane Smith",
           "rating": 4,
           "comment": "Very professional staff",
           "date": "2024-01-18"
         }
       ]
     }
     ```
   - Create a grid of testimonial cards using #each helper
   - Display star rating using conditional helpers
   - Format the date to be more readable
