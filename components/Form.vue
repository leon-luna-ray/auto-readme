<template>
    <form v-if="formStore.displayQuestions?.length" class="flex flex-col gap-y-4" @submit.prevent="console.log('submit')">
        <component v-for="(question, index) in formStore.displayQuestions" :is="mapTypeComponents[question.type]" :data="question"
            :index="index" :is-visible="isVisible(index)">
        </component>
    </form>
    <a id="downloadLink" style="display: none">Download</a>
</template>

<script setup lang="ts">
import { useFormStore } from '~/stores/form'

import TextInput from '~/components/TextInput.vue'

const props = defineProps({
    questions: {
        type: Array,
        required: true,
    }
})

const mapTypeComponents: Record<string, any> = {
    text: TextInput,
};

const isVisible = (index: number) => {
    if (index === 0) return true
    return formStore.questions[index - 1]?.value !== undefined;
}

// Store
const formStore = useFormStore();
</script>
