<template>
  <img :src="refinedSrc" :alt="alt" :width="width" :height="height" loading="lazy" decoding="async" />
</template>

<script setup>
import { computed, inject } from "vue";
const props = defineProps({
  src: { type: String, default: "" },
  alt: { type: String, default: "" },
  width: { type: [String, Number], default: void 0 },
  height: { type: [String, Number], default: void 0 }
});
const maxWidth = inject("proseImgMaxWidth", 2e3);
const CLOUDINARY = /^(https:\/\/res\.cloudinary\.com\/c4a8\/image\/upload\/)(.*)$/;
const TRANSFORMED = /^(?:[a-z]{1,3}_[^,/]+)(?:,[a-z]{1,3}_[^,/]+)*\//;
const refinedSrc = computed(() => {
  const match = props.src.match(CLOUDINARY);
  if (!match) return props.src;
  const rest = match[2].replace(/^\/+/, "");
  if (TRANSFORMED.test(rest) || /\.svg([?#]|$)/i.test(rest)) return match[1] + rest;
  return match[1] + `c_limit,f_auto,q_auto,w_${maxWidth}/` + rest;
});
</script>
