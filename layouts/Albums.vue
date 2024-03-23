<script lang="ts" setup>
import { useHead } from '@unhead/vue'
import albums from 'valaxy-theme-yun/layouts/gallery.vue'
useHead({meta: [{name: 'referrer', content: 'no-referrer'}]})
</script>

<template>
  <albums></albums>
</template>
