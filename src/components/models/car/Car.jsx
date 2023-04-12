import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Car = () => {
  const car = useLoader(GLTFLoader, "models/flying-car/scene.gltf");

  useEffect(() => {
    car.scene.scale.set(0.1, 0.1, 0.1);
    car.scene.position.set(0, 0.1, 0);
    
  }, [car]);

  
  return <primitive  object={car.scene}/>;
};
export default Car;
