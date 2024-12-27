<h1 align="center">🌟 JavaScript Beginner Projects 🌟</h1>

## 📄 Project 1: Professional Resume Creation

### 📝 Description
Create a professional resume that is clean, well-structured, and maintains proper spacing and alignment.

### ✅ Requirements
1. Create a header section with:
   - Your full name (large, centered)
   - Contact information (aligned center/right)
     * Email
     * Phone number
     * LinkedIn/GitHub (optional)

2. Create dedicated sections for:
   - Education
     * Degree/Course name
     * University/Institution name
     * Year of study
     * CGPA/Percentage if applicable
   
   - Technical Skills
     * Programming languages
     * Web technologies
     * Development tools
     * Other relevant skills
   
   - Projects (2-3 entries)
     * Project name
     * Brief description
     * Technologies used
     * Your role/contribution
   
   - Experience (if any)
     * Position
     * Company/Organization
     * Duration
     * Key responsibilities

### 🛠️ Technical Requirements
1. Use proper HTML semantic elements
2. Implement clean CSS styling
3. Maintain consistent spacing and alignment
4. Ensure mobile responsiveness

### ⭐ Bonus Challenges
- Add subtle animations on hover
- Include a print stylesheet
- Make it downloadable as PDF

--

## 📝 Project 2: Student Feedback Form

### 📝 Description
Create a feedback form that collects student information and displays a personalized thank you message. The form should collect data and show it both on the webpage and in the console.

### ✅ Requirements
1. Create a form with:
   - Input field for student name
   - Input field for enrollment number
   - Select box for division (A, B, C)
   - Textarea for comments
   - Submit button

2. When form is submitted:
   - Show message "Thank you [student name] for your feedback!" on the webpage
   - Print all collected data to console
   - Clear all form fields after submission

### 🛠️ Technical Requirements
1. Use proper HTML form elements
2. Handle form submission with JavaScript
3. Extract values from form fields
4. Display output without page refresh

### ⭐ Bonus Challenges
- Add basic form validation
- Style the success message
- Show all submitted data on page

---

## 🔢 Project 3: Interactive Counter Application

### 📝 Description
Create an interactive counter application that displays a number and allows users to manipulate it using three buttons.

### ✅ Requirements
1. Create an HTML page with:
   - A display area showing the current count (starting at 0)
   - Three buttons labeled:
     * "+" (increment)
     * "-" (decrement)
     * "Reset"

2. Implement the following functionality:
   - When the "+" button is clicked, the counter should increase by 1
   - When the "-" button is clicked, the counter should decrease by 1
   - When "Reset" is clicked, the counter should return to 0

### 🛠️ Technical Requirements
1. Use vanilla JavaScript (no frameworks)
2. The counter display must update immediately after each button click
3. The counter value should be visible on the page at all times
4. All buttons should be clickable and functional at all times

### ⭐ Bonus Challenges
- Add a visual feedback when buttons are clicked
- Prevent the counter from going below 0
- Add keyboard shortcuts (arrow up/down for +/- and 'R' for reset)

---

## 📐 Project 4: 3D Geometry Calculator & Cheatsheet

### 📝 Description
Create an interactive calculator that computes volume and surface area for various 3D geometric shapes. The application should include formulas for reference and perform calculations based on user input.

### ✅ Requirements
1. Create HTML sections for the following shapes:
   - Cube
   - Sphere
   - Cylinder
   - Cone
   - Rectangular Prism

2. For each shape, include:
   - A visual representation or diagram
   - The formulas for both volume and surface area
   - Input fields for required measurements
     * Length, width, height for rectangular prism
     * Radius, height for cylinder/cone
     * Side length for cube
     * Radius for sphere

3. Implement the following functionality:
   - Real-time calculation as users input values
   - Clear display of both volume and surface area results
   - Input validation for negative numbers
   - Reset button for each shape's calculations

### 🛠️ Technical Requirements
1. Use vanilla JavaScript for calculations
2. All input fields must accept numerical values only
3. Results should update immediately after input changes
4. Display calculations with appropriate units (cubic units for volume, square units for surface area)
5. Include proper error handling for invalid inputs

### ⭐ Bonus Challenges
- Add unit conversion (between metric and imperial)
- Implement a "copy to clipboard" feature for results
- Add animations or 3D visualizations of shapes
- Include a "compare shapes" feature to display multiple results side by side

---

## 🎲 Project 5: Dice Game Simulator

### 📝 Description
Create a two-player dice game where each player rolls a die, and the player with the higher number wins. The game should simulate real dice rolls and display the results dynamically.

### ✅ Requirements
1. Create a user interface with:
   - Two clearly labeled player sections
   - A "Roll Dice" button for each player
   - Display areas for each player's roll result
   - A section announcing the winner
   - A "New Game" or "Play Again" button

