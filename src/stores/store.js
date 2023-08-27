import { ref } from 'vue';
import { defineStore } from 'pinia';

// Global
export const useGlobalStore = defineStore('global', () => {
  const theme = ref('hacker');

  const setTheme = (value) => {
    theme.value = value;
  };

  return {
    theme,
    setTheme,
  };
});

// Form
export const useFormStore = defineStore('form', () => {
  const isFormStarted = ref(false);
  // Load questions into a reactive?

  const setIsFormStarted = () => {
    isFormStarted.value = true;
  };
  const handleSubmit = (event) => {
    const title = event.target[0].value;
    const mdContent = `# ${title}`;
    const blob = new Blob([mdContent], { type: 'text/markdown' });
    const mdFile = new File([blob], 'README.md');

    const url = URL.createObjectURL(mdFile);

    // Get the download link element
    const downloadLink = document.getElementById('downloadLink');

    // Set the href and download attributes for the link
    downloadLink.href = url;
    downloadLink.download = 'README.md';

    // Simulate a click on the link to trigger the download
    downloadLink.click();

    // Clean up by revoking the Blob URL
    URL.revokeObjectURL(url);
  };

  return {
    isFormStarted,
    handleSubmit,
    setIsFormStarted,
  };
});
