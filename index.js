// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [];

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of your project: (required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                }
                else {
                    console.log('Please enter your projects title!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'discription',
            message: 'Enter a description of your project: (required)',
            validate: discriptionInput => {
                if (discriptionInput) {
                    return true;
                }
                else {
                    console.log('Please enter a description of your project!');
                }
            }
        },

        {
            type: 'checkbox',
            name: 'contents',
            message: 'Select the Headers you would like to include: (Check all that apply)',
            choices: ['Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions']
        },

        {
            type: 'input',
            name: 'installation',
            message: 'Please provide detailed installation instructions:'
        },

        {
            type: 'input',
            name: 'usage',
            message: 'Please provide the usage infromation:'
        },

        {
            type: 'input',
            name: 'license',
            message: 'Please provide licensing information: '
        },

        {
            type: 'input',
            name: 'contributers',
            message: 'Please provide the contribution guidelines:'
        },

        {
            type: 'input',
            name: 'test',
            message: 'Please provide the test instructions:'
        },

        {
            type: 'input',
            name: 'questions',
            message: 'Enter your GitHub username for people with questions:'
        }




    ]);

};

promptUser()
    .then(answers => console.log(answers));



// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
