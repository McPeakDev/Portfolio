<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'

import { useAPI } from '@/composables/useAPI'

import type { Config } from '@/assets/types/config'
import type { GithubUser } from '@/assets/types/github'

const { email, phoneNumber, githubUsername } = defineProps<Config>()

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
  <div
    v-if="user"
    class="p-2 my-2 mx-4 rounded-lg border shadow-xl transition duration-200 ease-in-out hover:border-emerald-700 border-zinc-800 bg-zinc-700 flex flex-col h-96 justify-center"
  >
    <div class="flex flex-row justify-center">
      <div
        class="shadow-xl rounded-lg border-2 transition duration-200 ease-in-out hover:border-emerald-700 border-zinc-700"
      >
        <img class="rounded-lg grayscale h-48 w-48" :src="user.avatar_url" />
      </div>
    </div>
    <p class="text-3xl text-center transition duration-200 ease-in-out hover:text-emerald-500">
      "Matthew McPeak"
    </p>

    <p class="text-xl text-center transition duration-200 ease-in-out hover:text-emerald-500">
      "Software Engineer"
    </p>

    <p class="text-lg text-center transition duration-200 ease-in-out hover:text-emerald-500">
      {{ email }}
    </p>
    <p class="text-lg text-center transition duration-200 ease-in-out hover:text-emerald-500">
      {{ phoneNumber }}
    </p>
  </div>
</template>

<style scoped></style>
