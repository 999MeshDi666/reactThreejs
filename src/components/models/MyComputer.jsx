

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function MyComputer(props) {
  const { nodes, materials } = useGLTF('/models/my_computer/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.palette} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/scene.gltf')
