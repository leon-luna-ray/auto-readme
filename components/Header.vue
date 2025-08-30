<template>
    <header>
        <div class="container flex justify-between items-center">
            <h1>{{ content.title }}</h1>
            <ThemeControls />
        </div>
    </header>
</template>

<script setup lang="ts">
import { content } from '~/lib/content'
</script>