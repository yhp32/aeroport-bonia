/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from 'react'
import { Box, Text, jsx, Close, Flex, Grid, Button, Input } from 'theme-ui'
import axios from 'axios'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { use100vh } from 'react-div-100vh'
import { useLocation } from 'react-router'

import I18n from '../translations/i18n'
import SuspenseImage from './preload_image'
import { three } from '../store'
import { CustomRightArrow, CustomLeftArrow } from './CarouselArrow'

async function post(params) {
  try {
    const postSuccess = await axios.post('https://hummus.gaincue.com/bonia-congratulation', {
      ...params
    })
    if (postSuccess?.data?.success) {
      three.showSnackbar = true
    }
  } catch (error) {
    console.log(error)
  }
}

const Congratulation = ({ count }) => {
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

  const location = useLocation()
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
        bg="congratulationsBackground"
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
          bg="congratulationsBackground"
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
              <SuspenseImage src="/images/found_all_b.png" draggable={false} />
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
              color="yellowText"
            >
              <I18n t="congratulations.title" />
            </Text>
            <Text
              sx={{
                maxWidth: ['auto', 388],
                mx: [24, 0],
                fontSize: ['12px', null, '14px', '12px', '14px', '16px']
              }}
              color="yellowText"
            >
              <I18n t="congratulations.subtitle" />
            </Text>
            <Box p={[12, null, null, 2, 3]} />
            <Text
              sx={{
                maxWidth: ['auto', 388],
                mx: [24, 0],
                fontSize: ['12px', null, '14px', '12px', '14px', '16px'],
                whiteSpace: 'break-spaces'
              }}
              color="white"
            >
              <I18n t={'congratulations.contentPre'} />
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
                placeholder={I18n.getTranslation(location, 'congratulations.preorder')}
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
              <I18n t="congratulations.termsAndConditions" />
            </Text>
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
              three.congratulation = false
            }}
          />
        </Grid>

        {/* Phone & Tablet Portrait */}

        <Grid
          className="mobileGrid"
          bg="congratulationsBackground"
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
                color="yellowText"
              >
                <I18n t="congratulations.title" />
              </Text>
              <Text
                sx={{
                  maxWidth: ['auto', 388],
                  mx: [24, 0],
                  fontSize: ['12px', null, '14px', '12px', '14px', '16px']
                }}
                color="yellowText"
              >
                <I18n t="congratulations.subtitle" />
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
                <I18n t={'congratulations.contentPre'} />
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
                  placeholder={I18n.getTranslation(location, 'congratulations.preorder')}
                  sx={{ width: '100%', fontSize: ['12px', null, '14px', '16px', '18px', '20px'] }}
                />

                <Box p={[2, null, null, 2, 3]} />

                <Button variant="form" sx={{ width: [250, 300] }}>
                  <I18n t="submit" />
                </Button>
              </Box>

              <Box p={[2, null, null, 2, 3]} />

              <Text
                sx={{
                  maxWidth: ['auto', 388],
                  mx: [24, 0]
                }}
                variant="disclaimer"
                color="white"
              >
                <I18n t="congratulations.termsAndConditions" />
              </Text>
            </Flex>

            <Box sx={{ lineHeight: 0 }}>
              <SuspenseImage src="/images/found_all_b.png" draggable={false} />
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
              three.congratulation = false
            }}
          />
        </Grid>
      </Box>
    </Box>
  )
}

export default Congratulation
