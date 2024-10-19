# String Calculator

A simple string calculator that takes a string of numbers separated by delimiters and returns their sum. The application includes a frontend user interface and backend functionality with unit tests.

## Features

1. Accepts a string of comma-separated numbers and returns their sum.
2. Supports any number of inputs.
3. Handles new lines as delimiters.
4. Allows custom delimiters.
5. Throws an exception for negative numbers.
6. Includes a simple frontend interface to input numbers and display the result.

## Folder Structure

StringCalculator/ ├── node_modules/ ├── public/ │ ├── index.html │ ├── style.css │ └── script.js ├── package.json ├── stringCalculator.js └── stringCalculator.test.js

## Prerequisites

- Node.js and npm installed on your system.
- Basic knowledge of JavaScript and HTML.

## Getting Started

### Step 1: Clone the Repository

Clone this repository to your local machine:

```bash
git clone <repository-url>
cd StringCalculator

 Step 2: Install Dependencies
 Run the following command to install the required dependencies:
 npm install
 Step 3: Running the Application
Option 1: Using VS Code Live Server
Open the project folder in Visual Studio Code.
Open the public/index.html file.
Right-click on the index.html file and select Open with Live Server (requires the Live Server extension in VS Code).
Option 2: Using live-server
If you have live-server installed globally, you can run the following command in the public folder:

bash
Copy code
npx live-server public
This will start the application, and you can access it in your browser at http://localhost:8080 (or another port).

Step 4: Testing the Application
Running the Backend Tests
To run the Jest unit tests, use the following command:

bash
Copy code
npm test

It will automatically find the test file (stringCalculator.test.js) and run the test cases. The output will show the test results, indicating which test cases passed or failed.

Test Cases
Here are the test cases included in the stringCalculator.test.js file:

Empty Input

Input: ""
Expected Output: 0
Single Number

Input: "1"
Expected Output: 1
Two Numbers

Input: "1,5"
Expected Output: 6
Multiple Numbers

Input: "1,2,3,4,5"
Expected Output: 15
New Line as Delimiter

Input: "1\n2,3"
Expected Output: 6
Custom Delimiter

Input: "//;\n1;2;3"
Expected Output: 6
Negative Numbers

Input: "1,-2,3,-4"
Expected Output: Exception - "Negative numbers not allowed: -2, -4"
Large Numbers

Input: "1000,2000,3000"
Expected Output: 6000
Mixed Delimiters

Input: "1,2\n3"
Expected Output: 6
Custom Delimiter with Special Characters

Input: "//[*]\n1**2**3"
Expected Output: 6
Frontend Usage
Open the Application: Visit the URL where the local server is running (http://localhost:8080).
Enter Numbers: Input the numbers in the text area using commas, new lines, or custom delimiters.
Calculate: Click the "Calculate" button to see the sum.
Error Handling: If you enter any negative numbers, the application will display an error message.
Development
To modify the code, edit the respective files:

Backend Logic: stringCalculator.js
Frontend Interface: public/index.html, public/style.css, public/script.js
Tests: stringCalculator.test.js
Contributing
Fork the repository.
Create a new branch.
Make your changes.
Submit a pull request.


### How to Use This README.md File
1. Place the README.md file in the root directory of your project (StringCalculator/).
2. Make sure to replace <repository-url> with the actual URL of your repository if you plan to host it on GitHub or another platform.
3. Follow the instructions provided in the README.md file to run the project locally and test the application.
 