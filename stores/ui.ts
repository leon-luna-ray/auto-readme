import { ref, computed } from 'vue';
import { useStorage } from '@vueuse/core';

import { defineStore } from 'pinia';

// Global Store
export const useUiStore = defineStore('ui', () => {

  const userSettings = useStorage('auto-readme-settings', {
    theme: 'hacker',
  });

  // State
  const indicator = '>>>>>> ';
  const theme = computed(() => userSettings.value.theme);

  // Methods
  const setTheme = (value: string) => {
    userSettings.value.theme = value;
  };

  return {
    indicator,
    theme,
    setTheme,
  };
});
