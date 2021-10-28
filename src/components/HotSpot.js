import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

export default function Model(props) {
  const group = useRef()
  const { size } = props
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh visible>
        <boxBufferGeometry attach="geometry" args={size} />
        <meshBasicMaterial attach="material" transparent={true} opacity={0} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/diamond_0.gltf')
