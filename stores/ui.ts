import { ref } from 'vue';
import { useStorage } from '@vueuse/core';

import { defineStore } from 'pinia';

// Global Store
export const useUiStore = defineStore('ui', () => {
  // State
  const indicator = '>>>>>> ';
  const theme = ref<string>('hacker');

  // Methods
  const setTheme = (value: string) => {
    theme.value = value;
  };

  return {
    indicator,
    theme,
    setTheme,
  };
});
