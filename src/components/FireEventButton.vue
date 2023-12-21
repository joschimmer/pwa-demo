<script setup lang="ts">
import { articleEventBus } from "@/ArticleEventBus";

const fireArticleEvent = function () {
  articleEventBus.emit("add", {
    message: "Message from FireEventButton",
  });
};
</script>

<template>
  <button @click.prevent="fireArticleEvent()">FireEventButton</button>
</template>

<style scoped></style>
