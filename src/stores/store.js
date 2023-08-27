import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

// Global
export const useGlobalStore = defineStore('global', () => {
  // State
  const indicator = '>>>>>> ';
  const theme = ref('hacker');

  // TODO use this to determine inital theme loaded on mounted
  // const localTimeOfDay = computed(() => {
  //   const now = new Date();
  //   const timeZoneOffset = now.getTimezoneOffset();
  //   const utcHour = now.getUTCHours();
  //   const localHour = (utcHour + timeZoneOffset / 60 + 24) % 24;

  //   if (localHour >= 5 && localHour < 13) {
  //     return "morning";
  //   } else if (localHour >= 13 && localHour < 21) {
  //     return "midday";
  //   } else {
  //     return "night";
  //   }
  // });

  // Methods
  const setTheme = (value) => {
    theme.value = value;
  };

  return {
    indicator,
    // localTimeOfDay,
    theme,
    setTheme,
  };
});

// Form
export const useFormStore = defineStore('form', () => {
  // State
  const isFormStarted = ref(false);
  const questions = ref([]);

  // Setters
  const setIsFormStarted = () => {
    isFormStarted.value = true;
  };
  const setQuestions = (newQuestions) => {
    questions.value = newQuestions;
  };

  // Methods
  const handleSubmit = (event) => {
    const downloadLink = document.getElementById('downloadLink');
    const title = event.target[0].value;
    const mdContent = `# ${title}`;
    const blob = new Blob([mdContent], { type: 'text/markdown' });
    const mdFile = new File([blob], 'README.md');
    const url = URL.createObjectURL(mdFile);

    downloadLink.href = url;
    downloadLink.download = 'README.md';

    setTimeout(() => {
      downloadLink.click();
      URL.revokeObjectURL(url);
    }, 200);
  };

  return {
    isFormStarted,
    questions,
    handleSubmit,
    setIsFormStarted,
    setQuestions,
  };
});
