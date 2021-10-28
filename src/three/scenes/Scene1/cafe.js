/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from 'react'
import { Box, Text, jsx, Close, Flex, Grid, Button, Input } from 'theme-ui'
import axios from 'axios'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { use100vh } from 'react-div-100vh'
import { useLocation } from 'react-router'
import { CustomRightArrow, CustomLeftArrow } from '../../../components/CarouselArrow'

import I18n from '../../../translations/i18n'
import SuspenseImage from './../../../components/preload_image'
import { three } from '../../../store'

async function post(params) {
  try {
    const postSuccess = await axios.post('https://hummus.gaincue.com/bonia-promo', { ...params })
    if (postSuccess?.data?.success) {
      three.showSnackbar = true
    }
  } catch (error) {
    console.log(error)
  }
}

const CafeInfo = () => {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const submitForm = (e) => {
    e.preventDefault()

    try {
      post({ first_name: firstName, last_name: lastName, email: email })
    } catch (e) {
      console.log(e)
    } finally {
      setEmail('')
      setFirstName('')
      setLastName('')
    }
  }

  const height = use100vh()
  const location = useLocation()

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
              showDots={true}
              dotListClass="custom-dot-list mobile"
              customLeftArrow={<CustomLeftArrow />}
              customRightArrow={<CustomRightArrow />}
            >
              <SuspenseImage src="/images/cafe_image.png" draggable={false} />
              <SuspenseImage src="/images/cafe_image_2.jpg" draggable={false} />
              <SuspenseImage src="/images/cafe_image_3.jpg" draggable={false} />
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
              <I18n t="takeABite.title" />
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
              <I18n t="takeABite.content" />
              <Text
                sx={{
                  maxWidth: ['auto', 310],
                  mx: [24, 0],
                  fontSize: ['12px', null, '14px', '16px', '18px', '20px']
                }}
                color="yellowText"
              >
                <I18n t="takeABite.content2" />
              </Text>
              <Text
                sx={{
                  maxWidth: ['auto', 310],
                  mx: [24, 0],
                  fontSize: ['12px', null, '14px', '12px', '14px', '16px']
                }}
                color="white"
              >
                <I18n t="takeABite.content3" />
              </Text>
            </Text>
            <Box p={[12, null, null, 2, 3]} />

            <Box as="form" sx={{ maxWidth: [300, null, 350, null, 400] }} onSubmit={submitForm}>
              <Flex>
                <Input
                  name="first_name"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value)
                  }}
                  placeholder={I18n.getTranslation(location, 'firstName')}
                  sx={{ flex: 1, fontSize: ['12px', null, '14px', '16px', '18px', '20px'] }}
                />

                <Box p={1} />

                <Input
                  name="last_name"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value)
                  }}
                  placeholder={I18n.getTranslation(location, 'lastName')}
                  sx={{ flex: 1, fontSize: ['12px', null, '14px', '16px', '18px', '20px'] }}
                />
              </Flex>

              <Box p={2} />

              <Input
                name="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                placeholder={I18n.getTranslation(location, 'takeABite.preorder')}
                sx={{ width: '100%', fontSize: ['12px', null, '14px', '16px', '18px', '20px'] }}
              />

              <Box p={[12, null, null, 2, 3]} />

              <Button variant="form" sx={{ width: [250, 300] }}>
                <I18n t="submit" />
              </Button>
            </Box>

            <Box p={[12, null, null, 2, 3]} />

            <Text
              sx={{
                maxWidth: ['auto', 388],
                mx: [24, 0]
              }}
              variant="disclaimer"
              color="white"
            >
              <I18n t="takeABite.termsAndConditions" />
            </Text>
            <Box p={[12, null, null, 2, 3]} />
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
              three.showCafe = false
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
                <I18n t="takeABite.title" />
              </Text>
              <Box p={[2, null, null, 2, 3]} />
              <Text
                sx={{
                  maxWidth: ['auto', 388],
                  mx: [12, 0],
                  fontSize: ['12px', '14px', '16px', null]
                }}
                color="white"
              >
                <I18n t="takeABite.content" />
                <Text
                  sx={{
                    maxWidth: ['auto', 388],
                    mx: [12, 0],
                    fontSize: ['16px', '18px', '20px', null]
                  }}
                  color="yellowText"
                >
                  <I18n t="takeABite.content2" />
                </Text>
                <Text
                  sx={{
                    maxWidth: ['auto', 388],
                    mx: [12, 0],
                    fontSize: ['12px', '14px', '16px', null]
                  }}
                  color="white"
                >
                  <I18n t="takeABite.content3" />
                </Text>
              </Text>

              <Box p={[2, null, null, 2, 3]} />

              <Box as="form" sx={{ maxWidth: [300, null, 350, null, 400] }} onSubmit={submitForm}>
                <Flex>
                  <Input
                    name="first_name"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value)
                    }}
                    placeholder={I18n.getTranslation(location, 'firstName')}
                    sx={{ flex: 1, fontSize: ['12px', null, '14px', '16px', '18px', '20px'] }}
                  />

                  <Box p={1} />

                  <Input
                    name="last_name"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value)
                    }}
                    placeholder={I18n.getTranslation(location, 'lastName')}
                    sx={{ flex: 1, fontSize: ['12px', null, '14px', '16px', '18px', '20px'] }}
                  />
                </Flex>

                <Box p={2} />

                <Input
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                  placeholder={I18n.getTranslation(location, 'takeABite.preorder')}
                  sx={{ width: '100%', fontSize: ['12px', null, '14px', '16px', '18px', '20px'] }}
                />

                <Box p={[2, null, null, 2, 3]} />

                <Button variant="form" sx={{ width: [250, 300] }}>
                  <I18n t="submit" />
                </Button>
              </Box>

              <Box p={[12, null, null, 2, 3]} />

              <Text
                sx={{
                  maxWidth: ['auto', 388],
                  mx: [24, 0]
                }}
                variant="disclaimer"
                color="white"
              >
                <I18n t="takeABite.termsAndConditions" />
              </Text>
            </Flex>

            <Box sx={{ lineHeight: 0 }}>
              <SuspenseImage src="/images/cafe_image.png" draggable={false} />
            </Box>
            <Box sx={{ lineHeight: 0 }}>
              <SuspenseImage src="/images/cafe_image_2.jpg" draggable={false} />
            </Box>
            <Box sx={{ lineHeight: 0 }}>
              <SuspenseImage src="/images/cafe_image_3.jpg" draggable={false} />
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
              three.showCafe = false
            }}
          />
        </Grid>
      </Box>
    </Box>
  )
}

export default CafeInfo
