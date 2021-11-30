import React from 'react'
import { Flex, Image, MenuButton, Text } from 'theme-ui'
import { useProxy } from 'valtio'

import { three, settings } from '../store'
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

       
      </Flex>

      {menu && <Settings />}
    </>
  )
}

export default HUD
