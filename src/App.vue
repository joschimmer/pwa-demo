<script setup lang="ts">
import { ref } from "vue";
import { articleEventBus } from "@/ArticleEventBus";
import FireEventButton from "@/components/FireEventButton.vue";

const eventMessage = ref("waiting for event...");

articleEventBus.on("add", (event: any) => {
  eventMessage.value = event.message;
});
</script>

<template>
  <header>PWA DEMO</header>
  <main>{{ eventMessage }}</main>
  <FireEventButton></FireEventButton>
</template>

<style scoped></style>
