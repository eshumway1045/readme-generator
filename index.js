// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const writeFile = require('./utils/generatefile.js')
const utils = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [];

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'link',
            message: 'Enter the link for the deployed project. (Required)',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                }

                else {
                    console.log('Please enter the link for the deployed project!');
                    return false;
                }
            }
        },
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
            name: 'description',
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
            name: 'languages',
            message: 'What languages did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', "CSS", 'jQuery', 'Bootstrap', 'Node'],
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
            type: 'list',
            name: 'license',
            message: 'Choose a license for applicaton:',
            choices: [
                'none',
                'AGPL-3.0',
                'GPL-3.0',
                'LGPL-3.0',
                'MPL-2.0',
                'Apache-2.0',
                'MIT',
                'BSL-1.0',
                'Unlicense'
            ],
            default: 'none'
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
            name: 'github',
            message: 'Enter your GitHub username for people with questions: (Required)',
            validate: githuibInput => {
                if (githuibInput) {
                    return true;
                }
                else {
                    console.log('Please enter your GitHub Username!');
                    return false;
                }
            }
        }




    ]);

};

promptUser()
    .then(readmeData => {
        return utils(readmeData);
    })
    .then(pageInfo => {
        return writeFile(pageInfo);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    });



// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
