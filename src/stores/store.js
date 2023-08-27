import { ref } from 'vue';
import { defineStore } from 'pinia';

// Global
export const useGlobalStore = defineStore('global', () => {
  // State
  const indicator = '>>>>>> ';
  const theme = ref('hacker');

  // Methods
  const setTheme = (value) => {
    theme.value = value;
  };

  return {
    indicator,
    theme,
    setTheme,
  };
});

// Form
export const useFormStore = defineStore('form', () => {
  // State
  const isFormStarted = ref(false);
  const questions = ref([]);

  // Methods
  const setIsFormStarted = () => {
    isFormStarted.value = true;
  };
  const setQuestions = (newQuestions) => {
    questions.value = newQuestions;
  };
  const handleSubmit = (event) => {
    const downloadLink = document.getElementById('downloadLink');
    const title = event.target[0].value;
    const mdContent = `# ${title}`;
    const blob = new Blob([mdContent], { type: 'text/markdown' });
    const mdFile = new File([blob], 'README.md');
    const url = URL.createObjectURL(mdFile);

    downloadLink.href = url;
    downloadLink.download = 'README.md';
    downloadLink.click();

    URL.revokeObjectURL(url);
  };

  return {
    isFormStarted,
    questions,
    handleSubmit,
    setIsFormStarted,
    setQuestions,
  };
});
