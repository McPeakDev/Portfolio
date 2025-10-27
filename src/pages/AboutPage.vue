<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'

import { useAPI } from '@/composables/useAPI'

import type { Config } from '@/assets/types/config'
import type { GithubUser } from '@/assets/types/github'

const { githubUsername, extendedBio } = defineProps<Config>()

const api = useAPI()

const user = ref<GithubUser>()

onBeforeMount(async () => {
  const response = await api.getGitHubUser(githubUsername)

  if (response) {
    user.value = response
  }
})
</script>

<template>
  <div v-if="user" class="flex flex-col px-8 w-full">
    <div class="flex flex-row flex-wrap justify-center">
      <div
        class="flex flex-row grow justify-center rounded-lg border-2 shadow-xl transition duration-200 ease-in-out hover:border-emerald-700 basis-1/3 border-zinc-800"
      >
        <img class="rounded-lg grayscale" :src="user.avatar_url" />
      </div>
      <div class="flex flex-col justify-center p-5 basis-full lg:basis-2/3">
        <p class="text-3xl transition duration-200 ease-in-out hover:text-emerald-500 fancy-text">
          {{ user.bio + ' ' + extendedBio }}
        </p>
      </div>
    </div>
  </div>
</template>
