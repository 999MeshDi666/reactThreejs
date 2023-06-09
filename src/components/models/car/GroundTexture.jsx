import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Ground from "./Ground";
import Car from "./Car";
const GroundTexture = () => {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={20} position={[-8, 6, -9]} />
      <color args={[0, 0, 0]} attach="background" />
      <Car/>
      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={1.5}
        angle={0.6} 
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <Ground />
    </>
  );
};

export default GroundTexture;