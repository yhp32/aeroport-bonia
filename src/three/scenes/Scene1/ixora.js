/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { Box, Text, jsx, Close, Flex, Grid, Button } from 'theme-ui'
import { useResponsiveValue } from '@theme-ui/match-media'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { use100vh } from 'react-div-100vh'
import { CustomRightArrow, CustomLeftArrow } from '../../../components/CarouselArrow'

import I18n from '../../../translations/i18n'
import SuspenseImage from './../../../components/preload_image'
import { three } from '../../../store'

const IxoraBagInfo = () => {
  const height = use100vh()
  const forMobile = useResponsiveValue(['mobileFlex', 'mobileFlex', 'mobileFlex', null])

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
        bg="ixoraBackground"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          width: [350, 450, 550, 800, 1000],
          maxHeight: height - 50
        }}
      >
        {/* Desktop & Tablet Landscape */}

        <Grid
          className="desktopGrid"
          sx={{ display: ['none', 'none', 'none', 'grid'] }}
          columns={[null, null, null, 2, 2, 2]}
          gap={0}
        >
          <Box sx={{ lineHeight: 0 }}>
            <Carousel
              responsive={{
                mobile: {
                  breakpoint: { max: 4000, min: 0 },
                  items: 1
                }
              }}
              swipeable={true}
              draggable={true}
              showDots={true}
              dotListClass="custom-dot-list mobile"
              customLeftArrow={<CustomLeftArrow />}
              customRightArrow={<CustomRightArrow />}
            >
              <SuspenseImage src="/images/bag_ixora_1.png" draggable={false} />
              <SuspenseImage src="/images/bag_ixora_2.png" draggable={false} />
              <SuspenseImage src="/images/bag_ixora_3.png" draggable={false} />
            </Carousel>
          </Box>
          <Flex
            sx={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              pl: [null, null, null, 3, 5, 6],
              pr: [null, null, null, 3, 5, 6]
            }}
          >
            <Box p={[12, null, null, 3, 4, 5]} />
            <Text
              variant="h1Italic"
              sx={{
                width: [180, 'auto'],
                fontSize: ['12px', null, '14px', '16px', '18px', '20px']
              }}
              color="white"
            >
              <I18n t="ixoraBag.title" />
            </Text>
            <Box p={[12, null, null, 2, 3]} />
            <Text
              sx={{
                maxWidth: ['auto', 388],
                mx: [24, 0],
                fontSize: ['12px', null, '14px', '12px', '14px', '16px']
              }}
              color="white"
            >
              <I18n t="ixoraBag.content" />
            </Text>
            <Box p={[12, 6, 5, 5, 5, 6]} />
            <a href="https://www.bonia.com/collections/ixora" target="_blank" rel="noreferrer">
              <Button
                variant="primary"
                bg="ixoraButton"
                sx={{ fontSize: ['12px', null, '14px', '16px', '18px', '20px'] }}
              >
                <I18n t="ixoraBag.preorder" />
              </Button>
            </a>
          </Flex>

          <Close
            sx={{
              position: 'absolute',
              cursor: 'pointer',
              top: [16, 20],
              right: [24, 32],
              color: 'white'
            }}
            onPointerUp={() => {
              three.showIxora = false
            }}
          />
        </Grid>

        {/* Phone & Tablet Portrait */}

        <Grid
          className="mobileGrid"
          sx={{ display: ['grid', 'grid', 'grid', 'none', null] }}
          columns={[1, 1, 1, null, null, null]}
          gap={0}
        >
          <Carousel
            responsive={{
              mobile: {
                breakpoint: { max: 4000, min: 0 },
                items: 1
              }
            }}
            swipeable={true}
            draggable={true}
            showDots={true}
            dotListClass="custom-dot-list mobile"
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
          >
            <Flex
              className={forMobile}
              sx={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
              }}
            >
              <Box sx={{ lineHeight: 0 }}>
                <SuspenseImage src="/images/bag_ixora_1.png" draggable={false} />
              </Box>

              <Text
                variant="h1Italic"
                sx={{
                  width: [180, 'auto'],
                  fontSize: ['16px', '24px', '32px', null],
                  position: 'absolute',
                  top: [6, 6, 7]
                }}
                color="black"
              >
                <I18n t="ixoraBag.title" />
              </Text>
              <Box p={[12, 5, 6, null]} />
              <Button
                variant="primary"
                bg="ixoraButton"
                sx={{
                  fontSize: ['12px', '16px', '20px', null],
                  position: 'absolute',
                  bottom: ['36px', '44px', '48px']
                }}
                onClick={() => {
                  window.open('https://www.bonia.com/collections/ixora')
                }}
              >
                <I18n t="ixoraBag.preorder" />
              </Button>
            </Flex>

            <Flex
              sx={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
              }}
            >
              <Box sx={{ lineHeight: 0 }}>
                <SuspenseImage src="/images/bag_ixora_2.png" draggable={false} />
              </Box>
              <Button
                variant="primary"
                bg="ixoraButton"
                sx={{
                  fontSize: ['12px', '16px', '20px', null],
                  position: 'absolute',
                  bottom: ['36px', '44px', '48px']
                }}
                onClick={() => {
                  window.open(
                    'https://www.bonia.com/collections/new-arrival-womens-bags/products/ixora-tiffin-bag'
                  )
                }}
              >
                <I18n t="ixoraBag.preorder" />
              </Button>
            </Flex>

            <Flex
              sx={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
              }}
            >
              <Box sx={{ lineHeight: 0 }}>
                <SuspenseImage src="/images/bag_ixora_3.png" draggable={false} />
              </Box>
              <Button
                variant="primary"
                bg="ixoraButton"
                sx={{
                  fontSize: ['12px', '16px', '20px', null],
                  position: 'absolute',
                  bottom: ['36px', '44px', '48px']
                }}
                onClick={() => {
                  window.open(
                    'https://www.bonia.com/collections/new-arrival-womens-bags/products/ixora-tiffin-bag'
                  )
                }}
              >
                <I18n t="ixoraBag.preorder" />
              </Button>
            </Flex>
          </Carousel>

          <Close
            sx={{
              position: 'absolute',
              cursor: 'pointer',
              top: [16, 20],
              right: [24, 32],
              color: 'white'
            }}
            onPointerUp={() => {
              three.showIxora = false
            }}
          />
        </Grid>
      </Box>
    </Box>
  )
}

export default IxoraBagInfo
