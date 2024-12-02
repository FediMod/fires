<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { inBrowser, useData, useRouter } from 'vitepress'
import { watch } from 'vue'

const { page } = useData()
const { go } = useRouter()

const redirects = Object.entries({
  "/concepts/advisories-and-recommendations": "/concepts/changes.html",
  "/concepts/advisories-and-recommendations.html": "/concepts/changes.html",
  "/concepts/retractions": "/concepts/changes/retractions.html",
  "/concepts/federation-firewalls": "/concepts/federation-management.html"
})

watch(
  () => page.value.isNotFound,
  (isNotFound) => {
    if (!isNotFound || !inBrowser) return
    const redirect = redirects.find(([from]) => window.location.pathname.startsWith(from))
    if (!redirect) return
    go(redirect[1])
  },
  { immediate: true }
)
</script>

<template>
  <DefaultTheme.Layout />
</template>
