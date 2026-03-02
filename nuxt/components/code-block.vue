<template>
  <div class="code-block">
    <button class="code-block__copy" :class="{ 'code-block__copy--copied': copied }" @click="copyCode">
      {{ copied ? 'Copied!' : 'Copy' }}
    </button>
    <code ref="codeRef" class="code-block__code">{{ processedCode }}</code>
  </div>
</template>

<script setup>
import { ref, computed, useSlots } from 'vue';

const codeRef = ref(null);
const copied = ref(false);
const slots = useSlots();

const processedCode = computed(() => {
  const content = slots.default?.()[0]?.children;

  return typeof content === 'string' ? content.trim() : content;
});

function copyCode() {
  const text = codeRef.value?.innerText ?? '';

  navigator.clipboard
    .writeText(text)
    .then(() => {
      copied.value = true;
    })
    .catch((error) => {
      console.debug(error);
    });

  setTimeout(() => {
    copied.value = false;
  }, 2000);
}
</script>
