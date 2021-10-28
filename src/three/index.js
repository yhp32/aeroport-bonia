import { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas } from 'react-three-fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { useProxy } from 'valtio'

import { three, settings } from '../store'

import ThreeInfo from './info'
import Scene1 from './scenes/Scene1'

const ThreeScene = () => {
  const { scene, bgIsPlaying } = useProxy(three)
  const { sound } = useProxy(settings)
  const [interacted, setInteracted] = useState(null)
  const camera = useRef()

  useEffect(() => {
    if (interacted != null) {
      three.playBg()
      settings.sound = true
      three.videoEffect = Math.random()
    }
  }, [interacted])

  useEffect(() => {
    settings.sound ? three.resumeBg() : three.pauseBg()
  }, [sound])

  useEffect(() => {
    if (camera.current) {
      camera.current.reset()
    }
  }, [scene])

  return (
    <>
      <Canvas concurrent camera={{ position: [1, 0, 0] }}>
        <Suspense fallback={null}>
          <Environment background={false} preset="sunset" />
        </Suspense>

        <OrbitControls
          ref={camera}
          rotateSpeed={-0.3}
          enableZoom={false}
          enablePan={false}
          rotation={[1, 0, 0]}
        />

        <Scene1 />
      </Canvas>

      <ThreeInfo />

      {interacted === false || bgIsPlaying !== true ? (
        <div
          onPointerDown={() => setInteracted(Math.random())}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
          }}
        />
      ) : (
        <></>
      )}
    </>
  )
}

export default ThreeScene
