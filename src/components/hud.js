import React from 'react'
import { Flex, Image, MenuButton, Text } from 'theme-ui'
import { useProxy } from 'valtio'

import { three, settings, easter, easterComplete } from '../store'
import Settings from '../components/settings'

const HUD = () => {
  const { menu, sound } = useProxy(settings)
  const state = useProxy(easter)

  return (
    <>
      <Flex
        sx={{
          justifyContent: 'space-between',
          position: 'fixed',
          top: [40, 40],
          left: [40, 40],
          right: [40, 40],
          pointerEvents: 'none',
          zIndex: 1
        }}
      >
        <Flex sx={{ alignItems: 'center' }}>
          <MenuButton
            color="white"
            onPointerUp={() => {
              settings.menu = true
            }}
            sx={{
              pointerEvents: 'auto'
            }}
          />
          
        </Flex>

        <Flex sx={{ alignItems: 'center', flex: 1, justifyContent: 'flex-end' }}>
          <Image
            src="/images/bonia_b.png"
            mr={16}
            sx={{ height: [20, 32] }}
            onPointerUp={() => {
              if (state.total() === 4) {
                three.congratulation = true
                three.playPing(easterComplete)
              }
            }}
          />
          <Text
            variant="hud"
            color="white"
            onPointerUp={() => {
              if (state.total() === 4) {
                three.congratulation = true
                three.playPing(easterComplete)
              }
            }}
          >
            {`${state.total()} / 4`}
          </Text>
        </Flex>
      </Flex>

      {menu && <Settings />}
    </>
  )
}

export default HUD
