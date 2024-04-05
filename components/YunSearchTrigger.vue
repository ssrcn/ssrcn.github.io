<script lang="ts" setup>
import { useSiteConfig } from 'valaxy'
import { computed, defineAsyncComponent, ref, watch } from 'vue'
import { useMagicKeys } from '@vueuse/core'

const siteConfig = useSiteConfig()

const isAlgolia = computed(() => siteConfig.value.search.type === 'algolia')
const isFuse = computed(() => siteConfig.value.search.type === 'fuse')

const open = ref(false)

function togglePopup() {
  open.value = !open.value
}

const { ctrl_k } = useMagicKeys({
    passive: false,
    onEventFired(e) {
    if (e.ctrlKey && e.key === 'k' && e.type === 'keydown')
      e.preventDefault()
  },
})

watch( ctrl_k, (val) => {
  if (val)
    togglePopup()
})

function openSearch() {
  open.value = true
}

function closeSearch() {
  open.value = false
}

const YunAlgoliaSearch = isAlgolia.value
  ? defineAsyncComponent(() => import('valaxy-theme-yun/components/third/YunAlgoliaSearch.vue'))
  : () => null
</script>

<template>
  <YunSearchBtn :open="open && !isAlgolia" @open="openSearch" @close="closeSearch" />

  <YunAlgoliaSearch v-if="isAlgolia" :open="open" @close="closeSearch" />
  <YunFuseSearch v-else-if="isFuse" :open="open" @close="closeSearch" />
</template>
