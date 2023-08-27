<template>
    <div class="text-input flex-col-1">
        <label for="title">What is the project title?</label>
        <input type="text" for="title" class="outline-none" ref="inputRef" @keyup.prevent="e => handleKeyup(e)">
    </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';

const emit = defineEmits(['complete']);

const porps = defineProps({
    data: {
        type: Object,
        required: true,
    }
})

// State
const inputRef = ref(null);
const isComplete = ref(false);

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
        console.log(event.key)
    }
};

// Watchers
watch(isComplete, () => {
    window.removeEventListener('keyup', handleKeyup);
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
å