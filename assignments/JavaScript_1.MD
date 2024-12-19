1. Create a RESUME using HTML,CSS and JavaScript
2. Create a Feedback form using HTML,CSS and JavaScript

# 🔢 Task 3: Interactive Counter Application

## 📝 Task Description
Create an interactive counter application that displays a number and allows users to manipulate it using three buttons.

## ✅ Requirements
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

## 🛠️ Technical Requirements
1. Use vanilla JavaScript (no frameworks)
2. The counter display must update immediately after each button click
3. The counter value should be visible on the page at all times
4. All buttons should be clickable and functional at all times

## ⭐ Bonus Challenges
- Add a visual feedback when buttons are clicked
- Prevent the counter from going below 0
- Add keyboard shortcuts (arrow up/down for +/- and 'R' for reset)


# 📐 Task 4: 3D Geometry Calculator & Cheatsheet

## 📝 Task Description
Create an interactive calculator that computes volume and surface area for various 3D geometric shapes. The application should include formulas for reference and perform calculations based on user input.

## ✅ Requirements
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

## 🛠️ Technical Requirements
1. Use vanilla JavaScript for calculations
2. All input fields must accept numerical values only
3. Results should update immediately after input changes
4. Display calculations with appropriate units (cubic units for volume, square units for surface area)
5. Include proper error handling for invalid inputs

## ⭐ Bonus Challenges
- Add unit conversion (between metric and imperial)
- Implement a "copy to clipboard" feature for results
- Add animations or 3D visualizations of shapes
- Include a "compare shapes" feature to display multiple results side by side

---

# 🎲 Task 5: Dice Game Simulator

## 📝 Task Description
Create a two-player dice game where each player rolls a die, and the player with the higher number wins. The game should simulate real dice rolls and display the results dynamically.

## ✅ Requirements
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

## 🛠️ Technical Requirements
1. Use Math.random() for generating random numbers
2. Implement proper button state management (enable/disable)
3. Clear display of current game state
4. Ensure fair and random number generation
5. Handle all possible game outcomes (P1 wins, P2 wins, tie)

## ⭐ Bonus Challenges
- Add dice roll animations
- Keep track of score across multiple games
- Add sound effects for rolling dice
- Include dice face graphics instead of numbers
- Add a "Best of 3" game mode

---

# 🎯 Task 6: Number Guessing Game with While Loop

## 📝 Task Description
Create a number guessing game that uses a while loop to continuously ask for user input until they guess the correct number. The program should generate a random number between a minimum and maximum value provided by the user

## ✅ Requirements
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

## 🛠️ Technical Requirements
1. Must use a while loop
2. Must use prompt() for inputs
3. Must keep track of all guesses
4. Must display game progress in a log

## ⭐ Bonus Challenges
- Count number of attempts
- Show guess history at the end
- Add option to play again

---


