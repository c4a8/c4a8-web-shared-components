<template>
  <NuxtLayout name="error"><NuxtPage /></NuxtLayout>
</template>

<script setup>
import { useRoute, createError, definePageMeta } from "#imports";
definePageMeta({
  layout: "error"
});
const route = useRoute();
const cleanPath = route.path;
</script>
