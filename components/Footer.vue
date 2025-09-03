<template>
    <footer class="fixed bottom-0 w-full">
        <div class="container flex justify-center items-center py-[0.85rem] ">
            <p class="text-[1rem] font-light">&copy; {{ year }} <a href="https://www.rayluna.dev" target="_blank"
                    rel="noopener noreferrer" class="underline text-[1rem] font-light">rayluna.dev</a>
            </p>
        </div>
    </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>
