import { ref, computed, watch } from 'vue';
import { defineStore } from 'pinia';

// Types
interface Question {
  type: string;
  name: string;
  prompt: string;
  template: string | ((value: any) => string);
  value?: any;
  isActive?: boolean;
}

// Global Store
export const useGlobalStore = defineStore('global', () => {
  // State
  const indicator = '>>>>>> ';
  const theme = ref<string>('hacker');

  // Methods
  const setTheme = (value: string) => {
    theme.value = value;
  };

  watch(theme, (newTheme: string) => {
    console.log('Theme changed to:', newTheme);
  });

  return {
    indicator,
    theme,
    setTheme,
  };
});

// Form Store
export const useFormStore = defineStore('form', () => {
  // State
  const isFormStarted = ref<boolean>(false);
  const questions = ref<Question[]>([]);
  const currentLength = ref<number>(1);
  const activeIndex = ref<number>(0);

  // Computed
  const displayQuestions = computed<Question[] | null>(() => {
    if (questions.value.length) {
      return questions.value.slice(0, currentLength.value);
    }
    return null;
  });

  const isFormReady = computed<boolean>(() => {
    if (
      questions.value?.length &&
      activeIndex.value === currentLength.value - 1
    ) {
      const lastQuestion = questions.value[questions.value.length - 1];
      return lastQuestion.hasOwnProperty('value');
    }
    return false;
  });

  const templates = computed<string[] | null>(() => {
    if (isFormReady.value) {
      return questions.value.map((item) => {
        if (typeof item.template === 'function') {
          return item.template(item.value);
        }
        return '';
      }).filter(Boolean);
    }
    return null;
  });

  // Setters
  const setIsFormStarted = () => {
    isFormStarted.value = true;
  };

  const setQuestions = (newQuestions: Question[]) => {
    questions.value = newQuestions;
  };

  const setIsIndexActive = (index: number, isActive: boolean) => {
    questions.value[index].isActive = isActive;
  };

  const setCurrentLength = (length: number) => {
    currentLength.value = length;
  };

  // Methods
  const isIndexActive = (index: number): boolean => {
    return questions.value[index].isActive || false;
  };

  const handleNextQuestion = () => {
    if (questions.value?.length === activeIndex.value - 1) {
      handleSubmit();
    } else {
      currentLength.value++;
      activeIndex.value++;
    }
  };

  const generateMarkdown = (): string => {
    let mdContent = '';

    if (templates.value) {
      templates.value.forEach((template) => {
        mdContent += `${template}\n\n`;
      });
    }

    return mdContent.trim();
  };

  const handleSubmit = () => {
    const downloadLink = document.getElementById('downloadLink') as HTMLAnchorElement;
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