2. Implement the following functionality:
   - Generate random numbers between 1 and 6 for each roll
   - Player 1 must roll first, then Player 2
   - After both players roll, immediately display:
     * Each player's roll value
     * The winner (or "Tie" if equal)
   - Disable Player 2's roll button until Player 1 has rolled
   - Reset the game state when "New Game" is clicked

### 🛠️ Technical Requirements
1. Use Math.random() for generating random numbers
2. Implement proper button state management (enable/disable)
3. Clear display of current game state
4. Ensure fair and random number generation
5. Handle all possible game outcomes (P1 wins, P2 wins, tie)

### ⭐ Bonus Challenges
- Add dice roll animations
- Keep track of score across multiple games
- Add sound effects for rolling dice
- Include dice face graphics instead of numbers
- Add a "Best of 3" game mode

---

## 🎯 Project 6: Number Guessing Game

### 📝 Description
Create a number guessing game that uses a while loop to continuously ask for user input until they guess the correct number. The program should generate a random number between a minimum and maximum value provided by the user.

### ✅ Requirements
1. The program should:
   - Ask user for minimum and maximum range using prompt()
   - Generate a random number in that range
   - Use a while loop to:
     * Keep asking for guesses
     * Continue until user guesses correctly
     * Display "Too high" or "Too low" for each wrong guess

2. Handle these cases:
   - Invalid inputs (not a number)
   - Out of range guesses
   - User cancelling the game

### 🛠️ Technical Requirements
1. Must use a while loop
2. Must use prompt() for inputs
3. Must keep track of all guesses
4. Must display game progress in a log

### ⭐ Bonus Challenges
- Count number of attempts
- Show guess history at the end
- Add option to play again



## 📄 Project 9: Custom Image Classification using ML5.js

### 📝 Description
Create an interactive web application that performs image classification using a custom trained model from Teachable Machine and ML5.js. The application should allow users to upload images, process them appropriately, and display classification results in a user-friendly manner.

### ✅ Requirements
1. Model Training Requirements:
   - Train a custom image classification model using Teachable Machine
   - Include at least 3 different classes/categories
   - Use minimum 20 images per class for training
   - Export the model in a format compatible with ML5.js

2. User Interface Requirements:
   - Create a clean, intuitive interface with:
     * Clear instructions for users
     * File upload button/area for images
     * Preview area for uploaded image
     * Section to display classification results
     * Loading indicator while processing

3. Image Processing Features:
   - Implement image upload handling:
     * Accept common image formats (jpg, png, etc.)
     * Resize images to appropriate dimensions if needed
     * Display preview of uploaded image
     * Validate file types and sizes
   
   - Classification Display:
     * Show top prediction(s) with confidence scores
     * Display results in a clear, readable format
     * Update results in real-time for new uploads
     * Handle and display any processing errors

4. Application Flow:
   - Proper loading and initialization of ML5.js model
   - Clear user feedback during:
     * Model loading
     * Image processing
     * Classification process
   - Smooth transition between states

### 🛠️ Technical Requirements
1. Implementation Requirements:
   - Use ML5.js for image classification
   - Implement proper error handling
   - Ensure responsive design
   - Follow clean code practices
   
2. Code Organization:
   - Separate HTML, CSS, and JavaScript files
   - Clear commenting and documentation
   - Proper variable and function naming
   - Modular code structure

3. Performance Considerations:
   - Optimize image processing
   - Handle asynchronous operations properly
   - Implement appropriate loading states
   - Ensure smooth user experience

### ⭐ Bonus Challenges
- Add webcam support for real-time classification
- Implement batch processing for multiple images
- Create a confusion matrix for model evaluation
- Add visual representations of confidence scores (graphs/charts)
- Include option to switch between different custom models
- Implement image preprocessing options (brightness, contrast adjustments)




## 📄 Project 10: Face Recognition Attendance System using Teachable Machine

## 📝 Description
Build a simple attendance system using Teachable Machine that can recognize your face through a webcam. When it sees you, it should welcome you; otherwise, it should show "Invalid User".

### ✅ Core Requirements

#### 1. Model Training:
* Create a model on Teachable Machine website
* Two classes only: "Me" and "Other"
* Take at least 30 pictures of yourself
* Take at least 50 pictures of other people/faces
* Export the model for ML5.js

#### 2. Basic Interface:
* Webcam video display
* Status message area (Welcome/Invalid User)
* Simple attendance log
* Start/Stop camera button

#### 3. Main Features:
* Camera access and display
* Real-time face recognition
* Simple message display:
    * "Welcome [Your Name]" for you
    * "Invalid User" for others
* Basic timestamp logging

### 🛠️ Technical Setup

1. Required Files:
* index.html
* style.css
* script.js
* Your trained model files


2. Required Libraries:
* ML5.js
* P5.js (for webcam)

3. Basic Code Structure:
```javascript
// 1. Load your model
// 2. Start webcam
// 3. Check faces
// 4. Show results
```

### ⭐Bonus CHallenges:
* Add a simple table to show entry times
* Add a beep sound for detection
* Add a light/dark theme switch
* Export attendance to CSV
