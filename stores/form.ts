import { ref, computed, watch } from 'vue';
import { defineStore } from 'pinia';

import type { Question } from '~/interfaces/Quteston';

export const useFormStore = defineStore('form', () => {
  // State
  const isFormStarted = ref<boolean>(false);
  const questions = ref<Question[]>([]);
  const currentLength = ref<number>(1);
  const activeIndex = ref<number>(0);
  const responseData = ref<string | null>(null);

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
      return lastQuestion && typeof lastQuestion === 'object' && 'value' in lastQuestion;
    }
    return false;
  });

  const templates = computed<string[]>(() => {
    if (!isFormReady.value) return [];
    return questions.value.map((item) => {
      if (typeof item.template !== 'function') return '';
      return item.template(item.value);
    }).filter(Boolean);
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

    if (templates.value?.length) {
      templates.value.forEach((template) => {
        mdContent += `${template}\n\n`;
      });
    }

    return mdContent.trim();
  };

  const handleSubmit = async () => {
    try {
      console.log('try form submit')
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(questions.value.reduce((acc, question) => {
          acc[question.name] = question.value;
          return acc;
        }, {} as Record<string, string>)),
      });

      const data = await response.json();

      if (data.success) {
        console.log('Form submitted successfully:', data.response);
        // Auto-download the markdown file
        const blob = new Blob([data.response], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'README.md';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      } else {
        console.error('Form submission failed:', data.error);
      }
    } catch (error) {
      console.error('Error occurred while submitting form:', error);
    }
  };

  // watch(isFormStarted, (newValue) => {
  //   if (!newValue) return;
  //   handleSubmit();
  // });

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