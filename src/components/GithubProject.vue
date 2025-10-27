<script setup lang="ts">
import { useUtils } from '@/composables/useUtils'

import type { GithubRepo } from '@/assets/types/github'

const { name, language, created_at, description, html_url } = defineProps<GithubRepo>()

const { openLink } = useUtils()
</script>

<template>
  <div
    @click="openLink(html_url)"
    class="p-2 my-2 mx-4 rounded-lg border shadow-xl transition duration-200 ease-in-out cursor-pointer hover:border-emerald-700 border-zinc-800 bg-zinc-700 basis-1/2"
  >
    <p class="transition duration-200 ease-in-out hover:text-emerald-500">"Name: "{{ name }}</p>
    <p class="transition duration-200 ease-in-out hover:text-emerald-500">
      "Language: " {{ language }}
    </p>

    <p class="transition duration-200 ease-in-out hover:text-emerald-500">
      "Publish Date: " {{ new Date(created_at).toLocaleDateString('en-US') }}
    </p>
    <p
      class="overflow-y-auto wrap-break-word transition duration-200 ease-in-out hover:text-emerald-500 h-fit text-wrap"
    >
      {{ description }}
    </p>
  </div>
</template>
