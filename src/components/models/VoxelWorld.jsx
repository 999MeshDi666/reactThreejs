import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function VoxelWorld(props) {
  const { nodes, materials } = useGLTF('models/voxel_world/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Object_4.geometry} material={materials.Clouds} />
          <mesh geometry={nodes.Object_6.geometry} material={materials.Material} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
