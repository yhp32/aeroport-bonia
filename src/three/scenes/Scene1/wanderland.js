/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { Box, Text, jsx, Close, Flex, Grid, Button } from 'theme-ui'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { use100vh } from 'react-div-100vh'

import { CustomRightArrow, CustomLeftArrow } from '../../../components/CarouselArrow'
import I18n from '../../../translations/i18n'
import SuspenseImage from './../../../components/preload_image'
import { three } from '../../../store'

const DepartForWanderlandInfo = () => {
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
        bg="departForWanderlandBackground"
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
              <SuspenseImage src="/images/depart_1.png" draggable={false} />
              <SuspenseImage src="/images/depart_2.png" draggable={false} />
              <SuspenseImage src="/images/depart_3.png" draggable={false} />
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
              <I18n t="departForWanderland.title" />
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
              <I18n t="departForWanderland.content" />
            </Text>
            <Box p={[12, 6, 5, 5, 5, 6]} />
            <a href="https://www.bonia.com/collections/wanderland" target="_blank" rel="noreferrer">
              <Button
                variant="primary"
                bg="departForWanderlandButton"
                sx={{ fontSize: ['12px', null, '14px', '16px', '18px', '20px'] }}
              >
                <I18n t="departForWanderland.preorder" />
                <span style={{ fontWeight: 'bold' }}>
                  <I18n t="departForWanderland.domain" />
                </span>
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
              three.showDepart = false
            }}
          />
        </Grid>

        {/* Phone & Tablet Portrait */}

        <Grid
          className="mobileGrid"
          sx={{ display: ['grid', 'grid', 'grid', 'none', null] }}
          columns={[1, 1, 1, null, null, null]}
          gap={0}
          bg="departForWanderlandBackground"
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
              sx={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                pl: [4, 5, 6, null],
                pr: [4, 5, 6, null]
              }}
            >
              <Box p={[3, 4, 5, null]} />
              <Text
                variant="h1Italic"
                sx={{ width: [180, 'auto'], fontSize: ['14px', '16px', '20px', null] }}
                color="white"
              >
                <I18n t="departForWanderland.title" />
              </Text>
              <Box p={[12, null, null, 2, 3]} />
              <Text
                sx={{
                  maxWidth: ['auto', 388],
                  mx: [24, 0],
                  fontSize: ['12px', '14px', '16px', null]
                }}
                color="white"
              >
                <I18n t="departForWanderland.content" />
              </Text>
              <Box p={[12, 5, 6, null]} />
              <Button
                variant="primary"
                bg="departForWanderlandButton"
                sx={{ fontSize: ['12px', '16px', '20px', null], px: 6 }}
                onClick={() => {
                  window.open('https://www.bonia.com/collections/wanderland')
                }}
              >
                <I18n t="departForWanderland.preorder" />
                <span style={{ display: 'block', fontWeight: 'bold' }}>
                  <I18n t="departForWanderland.domain" />
                </span>
              </Button>
            </Flex>

            <Box sx={{ lineHeight: 0 }}>
              <SuspenseImage src="/images/depart_1.png" draggable={false} />
            </Box>
            <Box sx={{ lineHeight: 0 }}>
              <SuspenseImage src="/images/depart_2.png" draggable={false} />
            </Box>
            <Box sx={{ lineHeight: 0 }}>
              <SuspenseImage src="/images/depart_3.png" draggable={false} />
            </Box>
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
              three.showDepart = false
            }}
          />
        </Grid>
      </Box>
    </Box>
  )
}

export default DepartForWanderlandInfo
