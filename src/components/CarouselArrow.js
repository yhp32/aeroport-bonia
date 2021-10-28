/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { ReactComponent as RightArrow } from './right_arrow.svg'
import { ReactComponent as LeftArrow } from './left_arrow.svg'

const CustomRightArrow = ({ onClick, ...rest }) => {
  // const {
  //   onMove,
  //   carouselState: { currentSlide, deviceType }
  // } = rest
  // onMove means if dragging or swiping in progress.
  return (
    <RightArrow
      src="/images/left_arrow.svg"
      alt="left_arrow"
      onClick={() => onClick()}
      sx={{
        position: 'absolute',
        right: [24, 32],
        bottom: 20,
        transition: 'all .5s',
        zIndex: 1000,
        width: [24, 30],
        height: [24, 30],
        opacity: 1,
        cursor: 'pointer',
        fill: 'none',
        stroke: 'white',
        strokeWidth: [8, 4]
      }}
    />
  )
}

const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    isTop = false,
    // onMove,
    // carouselState: { currentSlide, deviceType }
  } = rest
  // onMove means if dragging or swiping in progress.
  return (
    <LeftArrow
      src="/images/left_arrow.svg"
      alt="left_arrow"
      onClick={() => onClick()}
      sx={{
        position: 'absolute',
        left: [24, 32],
        bottom: isTop ? 'initial' : 20,
        top: isTop ? 20 : 'initial',
        transition: 'all .5s',
        zIndex: 1000,
        width: [24, 30],
        height: [24, 30],
        opacity: 1,
        cursor: 'pointer',
        fill: 'none',
        stroke: 'white',
        strokeWidth: [8, 4]
      }}
    />
  )
}

export { CustomLeftArrow, CustomRightArrow }
