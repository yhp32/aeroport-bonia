/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { Box, Text, jsx, Close, Flex, Grid, Button, Image } from 'theme-ui'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { use100vh } from 'react-div-100vh'
import { FacebookShareButton } from 'react-share'

import I18n from '../../../translations/i18n'
import SuspenseImage from './../../../components/preload_image'
import { CustomRightArrow, CustomLeftArrow } from '../../../components/CarouselArrow'
import { three } from '../../../store'

const ShareInfo = () => {
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
        bg="takeABiteBackground"
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
          bg="takeABiteBackground"
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
            >
              <SuspenseImage src="/images/take_a_bite.png" draggable={false} />
            </Carousel>
          </Box>

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
              <I18n t="greeting.greet.title" />
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
              <I18n t="greeting.greet.desc" />
            </Text>
            <Box p={[12, null, null, 4, 5]} />
            <Flex>
              <FacebookShareButton url={'https://aeroport.bonia.com'}>
                <Button variant="social" mr={[16, 24]} bg="socialButton">
                  <Image src="/images/facebook.svg" alt="facebook" />
                </Button>
              </FacebookShareButton>
              <a href="https://www.instagram.com/bonia__official" target="_blank" rel="noreferrer">
                <Button variant="social" mr={[16, 24]} bg="socialButton">
                  <Image src="/images/instagram.svg" alt="instagram" />
                </Button>
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=https%3A%2F%2Faeroport.bonia.com&text=Explore%20BONIA%27s%20A%2FW%2021%20Wanderland%20Collection"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="social" mr={[16, 24]} bg="socialButton">
                  <Image src="/images/twitter.svg" alt="website" sx={{ p: [1, '7px'] }} />
                </Button>
              </a>
              <a
                href="https://wa.me/?text=Explore%20BONIA%27s%20A%2FW%2021%20Wanderland%20Collection%20at%20https%3A%2F%2Faeroport.bonia.com"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="social" bg="socialButton">
                  <Image src="/images/whatsapp.svg" alt="website" sx={{ p: [1, '7px'] }} />
                </Button>
              </a>
            </Flex>
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
              three.showShare = false
            }}
          />
        </Grid>

        {/* Phone & Tablet Portrait */}

        <Grid
          className="mobileGrid"
          bg="takeABiteBackground"
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
                <I18n t="greeting.greet.title" />
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
                <I18n t="greeting.greet.desc" />
              </Text>
              <Box p={[12, null, null, 4, 5]} />
              <Flex>
                <FacebookShareButton url={'https://aeroport.bonia.com'}>
                  <Button variant="social" mr={[16, 24]} bg="socialButton">
                    <Image src="/images/facebook.svg" alt="facebook" />
                  </Button>
                </FacebookShareButton>
                <a
                  href="https://www.instagram.com/bonia__official"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="social" mr={[16, 24]} bg="socialButton">
                    <Image src="/images/instagram.svg" alt="instagram" />
                  </Button>
                </a>
                <a
                  href="https://twitter.com/intent/tweet?url=https%3A%2F%2Faeroport.bonia.com&text=Explore%20BONIA%27s%20A%2FW%2021%20Wanderland%20Collection"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="social" mr={[16, 24]} bg="socialButton">
                    <Image src="/images/twitter.svg" alt="website" sx={{ p: [1, '7px'] }} />
                  </Button>
                </a>
                <a
                  href="https://wa.me/?text=Explore%20BONIA%27s%20A%2FW%2021%20Wanderland%20Collection%20at%20https%3A%2F%2Faeroport.bonia.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="social" bg="socialButton">
                    <Image src="/images/whatsapp.svg" alt="website" sx={{ p: [1, '7px'] }} />
                  </Button>
                </a>
              </Flex>
            </Flex>

            <Box sx={{ lineHeight: 0 }}>
              <SuspenseImage src="/images/take_a_bite.png" draggable={false} />
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
              three.showShare = false
            }}
          />
        </Grid>
      </Box>
    </Box>
  )
}

export default ShareInfo
