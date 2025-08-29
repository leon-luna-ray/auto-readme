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
    type: 'checkbox',
    name: 'technologies',
    message: 'Which technologies were used?',
    choices: ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'Font Awesome', 'Node', 'Jquery']
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
    name: 'imageUrl',
    message: 'What is the project image URL or file path?',
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
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
]).then((response) => {

  // Work to create a function in generate markup that will take each technology selected from the checklist and append it here by invoking the function and passing in the array as a parameter. Similar to how the license link was rendered.

  const markdownTemplate =`
# ${response.title}

  ## Description

  ${response.description}

  ## Table of Contents

  * [Image](#image)
  * [Technologies](#technologies)
  * [Known-Bugs](#known-bugs)
  * [Next-Steps](#next-steps)
  * [License](#license)
  * [Contact](#contact)
  * [Links](#links)

  ## Image

  ![Screenshot](${response.imageUrl})

  ## Technologies
  
  ${response.technologies}

  ## Known-Bugs

  ${response.bugs}

  ## Next-Steps

  ${response.nextSteps}

  ## License

  This project is licensed under the [${response.license}](${generateMarkdown.renderLicenseLink(response.license)}) license.
  ${generateMarkdown.renderLicenseBadge(response.license)}

  ## Contact

  Author: Ray Luna \n
  If you have any questions about the repo, open an issue or contact me directly at:
  - E-Mail: leon.luna.ray@gmail.com
  - GitHub: [leon-luna-ray](https://github.com/leon-luna-ray)

  ## Links

  - [Deployed Project](${response.appUrl}) \n
  - [Project Repository](${response.repoUrl})

  ` // generateMarkdown

  // Invoke the write file function to genereate the new file.
  writeFile(markdownTemplate);
});

// Render markdown to a new file and save.
function writeFile(markdown) {
  fs.writeFileSync('README.md', markdown)
};











