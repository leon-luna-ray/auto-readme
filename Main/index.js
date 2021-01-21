// Imported required packages
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
inquirer.prompt ([
  {
    type: 'input',
    name: 'title',
    message: 'What is the project title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'A short description of the project',
  },
  {
    type: 'input',
    name: 'imagePath',
    message: 'Enter the file path to the project screenshot',
  },
  {
    type: 'input',
    name: 'technologies',
    message: 'Which technologies were used?',
  },
  {
    type: 'input',
    name: 'appUrl',
    message: 'What is the project URL?',
  },
  {
    type: 'input',
    name: 'repoUrl',
    message: 'What is the project repo URL?',
  },
  {
    type: 'input',
    name: 'bugs',
    message: 'A despription of any known bugs',
  },
  {
    type: 'input',
    name: 'nextSteps',
    message: 'Next steps for the project',
  },
  {
    type: 'input',
    name: 'author',
    message: 'Who is the project author?',
  },
  {
    type: 'input',
    name: 'authorGithub',
    message: 'What is the author\'s github user name?',
  },
  {
    type: 'input',
    name: 'authorGithubUrl',
    message: 'What is the author\'s github repo URL?',
  },
  {
    type: 'input',
    name: 'authorEmail',
    message: 'What is the author\'s e-mail address?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
]).then((response) => {
  const generateMarkdown =`

  # ${response.title}

  - [Deployed Project](${response.appUrl}) \n
  - [Project Repository](${response.repoUrl})

  ### Description
  ${response.description}

  ### Image
  ![Screenshot](${response.imagePath})

  ### Technologies
  ${response.technologies}

  ### Known Bugs
  ${response.bugs}

  ### Next Steps
  ${response.nextSteps}

  ### Questions
  Author: ${response.author}
  If you have any questions about the repo, open an issue or contact me directly at:
  - E-Mail: ${response.authorEmail}
  - GitHub: [${response.authorGithub}](${response.authorGithubUrl})

  ### License
  This project is licensed under the (${response.license})[${renderLicenseLink(response.license)}] license.
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](${renderLicenseBadge(response.license)})
  ` // generateMarkdown

  // Invoke the write file function to genereate the new file.
  writeFile(generateMarkdown);
});

// Render markdown to a new file and save.
function writeFile(markdown) {
  fs.writeFileSync('readme.md', markdown)
};











