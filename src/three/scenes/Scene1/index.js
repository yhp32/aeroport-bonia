import * as THREE from 'three'
import React, { Suspense } from 'react'
import { useTexture } from '@react-three/drei'
import { useSpring, animated as a } from 'react-spring/three'

import { three, settings, easter, prism, easterComplete, easterFind } from '../../../store'
import Diamond from '../../../components/Diamond'
import TeleV from '../../../components/TeleV'
import HotSpot from '../../../components/HotSpot'

const Dome = () => {
  const texture = useTexture(`/textures/ori/bonia.jpg`)
  texture.generateMipmaps = false
  texture.minFilter = THREE.LinearFilter

  // runs in sequence due to suspense
  if (settings.tutorial === 0) {
    setTimeout(() => {
      settings.tutorial = 1
    }, 500)
  }

  return (
    <>
      <mesh scale={[-1, 1, 1]}>
        <sphereBufferGeometry args={[32, 100, 100]} />
        <meshBasicMaterial map={texture} side={THREE.BackSide} />
      </mesh>
    </>
  )
}

const Bonia1 = () => {
  const [animate, toggle] = React.useState(false)
  const opacityAnim = useSpring({
    from: { opacity: 1 },
    to: async (next) => {
      if (animate) {
        await next({ opacity: 0 })
        toggle(!animate)
      }
    },
    reset: true,
    config: { duration: 450 }
  })
  const scaleAnim = useSpring({
    from: { scale: [0, 0, 0] },
    to: async (next) => {
      if (animate) {
        await next({ scale: [1, 1, 1] })
      }
    },
    reset: true,
    config: { duration: 450 }
  })

  return (
    <>
      <a.mesh {...scaleAnim} position={[5.3, -3.8, -28.5]} rotation={[0, -20 * (Math.PI / 180), 0]}>
        <circleBufferGeometry attach="geometry" args={[1, 32]} />
        <a.meshBasicMaterial
          attach="material"
          color="white"
          transparent={true}
          side={THREE.DoubleSide}
          {...opacityAnim}
        />
      </a.mesh>
      <mesh
        position={[5.3, -3.8, -28.5]}
        rotation={[0, -20 * (Math.PI / 180), 0]}
        onPointerUp={async () => {
          toggle(!animate)
          easter.state.easter1 = true

          if (easter.total() === 4) {
            await three.playPing(easterComplete)
            three.congratulation = true
          } else {
            await three.playPing(easterFind)
          }

          localStorage.setItem('easter', JSON.stringify({ ...easter.state }))
        }}
      >
        <circleBufferGeometry attach="geometry" args={[1, 32]} />
        <meshBasicMaterial
          attach="material"
          color="white"
          transparent={true}
          opacity={0}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  )
}

const Bonia2 = () => {
  const [animate, toggle] = React.useState(false)
  const opacityAnim = useSpring({
    from: { opacity: 1 },
    to: async (next) => {
      if (animate) {
        await next({ opacity: 0 })
        toggle(!animate)
      }
    },
    reset: true,
    config: { duration: 450 }
  })
  const scaleAnim = useSpring({
    from: { scale: [0, 0, 0] },
    to: async (next) => {
      if (animate) {
        await next({ scale: [1, 1, 1] })
      }
    },
    reset: true,
    config: { duration: 450 }
  })

  return (
    <>
      <a.mesh {...scaleAnim} position={[10.3, -6.3, 24.5]} rotation={[0, 0 * (Math.PI / 180), 0]}>
        <circleBufferGeometry attach="geometry" args={[1, 32]} />
        <a.meshBasicMaterial
          attach="material"
          color="white"
          transparent={true}
          side={THREE.DoubleSide}
          {...opacityAnim}
        />
      </a.mesh>
      <mesh
        position={[10.3, -6.3, 24.5]}
        rotation={[0, 0 * (Math.PI / 180), 0]}
        onPointerUp={async () => {
          toggle(!animate)
          easter.state.easter2 = true

          if (easter.total() === 4) {
            await three.playPing(easterComplete)
            three.congratulation = true
          } else {
            await three.playPing(easterFind)
          }
          localStorage.setItem('easter', JSON.stringify({ ...easter.state }))
        }}
      >
        <circleBufferGeometry attach="geometry" args={[1, 32]} />
        <meshBasicMaterial
          attach="material"
          color="white"
          transparent={true}
          opacity={0}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  )
}

