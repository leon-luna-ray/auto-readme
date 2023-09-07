import { ref, computed } from "vue";
import { defineStore } from "pinia";

// Global
export const useGlobalStore = defineStore("global", () => {
  // State
  const indicator = ">>>>>> ";
  const theme = ref("hacker");

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
export const useFormStore = defineStore("form", () => {
  // State
  const isFormStarted = ref(false);
  const questions = ref([]);
  const currentLength = ref(1);
  const activeIndex = ref(0);
  // use the isActiveIndex method

  // Computed
  const displayQuestions = computed(() => {
    if (questions.value.length) {
      return questions.value.slice(0, currentLength.value);
    }
    return null;
  });
  const projectTitle = computed(() => {
    const foundObject = questions.value.find((obj) => obj.name === "title");
    return foundObject ? foundObject.value : "Title";
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
  // TODO need to layout the form data as well as add a confirmation boolean once all the questions are answered
  const handleSubmit = () => {
    const downloadLink = document.getElementById("downloadLink");
    // TODO create template
    const mdContent = `# ${projectTitle.value}`;
    const blob = new Blob([mdContent], { type: "text/markdown" });
    const mdFile = new File([blob], "README.md");
    const url = URL.createObjectURL(mdFile);

    downloadLink.href = url;
    downloadLink.download = "README.md";

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
