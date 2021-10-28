import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'
import { useProxy } from 'valtio'
import { three } from '../store'

export default function Model({ position }) {
  const group = useRef()
  const { videoEffect } = useProxy(three)

  const [video] = React.useState(() => {
    const vid = document.createElement('video')
    vid.src = '/images/aeroport.mp4'
    vid.playsInline = true
    vid.crossOrigin = 'Anonymous'
    vid.loop = true
    return vid
  })

  React.useEffect(() => {
    if (video.paused) {
      video.play()
    }
  }, [video, videoEffect])

  return (
    <group ref={group} position={position} dispose={null}>
      <mesh scale={[2, 2]} rotation={[0, Math.PI / 2, 0]} visible>
        <planeBufferGeometry attach="geometry" args={[7.3, 1]} />
        <meshBasicMaterial>
          <videoTexture attach="map" args={[video]} />
        </meshBasicMaterial>
      </mesh>
    </group>
  )
}

useGLTF.preload('/diamond_0.gltf')
