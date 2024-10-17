import { useHelper } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const BedroomLights: React.FC = () => {
  const light01 = useRef<THREE.SpotLight | null>(null);
  const light02 = useRef<THREE.SpotLight | null>(null);
  const light03 = useRef<THREE.SpotLight | null>(null);
  const light04 = useRef<THREE.SpotLight | null>(null);
  const light05 = useRef<THREE.SpotLight | null>(null);
  const light06 = useRef<THREE.SpotLight | null>(null);
  const light07 = useRef<THREE.SpotLight | null>(null);
  const light08 = useRef<THREE.SpotLight | null>(null);
  const light09 = useRef<THREE.SpotLight | null>(null);
  const light10 = useRef<THREE.SpotLight | null>(null);
  const light11 = useRef<THREE.SpotLight | null>(null);
  const light12 = useRef<THREE.SpotLight | null>(null);
  const light13 = useRef<THREE.SpotLight | null>(null);
  const light14 = useRef<THREE.SpotLight | null>(null);
  const light15 = useRef<THREE.SpotLight | null>(null);
  const light16 = useRef<THREE.SpotLight | null>(null);
  const light17 = useRef<THREE.SpotLight | null>(null);
  const light18 = useRef<THREE.SpotLight | null>(null);
  const light19 = useRef<THREE.SpotLight | null>(null);
  const light20 = useRef<THREE.SpotLight | null>(null);
  const light21 = useRef<THREE.SpotLight | null>(null);
  const focusLight = useRef<THREE.SpotLight | null>(null);

  // useHelper(light01, THREE.SpotLightHelper, "red");
  // useHelper(light02, THREE.SpotLightHelper, "cyan");
  // useHelper(light03, THREE.SpotLightHelper, "green");
  // useHelper(light04, THREE.SpotLightHelper, "red");
  // useHelper(light05, THREE.SpotLightHelper, "cyan");
  // useHelper(light06, THREE.SpotLightHelper, "green");
  // useHelper(light07, THREE.SpotLightHelper, "red");
  // useHelper(light08, THREE.SpotLightHelper, "cyan");
  // useHelper(light09, THREE.SpotLightHelper, "green");
  // useHelper(light10, THREE.SpotLightHelper, "green");
  // useHelper(light11, THREE.SpotLightHelper, "red");
  // useHelper(light12, THREE.SpotLightHelper, "cyan");
  // useHelper(light13, THREE.SpotLightHelper, "green");
  // useHelper(light14, THREE.SpotLightHelper, "red");
  // useHelper(light15, THREE.SpotLightHelper, "cyan");
  // useHelper(light16, THREE.SpotLightHelper, "green");
  // useHelper(light17, THREE.SpotLightHelper, "red");
  // useHelper(light18, THREE.SpotLightHelper, "cyan");
  // useHelper(light19, THREE.SpotLightHelper, "green");
  // useHelper(light20, THREE.SpotLightHelper, "red");
  // useHelper(light21, THREE.SpotLightHelper, "cyan");
  // useHelper(focusLight, THREE.SpotLightHelper, "red");

  useEffect(() => {
    light01.current?.target.position.set(-2.1, 0.5, -1);
    light02.current?.target.position.set(-1.4, 0.5, -1);
    light03.current?.target.position.set(-0.7, 0.5, -1);
    light04.current?.target.position.set(0, 0.5, -1);
    light05.current?.target.position.set(0.7, 0.5, -1);
    light06.current?.target.position.set(1.4, 0.5, -1);
    light07.current?.target.position.set(2.1, 0.5, -1);

    light08.current?.target.position.set(-2.1, 0, -1);
    light09.current?.target.position.set(-1.4, 0, -1);
    light10.current?.target.position.set(-0.7, 0, -1);
    light11.current?.target.position.set(0, 0, -1);
    light12.current?.target.position.set(0.7, 0, -1);
    light13.current?.target.position.set(1.4, 0, -1);
    light14.current?.target.position.set(2.1, 0, -1);

    light15.current?.target.position.set(-2.1, -0.5, -1);
    light16.current?.target.position.set(-1.4, -0.5, -1);
    light17.current?.target.position.set(-0.7, -0.5, -1);
    light18.current?.target.position.set(0, -0.5, -1);
    light19.current?.target.position.set(0.7, -0.5, -1);
    light20.current?.target.position.set(1.4, -0.5, -1);
    light21.current?.target.position.set(2.1, -0.5, -1);

    focusLight.current?.target.position.set(-1.3, 0, 0);
  }, []);

  return (
    <>
      <spotLight
        ref={focusLight}
        position={[-1.3, 0, 2]}
        color={"white"}
        intensity={3}
        distance={1.7}
        angle={Math.PI + 0.4}
        decay={0.1}
      />
      <spotLight
        ref={light01}
        position={[-2.1, 0.5, 0.7]}
        color={"white"}
        intensity={16}
        distance={0.79}
        angle={Math.PI + 0.1}
        decay={0.6}
      />
      <spotLight
        ref={light02}
        position={[-1.4, 0.5, 0.7]}
        color={"white"}
        intensity={16}
        distance={0.79}
        angle={Math.PI + 0.1}
        decay={0.6}
      />
      <spotLight
        ref={light03}
        position={[-0.7, 0.5, 0.7]}
        color={"white"}
        intensity={16}
        distance={0.79}
        angle={Math.PI + 0.1}
        decay={0.6}
      />
      <spotLight
        ref={light04}
        position={[0, 0.5, 0.7]}
        color={"white"}
        intensity={16}
        distance={0.79}
        angle={Math.PI + 0.1}
        decay={0.6}
      />
      <spotLight
        ref={light05}
        position={[0.7, 0.5, 0.7]}
        color={"white"}
        intensity={16}
        distance={0.79}
        angle={Math.PI + 0.1}
        decay={0.6}
      />
      <spotLight
        ref={light06}
        position={[1.4, 0.5, 0.7]}
        color={"white"}
        intensity={16}
        distance={0.79}
        angle={Math.PI + 0.1}
        decay={0.6}
      />
      <spotLight
        ref={light07}
        position={[2.1, 0.5, 0.7]}
        color={"white"}
        intensity={16}
        distance={0.79}
        angle={Math.PI + 0.1}
        decay={0.6}
      />

      <spotLight
        ref={light08}
        position={[-2.1, 0, 0.7]}
        color={"white"}
        intensity={16}
        distance={0.79}
        angle={Math.PI + 0.1}
        decay={0.6}
      />
      <spotLight
        ref={light09}
        position={[-1.4, 0, 0.7]}
        color={"white"}
        intensity={16}
        distance={0.79}
        angle={Math.PI + 0.1}
        decay={0.6}
      />
      <spotLight
        ref={light10}
        position={[-0.7, 0, 0.7]}
        color={"white"}
        intensity={16}
        distance={0.79}
        angle={Math.PI + 0.1}
        decay={0.6}
      />
      <spotLight
        ref={light11}
        position={[0, 0, 0.7]}
        color={"white"}
        intensity={16}
        distance={0.79}
        angle={Math.PI + 0.1}
        decay={0.6}
      />
      <spotLight
        ref={light12}
        position={[0.7, 0, 0.7]}
        color={"white"}
        intensity={16}
        distance={0.79}
        angle={Math.PI + 0.1}
        decay={0.6}
      />
      <spotLight
        ref={light13}
        position={[1.4, 0, 0.7]}
        color={"white"}
        intensity={16}
        distance={0.79}
        angle={Math.PI + 0.1}
        decay={0.6}
      />
      <spotLight
        ref={light14}
        position={[2.1, 0, 0.7]}
        color={"white"}
        intensity={16}
        distance={0.79}
        angle={Math.PI + 0.1}
        decay={0.6}
      />

      <spotLight
        ref={light15}
        position={[-2.1, -0.5, 0.7]}
        color={"white"}
        intensity={16}
        distance={0.79}
        angle={Math.PI + 0.1}
        decay={0.6}
      />
      <spotLight
        ref={light16}
        position={[-1.4, -0.5, 0.7]}
        color={"white"}
        intensity={16}
        distance={0.79}
        angle={Math.PI + 0.1}
        decay={0.6}
      />
      <spotLight
        ref={light17}
        position={[-0.7, -0.5, 0.7]}
        color={"white"}
        intensity={16}
        distance={0.79}
        angle={Math.PI + 0.1}
        decay={0.6}
      />
      <spotLight
        ref={light18}
        position={[0, -0.5, 0.7]}
        color={"white"}
        intensity={16}
        distance={0.79}
        angle={Math.PI + 0.1}
        decay={0.6}
      />
      <spotLight
        ref={light19}
        position={[0.7, -0.5, 0.7]}
        color={"white"}
        intensity={16}
        distance={0.79}
        angle={Math.PI + 0.1}
        decay={0.6}
      />
      <spotLight
        ref={light20}
        position={[1.4, -0.5, 0.7]}
        color={"white"}
        intensity={16}
        distance={0.79}
        angle={Math.PI + 0.1}
        decay={0.6}
      />
      <spotLight
        ref={light21}
        position={[2.1, -0.5, 0.7]}
        color={"white"}
        intensity={16}
        distance={0.79}
        angle={Math.PI + 0.1}
        decay={0.6}
      />
    </>
  );
};

export default BedroomLights;
