import { ref, computed, watch } from 'vue';
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

    if ((!value || value === 'basic') && document.body.classList.contains(theme.value)) {
      document.body.classList.remove(theme.value);
    }
    document.body.classList.add(value);
  };

  watch(theme, (newTheme) => {
    console.log('Theme changed to:', newTheme);
  });

  return {
    indicator,
    // localTimeOfDay,
    // theme,
    setTheme,
  };
});

// Form
export const useFormStore = defineStore('form', () => {
  // State
  const isFormStarted = ref(false);
  const questions = ref([]);
  const currentLength = ref(1);
  const activeIndex = ref(0);

  // Computed
  const displayQuestions = computed(() => {
    if (questions.value.length) {
      return questions.value.slice(0, currentLength.value);
    }
    return null;
  });
  // const projectTitle = computed(() => {
  //   const foundObject = questions.value.find((obj) => obj.name === 'title');
  //   return foundObject ? foundObject.value : 'Title';
  // });
  const isFormReady = computed(() => {
    if (
      questions.value?.length &&
      activeIndex.value === currentLength.value - 1
    ) {
      const lastQuestion = questions.value[questions.value.length - 1];
      return lastQuestion.hasOwnProperty('value');
    }
    return false;
  });
  const templates = computed(() => {
    if (isFormReady.value) {
      return questions.value.map((item) => {
        if (typeof item.template === 'function') {
          return item.template(item.value);
        }
      });
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
    if (questions.value?.length === activeIndex.value - 1) {
      handleSubmit();
    } else {
      currentLength.value++;
      activeIndex.value++;
    }
  };
  const generateMarkdown = () => {
    let mdContent = ``;

    if (templates.value) {
      templates.value.forEach((template) => {
        mdContent += `${template}\n\n`;
      });
    }

    return mdContent.trim();
  };
  const handleSubmit = () => {
    const downloadLink = document.getElementById('downloadLink');
    const mdContent = generateMarkdown();
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
    isFormReady,
    questions,
    templates,
    handleSubmit,
    handleNextQuestion,
    isIndexActive,
    setIsFormStarted,
    setIsIndexActive,
    setQuestions,
    setCurrentLength,
  };
});
