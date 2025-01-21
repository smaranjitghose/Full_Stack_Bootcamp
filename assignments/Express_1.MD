# <h1 align="center">ExpressJS 1</h1>

In this assignment, you will create a basic skincare website using Express.js. This will help you understand the fundamentals of setting up a server, creating routes, and handling HTTP requests.


## Instructions:

1. **Set Up the Project:**
   - Create a new directory named `GlowDerma`.
     ```bash
     mkdir GlowDerma
     ```
   - Navigate into the `GlowDerma` directory and open it in VS Code.
     ```bash
     cd GlowDerma
     code .
     ```
   - Create a file named `index.js` inside the `GlowDerma` directory.

2. **Initialize npm and Install Express:**
   - Initialize npm in the directory.
     ```bash
     npm init -y
     ```
   - Install the Express.js module using npm.
     ```bash
     npm install express
     ```

3. **Set Up the Express Server:**
   - In the `index.js` file, perform the following tasks:
     1. Import and initialize Express.js.
     2. Set the server to listen on port `5000`.
     3. Create the following routes:
        - **Route 1:** `"/"`
          - Method: `GET`
          - Response: Return the text `Welcome to GlowDerma - Your Skincare Journey Begins Here`.
        - **Route 2:** `"/about"`
          - Method: `GET`
          - Response: Return the HTML `<h3>We are a premium skincare brand committed to bringing you dermatologist-approved, clean beauty products</h3>`.
        - **Route 3:** `"/contact"`
          - Method: `GET`
          - Response: Return the JSON:
            ```json
            {
              "email": "care@glowderma.com",
              "instagram": "http://instagram.com/glowderma",
              "consultation": "http://glowderma.com/book-appointment"
            }
            ```
        - **Route 4:** `"/products"`
          - Method: `GET`
          - Response: Return an array of skincare products with their names, prices, and descriptions. Example:
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
     4. Start the server and log the message `Server running on http://localhost:5000` when the server is running.

4. **Set Up Git and GitHub:**
   - Initialize Git in the project directory.
     ```bash
     git init
     ```
   - Create a `.gitignore` file and add the following to ignore the `node_modules` folder:
     ```bash
     node_modules/
     ```
   - Stage all the files for commit.
     ```bash
     git add .
     ```
   - Commit the changes with a meaningful message.
     ```bash
     git commit -m "Initial commit: Set up Express.js server and routes"
     ```
   - Create a new repository on GitHub with the same name (`GlowDerma`).
   - Link your local repository to the remote GitHub repository.
     ```bash
     git remote add origin <your-github-repo-url>
     ```
   - Push your code to the remote repository.
     ```bash
     git push -u origin main
     ```

5. **Bonus Tasks:**
   - Sign up for [Postman](https://www.postman.com/).
   - Install the Postman VS Code extension and log in to your account.
   - Create a Postman collection named `GlowDerma`.
   - Test all the routes (`/`, `/about`, `/contact`, `/products`) using Postman.
   - Verify the status code, headers, and body of each response to ensure they match the expected output.

6. **Additional Challenge:**
   - Implement error handling for undefined routes. If a user tries to access a route that doesn’t exist, return a `404` status code with a JSON response:
     ```json
     {
       "error": "Route not found"
     }
     ```

