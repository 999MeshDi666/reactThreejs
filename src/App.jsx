import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import { PerspectiveCamera, OrbitControls, 
        MeshReflectorMaterial } from "@react-three/drei";
import { Stand } from "./components/models/madi/Stand";
import { Glassdome } from "./components/models/madi/Glassdome";

function App() {
  const standControl = {
    rotationX: {
      value: 0,
      min: 0,
      max: Math.PI * 2,
      step: 0.01,
    },
    rotationY: {
      value: 0,
      min: 0,
      max: Math.PI * 2,
      step: 0.01,
    },
    rotationZ: {
      value: 0,
      min: 0,
      max: Math.PI * 2,
      step: 0.01,
    },
    positionX: {
      value: -3.89,
      min: -10,
      max: 10,
      step: 0.01,
    },
    positionY: {
      value: -4,
      min: -10,
      max: 10,
      step: 0.01,
    },
    positionZ: {
      value: -10,
      min: -10,
      max: 10,
      step: 0.01,
    },
  };
  const glassdomeControl = {
    rotationX: {
      value: 0,
      min: 0,
      max: Math.PI * 2,
      step: 0.01,
    },
    rotationY: {
      value: 0,
      min: 0,
      max: Math.PI * 2,
      step: 0.01,
    },
    rotationZ: {
      value: 0,
      min: 0,
      max: Math.PI * 2,
      step: 0.01,
    },
    positionX: {
      value: -3.70,
      min: -10,
      max: 10,
      step: 0.01,
    },
    positionY: {
      value: -3.70,
      min: -10,
      max: 10,
      step: 0.01,
    },
    positionZ: {
      value: -7.50,
      min: -10,
      max: 10,
      step: 0.01,
    },
  };
  const stand= useControls("stand control", standControl);
  const glassdome = useControls("glassdome control", glassdomeControl);
  
  return (
    <div className="app" id="canvas-container">
      <Canvas camera={{ position: [0, 0, 15] }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[10, 10, 10]}
            castShadow
            shadow-mapSize={[2048, 2048]}
          />
          <OrbitControls />
          <PerspectiveCamera />
          <Stand
            position={[stand.positionX, stand.positionY, stand.positionZ]}
            scale={[0.3, 0.3, 0.3]}
            rotation={[stand.rotationX, stand.rotationY, stand.rotationZ]}
          />
          <Glassdome
            position={[glassdome.positionX, glassdome.positionY, glassdome.positionZ]}
            scale={[0.3, 0.3, 0.3]}
            rotation={[glassdome.rotationX, 0, glassdome.rotationZ]}
          />
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, -8]}>
            <planeGeometry args={[100, 100]} />
            <MeshReflectorMaterial
              color="#4d3c12"
              blur={[400, 400]}
              resolution={1024}
              mixBlur={1}
              mixStrength={3}
              depthScale={1}
              minDepthThreshold={0.85}
              metalness={0}
              roughness={1}
            />
          </mesh>
        
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
