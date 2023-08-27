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
        emit('true')
        isSelectionMade.value = true;
    }
}
const handleFalse = () => {
    emit('false')
}
</script>