<template>
  <div class="code-block">
    <button class="code-block__copy" :class="{ 'code-block__copy--copied': copied }" @click="copyCode">
      {{ copied ? 'Copied!' : 'Copy' }}
    </button>
    <code ref="codeRef" class="code-block__code"><slot /></code>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const codeRef = ref(null);
const copied = ref(false);

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
<style lang="scss">
.code-block {
  position: relative;
  background: var(--color-bg-grey);
  border-radius: 6px;
  padding: 1rem;
  margin: 1rem 0;
  font-family: monospace;
  font-size: 0.85rem;
  overflow-x: auto;
}

.code-block__copy {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: #ddd;
  border: none;
  border-radius: 4px;
  padding: 0.25rem 0.6rem;
  font-size: 0.75rem;
  cursor: pointer;
  transition:
    background 0.2s ease,
    color 0.2s ease;
}

.code-block__copy:hover {
  background: #bbb;
}

.code-block__code {
  display: block;
  font-size: inherit;
  white-space: pre-wrap;
  padding-right: 4rem;
  color: var(--color-copy);
}
</style>
