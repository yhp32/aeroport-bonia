import React, { useState, useEffect, Suspense } from 'react'
import { useProxy } from 'valtio'
import axios from 'axios'

import { three, settings } from '../../store'
import ArmeriaBagInfo from '../scenes/Scene1/armeria'
import DepartForWanderlandInfo from '../scenes/Scene1/wanderland'
import GiannaBagInfo from '../scenes/Scene1/gianna'
import IxoraBagInfo from '../scenes/Scene1/ixora'
import CafeInfo from '../scenes/Scene1/cafe'
import WelcomeInfo from '../scenes/Scene1/welcome'
import HUD from '../../components/hud'
import FullCampaignVideo from '../scenes/Scene1/full_campaign'
import KOLVideo from '../scenes/Scene1/kol'
import ShareInfo from '../scenes/Scene1/share'
import Tutorial from '../../components/tutorial'
import Congratulation from '../../components/congratulation'
import Snackbar from '../../components/Snackbar'

const ThreeInfo = () => {
  const { tutorial } = useProxy(settings)
  const {
    showSnackbar,
    showIxora,
    showGianna,
    showDepart,
    showFullCampaign,
    showKOL,
    showCafe,
    showWelcome,
    showShare,
    congratulation
  } = useProxy(three)

  const [count, setCount] = useState(0)

  useEffect(() => {
    axios.get('https://hummus.gaincue.com/bonia').then((res) => {
      setCount(res.data.data)
    })
  }, [])

  return (
    <>
      {showSnackbar && <Snackbar />}

      {showIxora && (
        <Suspense fallback={null}>
          <IxoraBagInfo />
        </Suspense>
      )}

      {showGianna && (
        <Suspense fallback={null}>
          <GiannaBagInfo />
        </Suspense>
      )}

      {showDepart && (
        <Suspense fallback={null}>
          <DepartForWanderlandInfo />
        </Suspense>
      )}

      {showFullCampaign && (
        <Suspense fallback={null}>
          <FullCampaignVideo />
        </Suspense>
      )}

      {showKOL && (
        <Suspense fallback={null}>
          <KOLVideo />
        </Suspense>
      )}

      {showCafe && (
        <Suspense fallback={null}>
          <CafeInfo />
        </Suspense>
      )}

      {showWelcome && (
        <Suspense fallback={null}>
          <WelcomeInfo />
        </Suspense>
      )}

      {showShare && (
        <Suspense fallback={null}>
          <ShareInfo />
        </Suspense>
      )}


      {tutorial > 3 && <HUD />}

      {tutorial > 0 && tutorial < 4 && (
        <Suspense fallback={null}>
          <Tutorial />
        </Suspense>
      )}
    </>
  )
}

export default ThreeInfo
