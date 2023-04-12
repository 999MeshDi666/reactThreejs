import { useMemo, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useBox } from '@react-three/cannon';
import { useDragConstraint } from '../../../helpers/Drag';
export function Glassdome(props) {

  const [ref] = useBox(()=>({mass: 1, ...props}));
  const bind = useDragConstraint(ref)
  const { nodes, materials } = useGLTF('models/madi/glassdome.gltf');
  useMemo(()=>{
    materials.glassdome.metalness = 1;
    materials.glassdome.roughness = 0.5;
    materials.glassdome.transparent = true;
    materials.glassdome.opacity = 0.2;
  },[materials])

  return (
    <group ref={ref}  dispose={null} scale={[0.1, 0.1, 0.1]}>
      <mesh  {...bind} geometry={nodes.cap.geometry} material={materials.cap} position={[-0.99, 33.64, -0.99]} />
      <mesh geometry={nodes.glassdome.geometry} material={materials.glassdome}/> 
    </group>
  )
}

useGLTF.preload('/glassdome.gltf')
