import { ref } from 'vue';
import { defineStore } from 'pinia';

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
