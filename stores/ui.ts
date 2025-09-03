import { defineStore } from 'pinia';

// Global Store
export const useUiStore = defineStore('ui', () => {
  // State
  const indicator = '>>>>>> ';
  const theme = useCookie('auto-readme-theme', {
    default: () => 'hacker'
  });

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
