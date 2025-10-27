<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'

import GithubProject from '@/components/GithubProject.vue'

import { useAPI } from '@/composables/useAPI'

import type { Config } from '@/assets/types/config'
import type { GithubRepo } from '@/assets/types/github'

const { githubUsername } = defineProps<Config>()

const api = useAPI()

const repos = ref<GithubRepo[]>()

onBeforeMount(async () => {
  const response = await api.getGitHubRepos(githubUsername)

  if (response) {
    repos.value = response
      .filter((repo) => repo.fork === false && repo.language)
      .sort((a, b) => a.language.localeCompare(b.language))
  }
})
</script>

<template>
  <div class="flex flex-col" v-if="repos">
    <p class="mx-4 text-center">"Click the project to checkout the github repo!"</p>
    <template v-for="(project, index) in repos" :key="index">
      <GithubProject v-bind="project" />
    </template>
  </div>
</template>

<style scoped></style>
