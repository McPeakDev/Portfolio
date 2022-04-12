<template>
  <LiveBackground />
  <div class="grow">
    <LandingPage />
  </div>
  <p class="center">© Matthew McPeak</p>
</template>

<script lang="ts">
import LiveBackground from "@/components/LiveBackground.vue";
import LandingPage from "@/views/LandingPage.vue";

export default {
  components: { LiveBackground, LandingPage },
  data() {
    return {};
  },
};
</script>

<style>

body{
  margin: 0;
}

.background {
  position: absolute;
  z-index: -1;
}

.center {
  text-align: center;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  font-family: "Permanent Marker", cursive;
  color: transparent;
  animation: 5s ease-out 0s 1 fade-in;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
}

.grow {
  animation: 5s grow;
}

@keyframes grow {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
