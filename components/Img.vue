<script lang="ts" setup>
const props = defineProps<{
  src: string
  alt: string
  caption: string
}>()
const src = props.src || ""
const alt = props.alt || ""
const caption = props.caption || ""
</script>

<template>
  <figure>
    <img referrerpolicy="no-referrer" :src="src" :alt="alt" loading="lazy" decoding="async" class="medium-zoom-image" />
    <figcaption>{{ caption }}</figcaption>
  </figure>
</template>

<style lang="scss">
.markdown-body figure figcaption {
  display: inline;
  font-size: 16px;
  font-style: italic;
  color: rgb(36, 41, 46);
}
</style>