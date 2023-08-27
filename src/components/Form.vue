<template>
    <form v-if="formStore.questions?.length" @submit.prevent="e => formStore.handleSubmit(e)" class="flex flex-col gapp-y-[1rem]">
        <component v-for="question in formStore.questions" :is="mapTypeComponents[question.type]" :data="question">
        </component>
    </form>
    <a id="downloadLink" style="display: none">Download</a>
</template>
<script setup>
import { useFormStore } from '../stores/store'

import BooleanSelector from './BooleanSelector.vue';
import TextInput from './TextInput.vue'

const props = defineProps({
    questions: {
        type: Array,
        required: true,
    }
})

const mapTypeComponents = {
    // boolean: BooleanSelector,
    text: TextInput,
};

// Store
const formStore = useFormStore();
</script>