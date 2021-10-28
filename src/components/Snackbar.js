import React, { useEffect } from 'react'
import { Text } from 'theme-ui'
import { three } from '../store'

const Snackbar = () => {
  useEffect(() => {
    setTimeout(() => {
      document.getElementById('snackbar').style.visibility = 'hidden'
      three.showSnackbar = false
    }, 3000)
  }, [])

  return (
    <div>
      <Text id="snackbar" color="white">
        Your info is submitted. Kindly check your inbox.
      </Text>
    </div>
  )
}

export default Snackbar
