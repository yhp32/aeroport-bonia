/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { Box, Text, jsx, Close, Flex, Grid, Image } from 'theme-ui'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { use100vh } from 'react-div-100vh'
import { CustomRightArrow, CustomLeftArrow } from '../../../components/CarouselArrow'

import I18n from '../../../translations/i18n'
import SuspenseImage from './../../../components/preload_image'
import { three } from '../../../store'
const WelcomeInfo = () => {
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
        bg="greetingsBackground"
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
          bg="greetingsBackground"
          sx={{ display: ['none', 'none', 'none', 'grid'] }}
          columns={[null, null, null, 2, 2, 2]}
          gap={0}
        >
          <Box sx={{ lineHeight: 0 }}>
            <Image src="/images/greetings_wanderers.png" draggable={false} />
          </Box>

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
            ssr={true}
            dotListClass="custom-dot-list mobile"
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
          >
            <Flex
              sx={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                pl: [null, null, null, 4, 5, 6],
                pr: [null, null, null, 4, 5, 6]
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
                <I18n t="welcome.title" />
              </Text>
              <Box p={[12, null, null, 2, 3]} />
              <Text
                sx={{
                  maxWidth: ['auto', 310],
                  mx: [24, 0],
                  fontSize: ['12px', null, '14px', '12px', '14px', '16px']
                }}
                color="white"
              >
                <I18n t="welcome.content" />
              </Text>
              <br />
              <Text
                sx={{
                  maxWidth: ['auto', 310],
                  mx: [24, 0],
                  fontSize: ['12px', null, '14px', '12px', '14px', '16px']
                }}
                color="white"
              >
                <I18n t="welcome.content2" />
              </Text>
            </Flex>

            <Flex
              sx={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                pl: [null, null, null, 4, 5, 6],
                pr: [null, null, null, 4, 5, 6]
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
                <I18n t="welcome.titleSecondSlide" />
              </Text>
              <Box p={[12, null, null, 2, 3]} />
              <Text
                sx={{
                  maxWidth: ['auto', 310],
                  mx: [24, 0],
                  fontSize: ['12px', null, '14px', '12px', '14px', '16px']
                }}
                color="white"
              >
                <I18n t="welcome.contentSecondSlide" />
              </Text>
              <br />
              <Text
                sx={{
                  maxWidth: ['auto', 310],
                  mx: [24, 0],
                  fontSize: ['12px', null, '14px', '12px', '14px', '16px']
                }}
                color="white"
              >
                <I18n t="welcome.contentSecondSlide2" />
              </Text>
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
              three.showWelcome = false
            }}
          />
        </Grid>

        {/* Phone & Tablet Portrait */}

        <Grid
          className="mobileGrid"
          bg="greetingsBackground"
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
                <I18n t="welcome.title" />
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
                <I18n t="welcome.content" />
              </Text>
              <br />
              <Text
                sx={{
                  maxWidth: ['auto', 388],
                  mx: [24, 0],
                  fontSize: ['12px', '14px', '16px', null]
                }}
                color="white"
              >
                <I18n t="welcome.content2" />
              </Text>
              <Box p={[12, 5, 6, null]} />
            </Flex>

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
                <I18n t="welcome.titleSecondSlide" />
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
                <I18n t="welcome.contentSecondSlide" />
              </Text>
              <br />
              <Text
                sx={{
                  maxWidth: ['auto', 388],
                  mx: [24, 0],
                  fontSize: ['12px', '14px', '16px', null]
                }}
                color="white"
              >
                <I18n t="welcome.contentSecondSlide2" />
              </Text>
              <Box p={[12, 5, 6, null]} />
            </Flex>

            <Box sx={{ lineHeight: 0 }}>
              <SuspenseImage src="/images/greetings_wanderers.png" draggable={false} />
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
              three.showWelcome = false
            }}
          />
        </Grid>
      </Box>
    </Box>
  )
}

export default WelcomeInfo
