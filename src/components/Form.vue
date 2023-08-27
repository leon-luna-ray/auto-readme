<template>
    <form @submit.prevent="e => formStore.handleSubmit(e)" class="flex flex-col gapp-y-[1rem]">
        <label for="title">What is the project title?</label>
        <input type="text" for="title" class="outline-none">
    </form>
    <a id="downloadLink" style="display: none">Download</a>
</template>
<script setup>
import { useFormStore } from '../stores/store'

// Store
const formStore = useFormStore();
</script>