// packages required for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user input to help build proREADME.md
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Please input your project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please input a description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please input installation instructions:',
      default: 'Run `npm install` to download dependencies.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please input usage information:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please input contribution guidelines:',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Please input test instructions:',
      default: 'Navigate to the directory where your code file is located and run `node yourfile.js` in terminal.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please select license for application from the list of options:',
      choices: ['None','MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please input your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please input your email address:',
    },
];

// function to write README
function writeToFile(fileName, data) {
  try {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
//logs message while proREADME.md is loading to tree
    console.log('Creating your proREADME.md...');
  } catch (err) {
    console.error(err);
// throw his message if not able to load to tree
    console.log('Unable to create your README');
  }

// move setTimeout outside of the try-catch block
// a timeout of 3 seconds is initialized
  setTimeout(() => {
    console.log('proREADME.md is ready!');
  }, 3000);
}

// function to initialize app
function init() {
  console.log('Generating your README...');

//log date stamp
  console.log(Date.now());
  inquirer.prompt(questions).then((inquirerResponses) => {

//File name will be proREADME.md
    writeToFile('proREADME.md', generateMarkdown({...inquirerResponses}));
  });
}

// Function call to initialize app
init();
