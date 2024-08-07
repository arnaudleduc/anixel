import React, { useRef } from "react";
import CustomShaderMaterial from "three-custom-shader-material";
import CustomShaderMaterialType from "three-custom-shader-material/vanilla";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

import * as beachWater from "../../shaders/beachWater/beachWater";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { patchShaders } from "gl-noise/build/glNoise.m";

export default function BeachWater() {
  const material = useRef<CustomShaderMaterialType | null>(null);

  useFrame((state) => {
    if (material?.current) {
      material.current.uniforms.uTime.value = -state.clock.elapsedTime / 5;
    }
  });

  return (
    <group>
      <mesh
        castShadow
        receiveShadow
        rotation-x={-Math.PI / 2}
        rotation-z={Math.PI}
        position={[0, -0.98, -4]}
      >
        <boxGeometry args={[52, 20, 0.1, 128, 128, 1]} />
        <CustomShaderMaterial
          ref={material}
          baseMaterial={THREE.MeshPhysicalMaterial}
          vertexShader={patchShaders(beachWater.vert)}
          fragmentShader={patchShaders(beachWater.frag)}
          side={THREE.DoubleSide}
          roughness={0.2}
          metalness={0.1}
          uniforms={{
            uTime: { value: 0 },
            waterColor: {
              value: new THREE.Color("#159e9a"),
            },
            waterHighlight: {
              value: new THREE.Color("#a8f1ff"),
            },
            offset: {
              value: 0.4,
            },
            contrast: {
              value: 1,
            },
            brightness: {
              value: 0.4,
            },
            uHeight: {
              value: 0.01,
            },
          }}
        />
      </mesh>
    </group>
  );
}
