<script lang="ts" setup>
const props = defineProps<{
  src: string
  alt: string
}>()
const src = props.src || ""
const alt = props.alt || ""
</script>

<template>
  <figure>
    <img referrerpolicy="no-referrer" :src="src" :alt="alt" loading="lazy" decoding="async" class="medium-zoom-image" />
  </figure>
</template>