

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Stand(props) {
  const { nodes, materials } = useGLTF('models/madi/stand.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.nametag.geometry} material={materials.nametag} position={[16.68, 1.47, 49.51]} scale={[0.02, 0.03, 1]} />
      <mesh geometry={nodes.stand.geometry} material={materials.stand} position={[-0.3, 0, 7.30]} />
    </group>
  )
}

useGLTF.preload('/stand.gltf')
