<script setup lang="ts">
import { ref } from 'vue'

import AppLinkComponent from './AppLink.vue'

import type { AppLink } from '@/assets/types/applink'
import type { Config } from '@/assets/types/config'
import icons from '@/assets/icons'

const { linkedInURL, githubUsername } = defineProps<Config>()

const routeLinks = ref<AppLink[]>([
  { name: 'About', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
])

const socialMediaLinks = ref<AppLink[]>([
  { icon: icons.linkedIn, href: linkedInURL },
  { icon: icons.github, href: `https://www.github.com/${githubUsername}` },
])
</script>

<template>
  <div class="flex flex-row justify-between py-4 w-full fancy-text">
    <div class="ml-4 text-3xl basis-2/5">
      <AppLinkComponent href="/" name="Matthew McPeak" />
    </div>

    <div class="grow text-xl mt-1">
      <template v-for="(link, index) in routeLinks" :key="index">
        <AppLinkComponent v-bind="link" />
      </template>
    </div>
    <div class="text-xl">
      <template v-for="(link, index) in socialMediaLinks" :key="index">
        <AppLinkComponent v-bind="link" />
      </template>
    </div>
  </div>
</template>

<style scoped></style>
