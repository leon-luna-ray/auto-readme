<template>
    <div class="text-input flex-col-1">
        <label for="title">{{ data.prompt }}</label>
        <input type="text" for="title" class="outline-none" ref="inputRef" :disabled="formStore.isFormReady"
            @keyup.prevent="e => handleKeyup(e)">
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useFormStore } from '~/stores/form'

const emit = defineEmits(['complete']);

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
    index: {
        type: Number,
        required: true,
    },
})

// Store
const formStore = useFormStore();

// State
const inputRef = ref < HTMLInputElement | null > (null);

// Methods
const preventClick = (event: MouseEvent) => {
    if (inputRef.value && !inputRef.value.contains(event.target as Node)) {
        event.stopPropagation();
        inputRef.value.focus();
    }
};
const handleKeyup = (event: KeyboardEvent) => {
    if (event.key !== 'Enter') return;

    event.preventDefault();
    if (inputRef.value) {
        formStore.questions[props.index].value = inputRef.value.value;
    }
    formStore.handleNextQuestion();
};
const addEventListeners = () => {
    if (!inputRef.value) return;
    inputRef.value.focus();
}


// Lifecycle
onMounted(() => {
    addEventListeners();
});
</script>
