<template>
    <div>
        <span>[</span>
        <span class="boolean-btn true" @click="$emit('true')">Y</span>
        <span> / </span>
        <span class="boolean-btn false" @click="$emit('false')">N</span>
        <span>]</span>
    </div>
</template>
<script setup>
import { defineEmits } from 'vue';
defineEmits(['true', 'false']);
</script>
