import React from 'react'
import { Box, Button, Flex, Text, Close, Image } from 'theme-ui'
import { FacebookShareButton } from 'react-share'

import { settings } from '../store'
import I18n from '../translations/i18n'

const Settings = () => {
  return (
    <Flex
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        width: ['calc(100% - 50px)', 'auto'],
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
      bg="armeriaBackground"
      px={[40, 102]}
    >
      <Box p={[20, 24]} />

      <Image src={'/images/aeroport_transparent.gif'} sx={{ width: 300, height: 'auto' }} />
      <Box p={3} />
      <Text variant="h1Italic" color="white">
        <I18n t={'tutorial.virtualworld'} />
      </Text>
      <Box p={5} />

      <Button
        sx={{ width: '100%' }}
        bg={'socialButton'}
        onPointerUp={() => (settings.tutorial = 1)}
      >
        <I18n t="settings.view" />
      </Button>

      <Box p={2} />

      <a href="https://www.bonia.com/" target="_blank" rel="noreferrer" style={{ width: '100%' }}>
        <Button sx={{ width: '100%' }} bg={'socialButton'}>
          <I18n t="settings.visit" />
          <span style={{ fontWeight: 'bold' }}>
            <I18n t="settings.domain" />
          </span>
        </Button>
      </a>

      <Box p={[20, 24]} />

      <Text color="white">Share</Text>

      <Box p={2} />

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

      <Box p={3} />

      <Text variant="disclaimer" color="white">
        <I18n t="settings.disclaimer" />
      </Text>

      <Box p={[20, 24]} />

      <Close
        sx={{ position: 'absolute', top: [16, 20], right: [24, 32], color: 'white' }}
        onPointerUp={() => {
          settings.menu = false
        }}
      />
    </Flex>
  )
}

export default Settings
