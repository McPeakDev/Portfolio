<template>
  <div class="background container">
    <Renderer ref="renderer" antialias resize="window">
      <Camera :position="{ z: 40 }"></Camera>
      <Scene background="#000000">
        <AmbientLight color="#000000"></AmbientLight>
        <PointLight color="#ffffff" :position="{ x: 100, y: -50 }"></PointLight>
        <PointLight color="#ffffff" :position="{ x: 100, y: 50 }"></PointLight>
        <PointLight color="#ffffff" :position="{ x: 100, y: 0 }"></PointLight>
        <PointLight color="#ffffff" :position="{ x: -100, y: 0 }"></PointLight>
        <PointLight color="#ffffff" :position="{ x: -100, y: 50 }"></PointLight>
        <PointLight
          color="#ffffff"
          :position="{ x: -100, y: -50 }"
        ></PointLight>
        <PointLight color="#ffffff" :position="{ x: 0, y: 100 }"></PointLight>
        <PointLight color="#ffffff" :position="{ x: 0, y: -100 }"></PointLight>
        <TorusKnot
          :radius="10"
          :tube="1"
          :radialSegments="20"
          :tubularSegments="1000"
          :p="10"
          :q="1"
          :props="{ side: 2 }"
          ref="torus"
        >
          <PhysicalMaterial
            :color="state.color"
            :props="{
              emissive: '#000000',
              specularIntensity: 1,
              roughness: 0.5,
            }"
          />
        </TorusKnot>
      </Scene>
      <EffectComposer>
        <RenderPass />
        <BokehPass :maxblur="0.1" />
      </EffectComposer>
    </Renderer>
  </div>
</template>

<script lang="ts">
import {
  Camera,
  PhysicalMaterial,
  AmbientLight,
  Renderer,
  Scene,
  TorusKnot,
  PointLight,
  EffectComposer,
  RenderPass,
  BokehPass,
} from "troisjs";
import { onMounted, ref, reactive } from "@vue/runtime-core";
import type { Ref } from "vue";

export default {
  components: {
    Camera,
    PhysicalMaterial,
    AmbientLight,
    Renderer,
    Scene,
    TorusKnot,
    PointLight,
    EffectComposer,
    RenderPass,
    BokehPass,
  },
  setup() {
    const renderer: Ref<typeof Renderer | null> = ref(null);
    const torus: Ref<typeof TorusKnot | null> = ref(null);
    const state = reactive({
      color: "#cf1500"
    });

    let timer = 0;
    let code = "";


    onMounted(() => {
      renderer.value?.onBeforeRender(() => {
        if (torus.value !== null) {
          torus.value.mesh.rotation.z += 0.01;
        }
      });

      document.addEventListener('keydown', (event: KeyboardEvent) => {
        clearTimeout(timer);
        
        if(event.shiftKey === false || event.code === "Digit3") {
          code += event.key;
        }

        if(code.length === 7 && code.includes("#")){
          state.color = code;
        }

        timer = setTimeout(() => code = "", 1000);
      });
    });

    return { state, renderer, torus };
  },
};
</script>

<style>
.container {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}

.background {
  position: absolute;
  z-index: -1;
}
</style>
