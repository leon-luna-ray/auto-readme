import { ref, watch } from 'vue';
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

  watch(theme, (newTheme: string) => {
    // Todo theme switch
    console.log('Theme changed to:', newTheme);
  });

  return {
    indicator,
    theme,
    setTheme,
  };
});
