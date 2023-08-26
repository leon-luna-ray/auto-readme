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

  const setIsFormStarted = () => {
    isFormStarted.value = true;
  };

  return {
    isFormStarted,
    setIsFormStarted,
  };
});
