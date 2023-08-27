<template>
    <div class="text-input flex-col-1">
        <label for="title">What is the project title?</label>
        <input type="text" for="title" class="outline-none" ref="inputRef">
    </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const emit = defineEmits(['complete']);
const porps = defineProps({
    data: {
        type: Object,
        required: true,
    }
})

// State
const inputRef = ref(null);

// Methods
const preventClick = (event) => {
    if (inputRef.value && !inputRef.value.contains(event.target)) {
        event.stopPropagation();
        inputRef.value.focus();
    }
};

// Lifecycle
onMounted(() => {
    document.addEventListener('click', preventClick);

    if (inputRef.value) {
        inputRef.value.focus();
    }
});
onBeforeUnmount(() => {
    document.removeEventListener('click', preventClick);
});
</script>