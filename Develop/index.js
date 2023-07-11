const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
// function writeToFile(README.md, data) {}

const generateREADME = ({ title, description, installation, usage, contributing, test, license, github, email }) =>
`# <${title}>

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${installation}

## Usage

${usage}

## Contributors

${contributing}

## License

${license}

## Tests

${test}

## Questions

Checkout the github repository at github.com/${github} or contact me at ${email} if you have any questions.`;


function init() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter the description of your project.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Describe how to use your application',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Explain who contributed to the project',
      },
       {
        type: 'input',
        name: 'tests',
        message: 'Write tests for your application. Then provide examples on how to run them here.',
      },
      {
        type: 'list',
        message: 'Choose a License',
        name: 'license',
        choices: ['Apache License 2.0', 'MIT License', 'Boost Software License 1.0'],
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
      },
    ])
    .then((answers) => {
      const readmeContent = generateREADME(answers);
  
      fs.writeFile('README.md', readmeContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
      );
    });}

// Function call to initialize app
init();



