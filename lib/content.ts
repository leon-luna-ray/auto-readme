import type { Content } from '@/interfaces/Content';

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
    },
    {
      type: 'text',
      name: 'description',
      prompt: 'A short description of the project',
    },
    {
      type: 'text',
      name: 'technologies',
      prompt: 'What technologies does your project use?',
    },
    {
      type: 'text',
      name: 'appUrl',
      prompt: 'What is the project URL?',
    },
    {
      type: 'text',
      name: 'repoUrl',
      prompt: 'What is the project repository URL?',
    },
    {
      type: 'text',
      name: 'imageUrl',
      prompt: 'What is the project image URL or file path?',
    },
  ],
};
