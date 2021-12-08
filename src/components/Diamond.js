import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'
import { useFrame } from 'react-three-fiber'


export default function Model(props) {
  const group = useRef()
  const { nodes } = useGLTF('/textures/diamond.gltf')
  const { movement } = props

  
}

useGLTF.preload('/diamond_0.gltf')
