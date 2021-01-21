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
  
  [Deployed Project](${response.appUrl}) \n
  [Project Repository](${response.repoUrl})

  ### Project Description
  ${response.description}

  ### Project Image
  ![Screenshot](${response.imagePath})

  ### Technologies
  ${response.technologies}

  ### Known Bugs
  ${response.bugs}

  ### Next Steps
  ${response.nextSteps}

  ### Author
  #### ${response.author}
  GitHub: [${response.authorGithub}](${response.authorGithubUrl})
  E-Mail: ${response.authorEmail}


  ### License
  ${response.license}
  ` // generateMarkdown
  writeFile(generateMarkdown);
});

//
function writeFile(markdown) {
  fs.writeFileSync('readme.md', markdown)
};











