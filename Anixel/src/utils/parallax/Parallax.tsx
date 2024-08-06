import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

interface ParallaxProps {
  cameraGroup: React.MutableRefObject<null>;
}

const Parallax: React.FC<ParallaxProps> = ({ cameraGroup }) => {
  const cursor = useRef({ x: 0, y: 0 });

  const mouseMove = (event: MouseEvent) => {
    cursor.current.x = event.clientX / window.innerWidth - 0.5;
    cursor.current.y = event.clientY / window.innerHeight - 0.5;
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  useFrame(() => {
    const parallaxX = -cursor.current.x * 0.5;
    const parallaxY = cursor.current.y * 0.5;

    if (cameraGroup.current) {
      // Parallax Position
      cameraGroup.current.position.x +=
        (parallaxX - cameraGroup.current.position.x) * 0.1;
      cameraGroup.current.position.y +=
        (parallaxY - cameraGroup.current.position.y) * 0.1;

      // // Parallax Horizontal Rotation
      // if (
      //   cameraGroup.current.rotation.y >= -0.25 &&
      //   cameraGroup.current.rotation.y <= 0.5
      // ) {
      //   cameraGroup.current.rotation.y +=
      //     (parallaxX / 50 - cameraGroup.current.rotation.z) * 0.1;
      // }
      // if (
      //   cameraGroup.current.rotation.y <= -0.25 ||
      //   cameraGroup.current.rotation.y >= 0.5
      // ) {
      //   cameraGroup.current.rotation.y -=
      //     (parallaxX / 50 + cameraGroup.current.rotation.z) * 0.1;
      // }
    }
  });

  return null;
};

export default Parallax;
