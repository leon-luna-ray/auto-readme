export const content = {
  title: 'README Generator',
  intro:
    'This application will automatically generate a ReadMe.md file for use in your development projects. Simply answer a few questions about your project and Readme Generator will create your .md file for you!',
  ready_text: 'Are you ready to start?',
  questions: [
    {
      type: 'text',
      prompt: 'What is the project title?',
    },
    {
      type: 'boolean',
      prompt: 'Is this an open source project?',
      choices: ['yes', 'no']
    },
    {
      type: 'multi',
      prompt: 'What technologies are used in this project?',
      choices: [
        {
          choice: 'A',
          title: 'Vue.js',
        },
        {
          choice: 'B',
          title: 'React.js',
        },
        {
          choice: 'A',
          title: 'Svelte',
        },
      ]
    },
  ],
};
