<template>
    <div>
        <span>[</span>
        <span :class="[isClickable, hoverStateColors]" @click="handleTrue">Y</span>
        <span> / </span>
        <span :class="[isClickable, hoverStateColors]" @click="handleFalse">N</span>
        <span>]</span>
    </div>
</template>
<script setup>
import { computed, ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { useGlobalStore } from '../stores/store';
import { storeToRefs } from 'pinia';

// Emits
const emit = defineEmits(['true', 'false']);

// Store
const globalStore = useGlobalStore();

// State
const isComplete = ref(false);

// Computed
const isClickable = computed(() => ({
    'hover:cursor-pointer': !isComplete.value,
}))
const hoverStateColors = computed(() => ({
    'hover:bg-hacker-green hover:text-black': !isComplete.value && globalStore.theme === 'hacker',
    'hover:bg-white hover:text-bsod-blue': !isComplete.value && globalStore.theme === 'bsod',
    'hover:bg-black hover:text-white': !isComplete.value && globalStore.theme === '',
}))

// Methods
const handleTrue = () => {
    if (!isComplete.value) {
        isComplete.value = true;
        emit('true')
    }
}
const handleFalse = () => {
    if (!isComplete.value) {
        isComplete.value = true;
        emit('false')
    }
}
const handleKeyup = (event) => {
    if (event.key === 'y') {
        handleTrue();
    } else if (event.key === 'n') {
        handleFalse();
    }
};

// Watchers
watch(isComplete, () => {
    window.removeEventListener('keyup', handleKeyup);
})

// Lifecycle
onMounted(() => {
    window.addEventListener('keyup', handleKeyup);
});
onBeforeUnmount(() => {
    window.removeEventListener('keyup', handleKeyup);
});
</script>
