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
  const currentLength = ref(1);

  // const activeIndex = ref(0); use the isActiveIndex method

  // Computed
  const displayQuestions = computed(() => {
    if (questions.value.length) {
      return questions.value.slice(0, currentLength.value);
    }
    return null;
  });

  // Setters
  const setIsFormStarted = () => {
    isFormStarted.value = true;
  };
  const setQuestions = (newQuestions) => {
    questions.value = newQuestions;
  };
  const setIsIndexActive = (index, isActive) => {
    questions.value[index].isActive = isActive;
  };
  const setCurrentLength = (length) => {
    currentLength.value = length;
  };

  // Methods
  const isIndexActive = (index) => {
    return questions.value[index].isActive;
  };
  const handleNextQuestion = () => {
    currentLength.value++;
    activeIndex.value++;
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

    setTimeout(() => {
      downloadLink.click();
      URL.revokeObjectURL(url);
    }, 200);
  };

  return {
    activeIndex,
    currentLength,
    displayQuestions,
    isFormStarted,
    questions,
    handleSubmit,
    handleNextQuestion,
    isIndexActive,
    setIsFormStarted,
    setIsIndexActive,
    setQuestions,
    setCurrentLength,
  };
});
