<script setup lang="ts">
import { useRouter } from 'vue-router'

import { useUtils } from '@/composables/useUtils'

import type { AppLink } from '@/assets/types/applink'

const { icon, name } = defineProps<AppLink>()

if (!icon && !name) {
  throw 'Icon or Name must be provided.'
}

const router = useRouter()
const { openLink } = useUtils()
</script>

<template>
  <button
    class="mr-6 text-center transition duration-200 ease-in-out hover:text-emerald-500"
    @click="icon ? openLink(href) : router.push(href)"
  >
    <template v-if="icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1"
        stroke="currentColor"
        class="size-6"
      >
        <path stroke-linecap="round" stroke-linejoin="round" :d="icon" />
      </svg>
    </template>
    <template v-else>
      {{ name }}
    </template>
  </button>
</template>
