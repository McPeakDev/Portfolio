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
            color="#cf1500"
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
import { onMounted, ref } from "@vue/runtime-core";
import type { Ref } from "vue";

export default {
  components: {
    TorusKnot,
    Camera,
    PhysicalMaterial,
    AmbientLight,
    PointLight,
    Renderer,
    Scene,
    EffectComposer,
    RenderPass,
    BokehPass,
  },
  setup() {
    const n: Ref<number> = ref(45);
    const renderer: Ref<typeof Renderer | null> = ref(null);
    const torus: Ref<typeof TorusKnot | null> = ref(null);

    onMounted(() => {
      renderer.value?.onBeforeRender(() => {
        if (torus.value !== null) {
          torus.value.rotation.z += 0.005;
        }
      });
    });

    return { n, renderer, torus };
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
