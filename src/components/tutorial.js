import React from 'react'
import { Box, Text, Close, Flex } from 'theme-ui'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { use100vh } from 'react-div-100vh'

import { settings } from '../store'
import I18n from '../translations/i18n'
import { CustomRightArrow, CustomLeftArrow } from '../components/CarouselArrow'
import SuspenseImage from './preload_image'

const tutorials = [
  {
    title: 'tutorial.welcome',
    subtitle: 'tutorial.bonvoyage',
    content: 'tutorial.content',
    heading: 'tutorial.virtualworld',
    logo: '/images/bonia.png',
    gif: '/images/aeroport_transparent.gif'
  }
]

const Tutorial = () => {
  const height = use100vh()

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
        bg="armeriaBackground"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          width: [350, 450, 500],
          maxHeight: height - 50
        }}
      >
        <Carousel
          responsive={{
            mobile: {
              breakpoint: { max: 4000, min: 0 },
              items: 1
            }
          }}
          arrows={true}
          showDots
          renderDotsOutside
          dotListClass="custom-dot-list mobile"
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {tutorials.map((tutorial) => {
            return (
              <Flex
                bg="armeriaBackground"
                sx={{
                  // height: [height - 50, 500],
                  flexDirection: 'column'
                  // maxHeight: height - 50
                }}
              >
                {tutorial.logo != null ? (
                  <Box p={4}>
                    <Box pt={6} />
                    <SuspenseImage src={tutorial.logo} sx={{ width: 100, height: 'auto' }} />
                    <Box p={12} />
                  </Box>
                ) : (
                  <Box p={24} />
                )}

                <Text variant="h2Italic" color="white">
                  <I18n t={tutorial.title} />
                </Text>

                {/* first slide */}
                {tutorial.gif != null && (
                  <Box p={4}>
                    <SuspenseImage src={tutorial.gif} sx={{ maxWidth: '80%' }} />
                  </Box>
                )}
                {tutorial.heading != null && (
                  <Box p={3}>
                    <Text variant="h2Italic" color="white">
                      <I18n t={tutorial.heading} />
                    </Text>
                  </Box>
                )}
                {tutorial.content != null && (
                  <Box p={5}>
                    <Text color="white">
                      <I18n t={tutorial.content} />
                    </Text>
                  </Box>
                )}

                <Box p={12} />

                {tutorial.image != null && (
                  <video
                    src={tutorial.image}
                    style={{ width: '100%', flex: 1, objectFit: 'cover' }}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                )}
                <Box p={12} />
                <Text sx={{ height: 60, px: 2 }} color="white">
                  <I18n t={tutorial.subtitle} />
                </Text>
                <Box pt={40} />
              </Flex>
            )
          })}
        </Carousel>

        <Close
          sx={{ position: 'absolute', top: [16, 20], right: [24, 32], color: 'white' }}
          onPointerUp={() => {
            localStorage.setItem(
              'settings',
              JSON.stringify({ tutorial: 5, menu: false, sound: false })
            )
            settings.tutorial = 5
          }}
        />
      </Box>
    </Box>
  )
}

export default Tutorial
