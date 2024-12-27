# HTML Portfolio Project Assignment

## Stage 1: Develop Portfolio

### Required Pages
1. Home (index.html)
   - Introduction section
   - Professional summary
   - Navigation menu to other pages
   - Profile picture (use placeholder if needed)

2. Projects (projects.html)
   - Table displaying at least 3 projects
   - Columns: Project Name, Description, Duration, Technologies Used
   - Each project should link to its details

3. Skills (skills.html)
   - Use nested tables to categorize skills
   - Include: Technical Skills, Soft Skills, Tools & Technologies

4. Contact (contact.html)
   - HTML form with following fields:
     - Name (required)
     - Email (required)
     - Subject (dropdown)
     - Message (textarea)
     - Submit button with hover effect
   - Include social media links
   - Add your professional email

5. Volunteering & Community (volunteering.html)
   - Table showing involvement in community initiatives
   - Columns: Initiative Name, Role, Duration, Impact
   - Suggested Technical Community Activities:
     - Local Code Club Mentor
     - Open Source Contributions
     - Tech Workshop Facilitator
     - Hackathon Organizer/Mentor
     - STEM Education Volunteer
     - Tech Conference Volunteer
     - Programming Study Group Leader
     - Technical Blog Writer
     - Virtual Coding Camp Instructor
     - Tech Support for Non-Profits
   - Each activity should include:
     - Description of your role
     - Skills utilized
     - Impact metrics (e.g., number of people helped, projects completed)
     - Links to relevant organizations or projects

## Stage 2: Add Version Control

1. Create GitHub Repository
   - Go to github.com
   - Click "New repository"
   - Name it "portfolio"
   - Make it public
   - Don't initialize with README
   - Copy the repository URL

2. Local Git Setup

   Step 1: Initialize Git Repository
   ```bash
   # Navigate to your project directory
   cd path/to/your/portfolio

   # Initialize git
   git init
   ```

   Step 2: Create and Configure .gitignore
   ```bash
   # Create .gitignore file
   touch .gitignore

   # Open .gitignore and add the following lines:
   node_modules/
   .DS_Store
   *.log
   ```

   Step 3: Connect to Remote Repository
   ```bash
   # Add the remote repository
   git remote add origin https://github.com/yourusername/portfolio.git

   # Verify remote addition
   git remote -v
   ```

   Step 4: Prepare and Stage Files
   ```bash
   # Check status of your files
   git status

   # Stage all files
   git add .

   # Verify staged files
   git status
   ```

   Step 5: Commit Changes
   ```bash
   # Create initial commit
   git commit -m "Initial portfolio setup"
   ```

   Step 6: Set Main Branch and Push
   ```bash
   # Set main as default branch
   git branch -M main

   # Push to GitHub
   git push -u origin main
   ```

## Stage 3: Deploy

- Sign up/Login to Vercel (vercel.com)
- Click "Add New Project"
- Choose "Import Git Repository"
- Select your "portfolio" repository
- Keep default configurations
- Click "Deploy"
- Wait for deployment to complete
- Access your site via the provided Vercel URL
