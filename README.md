# JS Based Personal LLM
## Setup Instructions

### 1. Cloning the Repository
1. Open your Terminal
2.  Navigate to the directory where you want to clone the repository :
   ```bash
cd C:/WDF/Full_Stack_Bootcamp/ 
```
3. Clone the repository using Git:
  ```bash
  git clone https://github.com/Pratik00531/OpenTalkJS.git
```
4. Once the repository is cloned, navigate to the project directory:
```bash 
cd OpenTalkJS
```
### 2. Installing Dependencies
 Before running the application, you need to install the required dependencies.
1.  Make sure you have Node.js and npm installed. To verify, run the following commands:
```bash
    node -v   # Check Node.js version
    npm -v    # Check npm version
```

If Node.js and npm are not installed, download and install them from [Node.js official website](https://nodejs.org/en).

2. Install the project dependencies. In the project directory, run the following command:

```bash 
npm install
```
   This will install all the dependencies listed in the package.json file.

3. Now  install ollama
```bash 
npm install ollama
```
4. To Verify installation of ollama
```bash
ollama --version
```
### 3. Executing the Application
1. Make a javascript file named "scrip.js"
2. Add these code in script.js:
```bash
import ollama from "ollama";

async function runChat() {
  try {
    const response = await ollama.chat({
      model: "llama3.2:latest",
      messages: [{ role: 'user', content: "Prompt Here" }]
    });

    console.log("Chatbot Response:", response.message.content);
  } catch (error) {
    console.error("Error occurred:", error.message);
  }
}

runChat();

```
3. ADD prompt in content 
4. Run the application using Node.js:
```bash
node script.js
```
5. Observe the output in your terminal. If everything is set up correctly, you should see the chatbot's response or other outputs as defined in your code. 

## Test Results:
|Sr.no|Category|Prompt|Model Resposnse|
|:-----:|:--------:|:------:|:---------------:|
|1|Greeting|"Hello, how are you?"|"I'm doing well, thank you for asking!" |   
|2|Capital City|"What is the capital of India?"	|	"The capital of India is New Delhi."|
|3|Math|"What is 25 + 30?"|"25 + 30 equals 55."|
|4|Famous Person|"Who is Albert Einstein?"|"Albert Einstein was a renowned theoretical physicist."|
|5|Joke|"Tell me a joke."|"Why don’t skeletons fight each other? They don’t have the guts!"|



