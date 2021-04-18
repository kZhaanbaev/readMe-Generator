const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = [
    'What is the project title?',
    'Add a main screenshot of the project? (Screenshot is located in /utils/images/screenshot.png, save your image with same name in the same location)',
    'What will be the description?',
    'Installation instructions?',
    'How to use the application?',
    'Information about contributors?',
    'Any Tests included and how to run them?',
    'Add test screenshot?',
    'Choose one of the following licenses:',
    'Github username?',
    "email address?"
];

// Function writes to a file
function writeToFile(fileName, answers) {
    const fileContent = generateMarkdown(answers);
    fs.writeFile(fileName, fileContent, (err) =>
    err ? console.error(err) : console.log('Successfully added to File'));
}

//Function promts all questions to user from questions array
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
                name: 'addMainScreenshot',
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
                type: 'confirm',
                name: 'addTestScreenshot',
                message: questions[7]
            },
            {
                type: 'list',
                name: 'license',
                message: questions[8],
                choices: ['Apache 2.0 License', 'The MIT License', 'Open Database License (ODbL)', 'WTFPL']
            },
            {
                type: 'input',
                name: 'gitHubUsername',
                message: questions[9]
            },
            {
                type: 'input',
                name: 'email',
                message: questions[10]
            },
        ])
        .then(answers => {
            writeToFile('README.md', answers);
        })
}

// Function initializes app
function init() {
    promptQuestions();
}

init();
