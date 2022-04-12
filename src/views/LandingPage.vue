<template>
  <main>
    <div class="container">
      <div class="flexContainer">
        <p class="option floating" @click="setSelected('about')">Resume</p>
        <p class="option floating" @click="setSelected('github')">GitHub</p>
        <p class="option floating" @click="setSelected('linkedin')">LinkedIn</p>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
export default {
  setup() {
    const setSelected = (name: string) => {
      let url =
        "https://drive.google.com/file/d/1--uL-Sm5TSAMxT1HphVZiWlFf82Nd1cF/view?usp=sharing";

      switch (name) {
        case "github":
          url = "https://github.com/McPeakDev";
          break;
        case "linkedin":
          url = "https://www.linkedin.com/in/matthew-mcpeak-19539b137/";
          break;
      }

      window.open(url, "_blank");
    };

    return { setSelected };
  },
};
</script>

<style scoped>
.flexContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: white;
  font-size: 40px;
  height: 100vh;
  align-items: center;
}

body {
  background: black;
  color: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.option {
  font-family: "Orbitron", sans-serif;
  font-size: 80px;
  color: transparent;
  transition: color 1s ease-in-out;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: white;
}

.floating {
  animation: 3s ease-in-out infinite floating;
}

.floating:hover {
  animation-play-state: paused;
}

.option:hover {
  color: white;
}

@keyframes floating {
  0% {
    transform: translate(0, 0px);
  }
  50% {
    transform: translate(0, 15px);
  }
  100% {
    transform: translate(0, -0px);
  }
}

@keyframes fillColor {
  0% {
    color: transparent;
  }
  100% {
    color: white;
  }
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}
</style>
