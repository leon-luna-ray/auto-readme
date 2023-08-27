<template>
    <div class="text-input flex-col-1">
        <label for="title">What is the project title?</label>
        <input type="text" for="title" class="outline-none">
    </div>
</template>
<script setup>
import { computed, ref, watch, onMounted, onBeforeUnmount } from 'vue';

const emit = defineEmits(['complete']);
const porps = defineProps({
    data: {
        type: Object,
        required: true,
    }
})
// State
const isComplete = ref(false);

// Methods
const setIsComplete = () => {
    isComplete.value = true;
}
</script>