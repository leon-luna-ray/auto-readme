<template>
    <div>
        <span>[</span>
        <span :class="isClickable" @click="handleTrue">Y</span>
        <span> / </span>
        <span :class="isClickable" @click="handleFalse">N</span>
        <span>]</span>
    </div>
</template>
<script setup>
import { computed, ref, watch, onMounted, onBeforeUnmount } from 'vue';

// State
const emit = defineEmits(['true', 'false']);
const isSelectionMade = ref(false);

// Computed
const isClickable = computed(() => ({
    'hover:cursor-pointer': !isSelectionMade.value,
}))

// Methods
const handleTrue = () => {
    if (!isSelectionMade.value) {
        isSelectionMade.value = true;
        emit('true')
    }
}
const handleFalse = () => {
    if (!isSelectionMade.value) {
        isSelectionMade.value = true;
        emit('false')
    }
}
const handleKeyup = (event) => {
    if (event.key == 'y') {
        handleTrue();
    } else if (event.key == 'n') {
        handleFalse();
    }
};

// Watchers
watch(isSelectionMade, () => {
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