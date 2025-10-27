<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { RouterView } from 'vue-router'

import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

import { useAPI } from './composables/useAPI'

import type { Config } from './assets/types/config'

const api = useAPI()

const config = ref<Config>()

const loading = ref(true)

onBeforeMount(async () => {
  const response = await api.getConfig()

  if (response) {
    config.value = response
  }

  loading.value = false
})
</script>

<template>
  <div v-if="config" class="flex flex-col mr-2 ml-4 h-screen">
    <AppHeader v-bind="config" />
    <div class="grow fancy-text">
      <div class="flex flex-col justify-center h-full transition duration-200 ease-in-out">
        <RouterView v-bind="config" v-slot="{ Component }">
          <Transition name="fade" mode="out-in">
            <component :is="Component" />
          </Transition>
        </RouterView>
      </div>
    </div>
    <AppFooter v-bind="config" />
  </div>
  <div
    v-else-if="!loading"
    class="mr-6 text-center transition duration-200 ease-in-out hover:text-emerald-500"
  >
    <p>Error: Please setup the config file first.</p>
  </div>
</template>

<style lang="css" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.35s ease;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(40px);
  opacity: 0;
}
</style>
