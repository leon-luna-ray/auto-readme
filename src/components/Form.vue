<template>
    <form @submit.prevent="e => formStore.handleSubmit(e)" class="flex flex-col gapp-y-[1rem]">
        <label for="title">What is the project title?</label>
        <input type="text" for="title" class="outline-none">
    </form>
</template>
<script setup>
import { useGlobalStore, useFormStore } from '../stores/store'

// Store
const formStore = useFormStore();
</script>