<template>
    <div v-if="lines?.length">
        <div class="terminal-text text-[1.25rem]">
            <div v-for="(line, index) in lines" :key="index" :class="{ 'opacity-0': !lineVisible[index] }">
                {{ line }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const props = defineProps({
    string: {
        type: String,
        required: true,
    },
    speed: {
        type: Number,
        required: false,
        default: 100,
    },
    delay: {
        type: Number,
        required: false,
        default: 0,
    },
})

// State
import type { Ref } from 'vue';
const lines: Ref<string[]> = ref([]);
const lineVisible = ref(Array(lines.value?.length).fill(false));

// Methods
const breakIntroIntoLines = (intro: string) => {
    const words = intro.split(' ');
    const lines = [];
    let currentLine = '';

    for (const word of words) {
        if ((currentLine + word).split(' ').length <= 10) {
            currentLine += (currentLine ? ' ' : '') + word;
        } else {
            lines.push(currentLine);
            currentLine = word;
        }
    }

    if (currentLine) {
        lines.push(currentLine);
    }

    return lines;
};
const setLines = () => {
    lines.value = breakIntroIntoLines(props.string);
}
const revealLines = () => {
    lines.value?.forEach((_line, index) => {
        setTimeout(() => {
            lineVisible.value[index] = true;
        }, props.delay + index * props.speed);
    });
}


// Lifecycle
onMounted(() => {
    setLines();
    revealLines();
});
</script>
