# NodeJS 2

## Problem Statement
Create a simple command-line Todo List application using Node.js. The application should store tasks in a text file and provide basic task management functionality.

### Requirements:

1. **File Storage**
   - Use the Node.js `fs` module for file operations
   - Store todos in a text file named `todos.txt`
   - Create the file automatically if it doesn't exist

2. **Commands**
   The application should support these commands:
   ```bash
   node todo.js add <task>      # Add a new task
   node todo.js list            # Display all tasks
   node todo.js delete <number> # Delete a task by its number
   ```

3. **Core Features**
   - `add`: Append a new task to the file
   - `list`: Display numbered tasks from the file
   - `delete`: Remove a specific task by its number
   - Show usage instructions if no valid command is provided

4. **Error Handling**
   - Handle missing task descriptions for `add` command
   - Handle invalid numbers for `delete` command
   - Handle empty todo list cases
   - Handle file read/write errors

### Example Usage:
```bash
$ node todo.js add Buy groceries
Todo added!

$ node todo.js add Call dentist
Todo added!

$ node todo.js list
1. Buy groceries
2. Call dentist

$ node todo.js delete 1
Todo deleted!

$ node todo.js list
1. Call dentist
```

### Technical Requirements:
- Use only the built-in `fs` module
- Use synchronous file operations (fs.readFileSync, fs.writeFileSync, etc.)
- Use `process.argv` for command-line argument parsing
- Implement using switch-case for command handling

### Constraints:
- Do not use any external npm packages
- Do not use promises or async/await
- Do not create any GUI/web interface


### Bonus Challenges:
1. Add a `mark` command to mark tasks as complete
2. Add a `clear` command to delete all tasks
3. Add basic input validation (e.g., prevent empty tasks)
