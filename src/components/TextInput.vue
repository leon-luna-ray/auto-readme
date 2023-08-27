<template>
    <div class="text-input flex-col-1">
        <label for="title">What is the project title?</label>
        <input type="text" for="title" class="outline-none" ref="inputRef">
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';

const emit = defineEmits(['complete']);
const porps = defineProps({
    data: {
        type: Object,
        required: true,
    }
})
// State
const isComplete = ref(false);
const inputRef = ref(null);
// Methods
const setIsComplete = () => {
    isComplete.value = true;
}

onMounted(() => {
    if (inputRef.value) {
        inputRef.value.focus();
    }
});
</script>