/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useEffect } from 'react'
import { Box, jsx, Close, Grid, Embed } from 'theme-ui'

import 'react-multi-carousel/lib/styles.css'
import { use100vh } from 'react-div-100vh'

import { settings, three } from '../../../store'

const FullCampaignVideo = () => {
  const height = use100vh()

  useEffect(() => {
    settings.sound = !settings.sound
  }, [])

  return (
    <Box
      sx={{
        bg: 'rgba(0, 0, 0, 0.5)',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: height,
        zIndex: 2
      }}
    >
      <Box
        bg="black"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          width: ['100%', '100%', 550, 800, 1000]
        }}
      >
        {/* Desktop & Tablet Landscape */}

        <Grid columns={1} gap={0}>
          <Embed
            allow="autoplay"
            src={'https://www.youtube.com/embed/it6Xy3Phlog?autoplay=1&showinfo=0&controls=0&rel=0'}
          />
          <Close
            sx={{
              position: 'absolute',
              cursor: 'pointer',
              top: ['4px', '6px', '6px', '8px', '8px'],
              right: ['8px', '10px', '10px', '10px', '10px'],
              color: 'white'
            }}
            onPointerUp={() => {
              three.showFullCampaign = false
              settings.sound = !settings.sound
            }}
          />
        </Grid>
      </Box>
    </Box>
  )
}

export default FullCampaignVideo
