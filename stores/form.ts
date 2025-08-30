import { ref, computed, watch } from 'vue';
import { defineStore } from 'pinia';

export const useFormStore = defineStore('form', () => {
    const prompt = ref('Hello');
    return {
        prompt
    };
});
