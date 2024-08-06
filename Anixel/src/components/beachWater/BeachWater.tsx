import React, { useRef } from "react";
import CustomShaderMaterial from "three-custom-shader-material";
import CustomShaderMaterialType from "three-custom-shader-material/vanilla";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

import * as beachWater from "../../shaders/beachWater/beachWater";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { patchShaders } from "gl-noise/build/glNoise.m";

import useWaterControls from "./useWaterControls";
import { useControls } from "leva";

export default function BeachWater() {
  const thickness = 0.01;
  const material = useRef<CustomShaderMaterialType | null>(null);

  useFrame((state) => {
    if (material?.current) {
      material.current.uniforms.uTime.value = -state.clock.elapsedTime / 5;
    }
  });

  useWaterControls(material);

  const { Flatshading } = useControls({
    Flatshading: {
      value: false,
    },
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
        {/* <boxGeometry args={[5, 5, thickness, 64, 64, 1]} /> */}
        <boxGeometry args={[40, 20, thickness, 128, 128, 1]} />
        <CustomShaderMaterial
          ref={material}
          baseMaterial={THREE.MeshPhysicalMaterial}
          vertexShader={patchShaders(beachWater.vert)}
          fragmentShader={patchShaders(beachWater.frag)}
          side={THREE.DoubleSide}
          color={0x68c3c0}
          roughness={0.2}
          metalness={0.1}
          flatShading={Flatshading}
          vertexColors
          uniforms={{
            uTime: { value: 0 },
            waterColor: {
              value: new THREE.Color("#52a7f7"),
            },
            waterHighlight: {
              value: new THREE.Color("#b3ffff"),
            },
            offset: {
              value: 0.4,
            },
            contrast: {
              value: 3.1,
            },
            brightness: {
              value: 1,
            },
            uHeight: {
              value: thickness,
            },
          }}
        />
      </mesh>
    </group>
  );
}
