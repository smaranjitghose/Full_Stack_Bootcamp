<h1 align = "center">ReactJS Foundational Problems</h1>

## 1. Break Down the UI into Components  

- **Task**: Analyze the provided UI and divide it into multiple React components.  
- **Instructions**:  
  - Use a pen and paper or a photo editing tool to visualize the component structure.  
  - No code is required for this step.  
- **UI Image**:  
  ![UI Image](https://github.com/smaranjitghose/Full_Stack_Bootcamp/blob/f681b71e60c357846a377f94de394bb16859beef/assignments/zerodha_components.png)

---

## 2. Create a Greet Component  

- **Task**: Create a `Greet` component using both function declaration and arrow function syntax.  
- **Steps**:  
  1. Create a file `Greet.jsx`.  
  2. Write the `Greet` component using **function declaration** syntax.  
  3. Refactor the `Greet` component to use **arrow function** syntax.  
  4. Register the `Greet` component in `App.jsx` to see the result.  

---

## 3. Rendering Multiple Components and Nesting Components  

### Step 1: Create a Header Component  
1. Create `Header.jsx`.  
2. Define a functional component `Header`.  
3. Render:  
   - A `<h1>` with text: `"Welcome to My Portfolio!"`.  
   - A `<nav>` with links: `"Home"`, `"About"`, `"Contact"`.  

### Step 2: Create a Footer Component  
1. Create `Footer.jsx`.  
2. Define a functional component `Footer`.  
3. Render:  
   - A `<footer>` with text: `"© 2025 Your Name"`.  

### Step 3: Create a MainContent Component  
1. Create `MainContent.jsx`.  
2. Define a functional component `MainContent`.  
3. Render:  
   - A `<h2>` with text: `"Main Content"`.  
   - A `<p>` with any text of your choice.  

### Step 4: Render Components in `App.jsx`  
1. Import `Header`, `MainContent`, and `Footer` in `App.jsx`.  
2. Render them in the following order:  
   ```jsx
   function App() {
     return (
       <div>
         <Header />
         <MainContent />
         <Footer />
       </div>
     );
   }
   export default App;
   ```

---

## 4. Understanding JSX  

### Step 1: Create a `WelcomeMessage` Component  
1. Create `WelcomeMessage.jsx`.  
2. Define a functional component `WelcomeMessage`.  
3. Render:  
   - A `<h1>` with text: `"Hello, World!"`.  
   - A `<p>` with text: `"Welcome to learning JSX!"`.  

### Step 2: Render the Component in `App.jsx`  
1. Import `WelcomeMessage` in `App.jsx`.  
2. Render it inside the `App` component.  

---

## 5. JSX Rules  

### Step 1: Create a `JSXRules` Component  
1. Create `JSXRules.jsx`.  
2. Define a functional component `JSXRules`.  
3. Render:  
   - A `<h1>` with text: `"JSX Rules"`.  
   - A `<p>` listing at least 3 JSX rules:  
     - JSX must return a **single parent element**.  
     - JSX elements must be **properly closed**.  
     - JSX attributes use **camelCase** (e.g., `className`).  

---

## 6. JSX Expressions  

### Step 1: Create a `Greeting` Component  
1. Create `Greeting.jsx`.  
2. Define a functional component `Greeting`.  
3. Render:  
   - A `<h1>` with a dynamic greeting message (use a `name` variable).  
   - A `<p>` with the current date (use `new Date()`).  

### Step 2: Create a `ProductInfo` Component  
1. Create `ProductInfo.jsx`.  
2. Define a functional component `ProductInfo`.  
3. Render:  
   - A `product` object with `name`, `price`, and `availability`.  
   - Display the product details dynamically using `{}`.  

### Step 3: Render Components in `App.jsx`  
1. Import `Greeting` and `ProductInfo` in `App.jsx`.  
2. Render them inside the `App` component.  

---

## 7. Displaying a List of Data  

### Step 1: Create a `UserList` Component  
1. Create `UserList.jsx`.  
2. Define a functional component `UserList`.  
3. Render a list of users using `.map()`:  
   ```javascript
   const users = [
     { id: 1, name: "Alice", age: 25 },
     { id: 2, name: "Bob", age: 30 },
     { id: 3, name: "Charlie", age: 22 },
   ];
   ```

### Step 2: Create a `ProductList` Component  
1. Create `ProductList.jsx`.  
2. Define a functional component `ProductList`.  
3. Render a list of products using `.map()`:  
   ```javascript
   const products = [
     { id: 1, name: "Phone", price: "$699" },
     { id: 2, name: "Laptop", price: "$1200" },
     { id: 3, name: "Headphones", price: "$199" },
   ];
   ```

### Step 3: Render Components in `App.jsx`  
1. Import `UserList` and `ProductList` in `App.jsx`.  
2. Render them inside the `App` component.  

---

## 8. Passing Props to Components  

### Step 1: Create a `Person` Component  
1. Create `Person.jsx`.  
2. Define a functional component `Person`.  
3. Render:  
   - A `<h2>` with `props.name`.  
   - A `<p>` with `props.age`.  

### Step 2: Create a `Product` Component  
1. Create `Product.jsx`.  
2. Define a functional component `Product`.  
3. Render:  
   - A `<h2>` with `props.name`.  
   - A `<p>` with `props.price`.  

### Step 3: Pass Props from `App.jsx`  
1. Import `Person` and `Product` in `App.jsx`.  
2. Pass `name`, `age`, and `price` as props to these components.  

---

## 9. Prop Destructuring  

### Step 1: Create a `Person` Component with Destructuring  
1. Create `Person.jsx`.  
2. Destructure `name` and `age` in the function parameters.  
3. Render:  
   - A `<h2>` with `name`.  
   - A `<p>` with `age`.  

### Step 2: Create a `Product` Component with Destructuring  
1. Create `Product.jsx`.  
2. Destructure `name` and `price` in the function parameters.  
3. Render:  
   - A `<h2>` with `name`.  
   - A `<p>` with `price`.  

### Step 3: Pass Props from `App.jsx`  
1. Import `Person` and `Product` in `App.jsx`.  
2. Pass `name`, `age`, and `price` as props to these components.  

