export const content = {
  title: 'README Generator',
  intro:
    'This application will automatically generate a ReadMe.md file for use in your development projects. Simply answer a few questions about your project and Readme Generator will create your .md file for you!',
  ready_text: 'Are you ready to start?',
  download_text: 'Are you ready to download your readme?',
  questions: [
    {
      type: 'text',
      name: 'title',
      prompt: 'What is the project title?',
      template: (value) => {
return `# ${value}`;
      },
    },
    {
      type: 'text',
      name: 'description',
      prompt: 'A short description of the project',
      template: (value) => {
        return `
## Description
${value}
        `;
      },
    },
    // {
    //   type: 'multi',
    //   name: 'technologies',
    //   prompt: 'Which technologies were used?',
    //   choices: [
    //     'HTML',
    //     'CSS',
    //     'Javascript',
    //     'Bootstrap',
    //     'Font Awesome',
    //     'Node',
    //     'Jquery',
    //   ],
    // },
    {
      type: 'text',
      name: 'appUrl',
      prompt: 'What is the project URL?',
      template: (value) => {
        return `
## Link
${value}
            `;
      },
    },
    // Todo need to move to store to create template
    // {
    //   type: 'text',
    //   name: 'repoUrl',
    //   prompt: 'What is the project repo URL?',
    //   template: (value) => {
    //     return `# ${value}`;
    //   },
    // },
    {
      type: 'text',
      name: 'imageUrl',
      prompt: 'What is the project image URL or file path?',
      template: (value) => {
        return `
# Image
![Screenshot](${value})
        `;
      },
    },
    // {
    //   type: 'text',
    //   name: 'bugs',
    //   prompt: 'A despription of any known bugs',
    //   template: (value) => {
    //     return `# ${value}`;
    //   },
    // },
    // {
    //   type: 'text',
    //   name: 'nextSteps',
    //   prompt: 'Next steps for the project',
    //   template: (value) => {
    //     return `# ${value}`;
    //   },
    // },
    // {
    //   type: 'list',
    //   name: 'license',
    //   prompt: 'What kind of license should your project have?',
    //   choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    // },
  ],
};
