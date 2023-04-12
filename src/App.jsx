import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { Cursor } from './helpers/Drag'
import { Stand } from "./components/models/madi/Stand";
import { Glassdome } from "./components/models/madi/Glassdome";
import Floor from "./components/models/madi/Floor";
import { Physics } from "@react-three/cannon";

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
      value: -3.7,
      min: -10,
      max: 10,
      step: 0.01,
    },
    positionY: {
      value: 1.0,
      min: -10,
      max: 10,
      step: 0.01,
    },
    positionZ: {
      value: -7.5,
      min: -10,
      max: 10,
      step: 0.01,
    },
  };
  const stand = useControls("stand control", standControl);
  const glassdome = useControls("glassdome control", glassdomeControl);

  return (
    <div className="app" id="canvas-container">
      <Canvas camera={{ position: [0, 30, 30] }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[10, 10, 10]}
            castShadow
            shadow-mapSize={[2048, 2048]}
          />
          {/* <OrbitControls /> */}
          {/* <PerspectiveCamera /> */}
          <Physics allowSleep={false} iterations={15} gravity={[0, -200, 0]}>
            <Cursor/>
            <Glassdome
              position={[-3.70,1.00,-7.50,]}
            />
            <Stand
              position={[stand.positionX, stand.positionY, stand.positionZ]}
              scale={[0.3, 0.3, 0.3]}
              rotation={[stand.rotationX, stand.rotationY, stand.rotationZ]}
            />

            <Floor rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, -8]} />
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
