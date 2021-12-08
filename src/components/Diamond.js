import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'
import { useFrame } from 'react-three-fiber'


export default function Model(props) {
  const group = useRef()
  const { nodes } = useGLTF('/textures/diamond.gltf')
  const { movement } = props

  useFrame(({ clock }) => {
    if (group.current) {
      group.current.position.y += Math.sin(clock.getElapsedTime()) * (movement ?? 0.003)
    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Hedra002.geometry}>
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  )
}

useGLTF.preload('/diamond_0.gltf')
