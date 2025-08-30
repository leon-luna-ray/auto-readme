// Types
interface Question {
  type: string;
  name: string;
  prompt: string;
  template: string;
}

interface Content {
  title: string;
  intro: string;
  ready_text: string;
  download_text: string;
  questions: Question[];
}

export const content: Content = {
  title: 'Auto-ReadMe',
  intro: 'This application will automatically generate a ReadMe.md file for use in your development projects. Simply answer a few questions about your project and Readme Generator will create your .md file for you!',
  ready_text: 'Are you ready to start?',
  download_text: 'Are you ready to download your readme?',
  questions: [
    {
      type: 'text',
      name: 'title',
      prompt: 'What is the project title?',
      template: '# {{value}}',
    },
    {
      type: 'text',
      name: 'description',
      prompt: 'A short description of the project',
      template: '\n## Description\n{{value}}\n',
    },
    {
      type: 'text',
      name: 'appUrl',
      prompt: 'What is the project URL?',
      template: '\n## Link\n{{value}}\n',
    },
    {
      type: 'text',
      name: 'imageUrl',
      prompt: 'What is the project image URL or file path?',
      template: '\n# Image\n![Screenshot]({{value}})\n',
    },
    // ... other questions
  ],
};
