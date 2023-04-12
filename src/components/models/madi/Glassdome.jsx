import React, { useMemo, useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Glassdome(props) {
  const { nodes, materials } = useGLTF('models/madi/glassdome.gltf')
  useMemo(()=>{
    materials.glassdome.metalness = 1;
    materials.glassdome.roughness = 0.5;
    materials.glassdome.transparent = true;
    materials.glassdome.opacity = 0.2;
  },[materials])
  console.log(materials.glassdome)
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.cap.geometry} material={materials.cap} position={[-0.99, 33.64, -0.99]} />
      <mesh geometry={nodes.glassdome.geometry} material={materials.glassdome}/> 
    </group>
  )
}

useGLTF.preload('/glassdome.gltf')