const Bonia3 = () => {
  const [animate, toggle] = React.useState(false)
  const opacityAnim = useSpring({
    from: { opacity: 1 },
    to: async (next) => {
      if (animate) {
        await next({ opacity: 0 })
        toggle(!animate)
      }
    },
    reset: true,
    config: { duration: 450 }
  })
  const scaleAnim = useSpring({
    from: { scale: [0, 0, 0] },
    to: async (next) => {
      if (animate) {
        await next({ scale: [1, 1, 1] })
      }
    },
    reset: true,
    config: { duration: 450 }
  })

  return (
    <>
      <a.mesh
        {...scaleAnim}
        position={[-14.1, 14.2, 22.5]}
        rotation={[0, -20 * (Math.PI / 180), 0]}
      >
        <circleBufferGeometry attach="geometry" args={[1, 32]} />
        <a.meshBasicMaterial
          attach="material"
          color="white"
          transparent={true}
          side={THREE.DoubleSide}
          {...opacityAnim}
        />
      </a.mesh>
      <mesh
        position={[-14.1, 14.2, 22.5]}
        rotation={[0, -20 * (Math.PI / 180), 0]}
        onPointerUp={async () => {
          toggle(!animate)
          easter.state.easter3 = true

          if (easter.total() === 4) {
            await three.playPing(easterComplete)
            three.congratulation = true
          } else {
            await three.playPing(easterFind)
          }
          localStorage.setItem('easter', JSON.stringify({ ...easter.state }))
        }}
      >
        <circleBufferGeometry attach="geometry" args={[1, 32]} />
        <meshBasicMaterial
          attach="material"
          color="white"
          transparent={true}
          opacity={0}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  )
}

const Bonia4 = () => {
  const [animate, toggle] = React.useState(false)
  const opacityAnim = useSpring({
    from: { opacity: 1 },
    to: async (next) => {
      if (animate) {
        await next({ opacity: 0 })
        toggle(!animate)
      }
    },
    reset: true,
    config: { duration: 450 }
  })
  const scaleAnim = useSpring({
    from: { scale: [0, 0, 0] },
    to: async (next) => {
      if (animate) {
        await next({ scale: [1, 1, 1] })
      }
    },
    reset: true,
    config: { duration: 450 }
  })

  return (
    <>
      <a.mesh {...scaleAnim} position={[-13.5, 8.3, 8.5]} rotation={[0, -70 * (Math.PI / 180), 0]}>
        <circleBufferGeometry attach="geometry" args={[1, 32]} />
        <a.meshBasicMaterial
          attach="material"
          color="white"
          transparent={true}
          side={THREE.DoubleSide}
          {...opacityAnim}
        />
      </a.mesh>
      <mesh
        position={[-13.5, 8.3, 8.5]}
        rotation={[0, -70 * (Math.PI / 180), 0]}
        onPointerUp={async () => {
          toggle(!animate)
          easter.state.easter4 = true

          if (easter.total() === 4) {
            await three.playPing(easterComplete)
            three.congratulation = true
          } else {
            await three.playPing(easterFind)
          }
          localStorage.setItem('easter', JSON.stringify({ ...easter.state }))
        }}
      >
        <circleBufferGeometry attach="geometry" args={[1, 32]} />
        <meshBasicMaterial
          attach="material"
          color="white"
          transparent={true}
          opacity={0}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  )
}

