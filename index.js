const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    'What is the project title?',
    'Add a main screenshot of the project? (Screenshot is located in /utils/images/screenshot.png, save your image with same name in the same location)',
    'What will be the description?',
    'Installation instructions?',
    'How to use the application?',
    'Information about contributors?',
    'Any Tests included and how to run them?',
    'Choose one of the following licenses:',
    'Github username?',
    "email address?"
];

const fileContent = (answers, licenseBadge) =>
`# ${answers.title}
    ${licenseBadge}
    <br /><br />
    ![image of application](./utils/image/screenshot.png)    
`

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.write(fileName, data, (err) =>
    err ? console.error(err) : console.log('Successfully added to File'));
}

function promptQuestions(){
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: questions[0]
            },
            {
                type: 'confirm',
                name: 'addScreenshot',
                message: questions[1]
            },
            {
                type: 'input',
                name: 'description',
                message: questions[2]
            },
            {
                type: 'input',
                name: 'installation',
                message: questions[3]
            },
            {
                type: 'input',
                name: 'usage',
                message: questions[4]
            },
            {
                type: 'input',
                name: 'contributors',
                message: questions[5]
            },
            {
                type: 'input',
                name: 'tests',
                message: questions[6]
            },
            {
                type: 'list',
                name: 'license',
                message: questions[7],
                choices: ['Apache 2.0 License', 'The MIT License', 'Open Database License (ODbL)', 'WTFPL']
            },
            {
                type: 'input',
                name: 'gitHub',
                message: questions[8]
            },
            {
                type: 'input',
                name: 'email',
                message: questions[9]
            },
        ])
        .then(answers => {
            
        })
}

// TODO: Create a function to initialize app
function init() {
    promptQuestions();
}


// Function call to initialize app
init();
