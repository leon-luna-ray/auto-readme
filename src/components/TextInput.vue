<template>
    <div class="text-input flex-col-1">
        <label for="title">{{ data.prompt }}</label>
        <input type="text" for="title" class="outline-none" ref="inputRef" @keyup.prevent="e => handleKeyup(e)">
    </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { useFormStore } from '../stores/store'

const emit = defineEmits(['complete']);

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
    index: {
        type: Number,
        required: true,
    }
})

// Store
const formStore = useFormStore();

// State
const inputRef = ref(null);

// Methods
const preventClick = (event) => {
    if (inputRef.value && !inputRef.value.contains(event.target)) {
        event.stopPropagation();
        inputRef.value.focus();
    }
};
const handleKeyup = (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        formStore.questions[props.index].value = inputRef.value.value;
    }
};
// Watchers
watch(() => formStore.questions[props.index]?.value, (newValue) => {
    if (newValue) {
        document.removeEventListener('keyup', handleKeyup);
    }
})
// Lifecycle
onMounted(() => {
    document.addEventListener('click', preventClick);
    document.addEventListener('keyup', handleKeyup);
    if (inputRef.value) {
        inputRef.value.focus();
    }
});
onBeforeUnmount(() => {
    document.removeEventListener('click', preventClick);
    document.removeEventListener('keyup', handleKeyup);
});
</script>
