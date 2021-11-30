import { proxy } from 'valtio'

const background = new Audio('/audio/bg.mp3')
const ambience = new Audio('/audio/ambience.mp3')
export const easterComplete = new Audio('/audio/easter_complete.mp3')
export const easterFind = new Audio('/audio/easter_find.mp3')
export const prism = new Audio('/audio/prism.mp3')
export const three = proxy({
  scene: 1,
  showSnackbar: false,
  showArmeria: false,
  showIxora: false,
  showGianna: false,
  showDepart: false,
  showFullCampaign: false,
  showKOL: false,
  showCafe: false,
  showWelcome: false,
  showShare: false,
  congratulation: false,
  videoEffect: null,
  bgIsPlaying: false,
  playPing: (audio, volume = 0.5) => {
    return new Promise((resolve, reject) => {
      if (settings.sound) {
        audio.currentTime = 0
        audio.volume = volume
        audio.loop = false

        const promise = audio.play()
        if (promise !== undefined) {
          promise
            .then(() => {
              resolve(true)
            })
            .catch((error) => {
              console.log(error)
              reject(true)
            })
        }
      } else {
        resolve(true)
      }
    })
  },
  playBg: () => {
    try {
      background.currentTime = 0
      background.volume = 0.4
      background.loop = true

      ambience.currentTime = 0
      ambience.volume = 0.2
      ambience.loop = true

      const promise = background.play()

      if (promise !== undefined) {
        promise
          .then(() => {
            three.bgIsPlaying = true
          })
          .catch((error) => console.error)
      }

      const promise2 = ambience.play()

      if (promise2 !== undefined) {
        promise
          .then(() => {
            three.bgIsPlaying = true
          })
          .catch((error) => console.error)
      }
    } catch (error) {
      console.log('invalid permission')
    }
  },
  pauseBg: () => {
    background.pause()
    ambience.pause()
  },
  resumeBg: () => {
    if (three.bgIsPlaying === true) {
      background.play()
      ambience.play()
    }
  }
})

export const settings = proxy({ tutorial: 0, menu: false, sound: true })