const Scene1 = () => {
  const showArmeriaInfo = async () => {
    const result = await three.playPing(prism)
    if (result) {
      console.log(result)
      three.showArmeria = true
    }
  }

  const showIxoraInfo = async () => {
    const result = await three.playPing(prism)
    if (result) {
      console.log(result)
      three.showIxora = true
    }
  }

  const showGiannaInfo = async () => {
    const result = await three.playPing(prism)
    if (result) {
      console.log(result)
      three.showGianna = true
    }
  }

  const showDepartInfo = async () => {
    const result = await three.playPing(prism)
    if (result) {
      console.log(result)
      three.showDepart = true
    }
  }

  const showFullCampaignVideo = async () => {
    const result = await three.playPing(prism)
    if (result) {
      console.log(result)
      three.showFullCampaign = true
    }
  }

  const showKOLVideo = async () => {
    const result = await three.playPing(prism)
    if (result) {
      console.log(result)
      three.showKOL = true
    }
  }

  const showCafeInfo = async () => {
    const result = await three.playPing(prism)
    if (result) {
      console.log(result)
      three.showCafe = true
    }
  }

  const showWelcomeInfo = async () => {
    const result = await three.playPing(prism)
    if (result) {
      console.log(result)
      three.showWelcome = true
    }
  }

  const showShareInfo = async () => {
    const result = await three.playPing(prism)
    if (result) {
      console.log(result)
      three.showShare = true
    }
  }

  return (
    <>
      <Suspense fallback={null}>
        <Dome />

        <Diamond
          position={[-24, 13.6, 0]}
          scale={[0.06, 0.06, 0.06]}
          onPointerUp={showWelcomeInfo}
        />
        <HotSpot
          position={[-25.5, 8.6, 0]}
          rotation={[0, Math.PI / 2, 0]}
          size={[19.2, 6.2, 0.1, 10]}
          onPointerUp={showWelcomeInfo}
        />

        <Diamond position={[22, 7, -15]} scale={[0.05, 0.05, 0.05]} onPointerUp={showDepartInfo} />
        <HotSpot
          position={[22, 0, -15]}
          rotation={[0, Math.PI / 1.5, 0]}
          size={[2.6, 5.5, 0.1, 10]}
          onPointerUp={showDepartInfo}
        />

        <Diamond position={[-2.1, 11, 26]} scale={[0.05, 0.05, 0.05]} onPointerUp={showCafeInfo} />
        <HotSpot
          position={[-3, 4, 26]}
          rotation={[0, Math.PI / 1.1, 0]}
          size={[7.3, 2, 0.1, 10]}
          onPointerUp={showCafeInfo}
        />

        <Diamond position={[-13, 3.5, 22]} scale={[0.04, 0.04, 0.04]} onPointerUp={showIxoraInfo} />
        <HotSpot
          position={[-13, 0, 22]}
          rotation={[0, Math.PI / 1.3, 0]}
          size={[3.5, 3, 0.1, 10]}
          onPointerUp={showIxoraInfo}
        />

        <Diamond
          position={[-15, 7.3, 19.5]}
          scale={[0.03, 0.03, 0.03]}
          onPointerUp={showArmeriaInfo}
        />
        <HotSpot
          position={[-15, 4.5, 19.5]}
          rotation={[0, Math.PI / 1.3, 0]}
          size={[2.6, 2.2, 0.1, 10]}
          onPointerUp={showArmeriaInfo}
        />

        <Diamond
          position={[-12, 1, -27.3]}
          scale={[0.05, 0.05, 0.05]}
          onPointerUp={showKOLVideo}
        />
        <HotSpot
          position={[-12, -4.2, -27.3]}
          rotation={[0, Math.PI / 3, 0]}
          size={[5, 3.3, 0.1, 10]}
          onPointerUp={showKOLVideo}
        />

        <Diamond
          position={[-17, 8, -22.3]}
          scale={[0.04, 0.04, 0.04]}
          onPointerUp={showFullCampaignVideo}
        />
        <HotSpot
          position={[-16.8, 4.3, -22.3]}
          rotation={[0, Math.PI / 4.7, 0]}
          size={[3.9, 2.3, 0.1, 10]}
          onPointerUp={showFullCampaignVideo}
        />

        <Diamond
          position={[-22, 11.3, 19.5]}
          scale={[0.034, 0.034, 0.034]}
          onPointerUp={showGiannaInfo}
        />
        <HotSpot
          position={[-17.8, 6.2, 15.5]}
          rotation={[0, Math.PI / 1.6, 0]}
          size={[4.8, 2.8, 0.1, 10]}
          onPointerUp={showGiannaInfo}
        />

        <Diamond
          position={[21, 2.2, 11]}
          scale={[0.032, 0.032, 0.032]}
          onPointerUp={showShareInfo}
        />
        <HotSpot
          position={[21, 0.2, 13]}
          rotation={[0, Math.PI / 3.3, 0]}
          size={[12, 1.8, 0.5, 10]}
          onPointerUp={showShareInfo}
        />

        <TeleV position={[-25.5, 7.5, 0]} />

        <Bonia1 />
        <Bonia2 />
        <Bonia3 />
        <Bonia4 />
      </Suspense>
    </>
  )
}

export default Scene1
