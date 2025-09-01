<template>
  <div id="vue-app" :class="['py-[1rem]', ui.theme]">
    <div class="container">
      <main class="main flex-col-2">
        <div class="intro flex-col-2">
          <TerminalText :string="content.intro" :speed="500" />
          <div v-if="isReady" class="flex gap-x-[1rem]">
            <p><span v-if="!formStore.isFormStarted" class="animate-pulse">{{ ui.indicator }}</span> {{
              content.ready_text }}</p>
            <BooleanSelector @true="formStore.setIsFormStarted" @false="reloadPage" />
          </div>
        </div>
        <Form v-if="formStore.isFormStarted" :questions="content.questions" />

        <div v-if="formStore.isFormReady" class="flex gap-x-[1rem]" ref="downloadRef">
          <p><span class="animate-pulse">{{ ui.indicator }}</span> {{ content.download_text }}</p>
          <BooleanSelector @true="formStore.handleSubmit" @false="reloadPage" />
        </div>
      </main>
    </div>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUiStore } from '~/stores/ui'
import { useFormStore } from '~/stores/form'

import { content } from '~/lib/content'

import BooleanSelector from '~/components/BooleanSelector.vue'
import Form from '~/components/Form.vue'
import ThemeControls from '~/components/ThemeControls.vue'
import TerminalText from '~/components/TerminalText.vue'

// Store
const ui = useUiStore();
const formStore = useFormStore();

// State
const { isFormReady } = storeToRefs(formStore);
const isReady = ref(false);
const downloadRef = ref<HTMLElement | null>(null);

// Methods
const reloadPage = () => {
  location.reload()
}
const scrollToBottom = async () => {
  if (!downloadRef.value) return;
  await new Promise(resolve => setTimeout(resolve, 100));
  downloadRef.value.scrollIntoView({ behavior: 'smooth' });
};
const setisReady = async (value: boolean) => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  isReady.value = value;
}

// Watchers
watch(isFormReady, () => {
  console.log('form is ready')
  scrollToBottom();
})

// Lifecycle
onMounted(() => {
  formStore.setQuestions(content.questions);
  setisReady(true);
})
</script>
