<template>
    <div>
        <span>[</span>
        <span class="boolean-btn true" @click="handleTrue">Y</span>
        <span> / </span>
        <span class="boolean-btn false" @click="handleFalse">N</span>
        <span>]</span>
    </div>
</template>
<script setup>
import { defineEmits, ref, watch, onMounted, onBeforeUnmount } from 'vue';

const emit = defineEmits(['true', 'false']);

// State
const isSelectionMade = ref(false);

// Methods
const handleTrue = () => {
    if (!isSelectionMade.value) {
        isSelectionMade.value = true;
        emit('true')
    }
}
const handleFalse = () => {
    isSelectionMade.value = true;
    emit('false')
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