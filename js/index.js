import { Controls } from './controls.js'
import { Sound } from './sounds.js'
import { Theme } from './theme.js'
import { Timer } from './timer.js'

import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonMore,
  buttonLess,
  minutesDisplay,
  secondsDisplay,
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
  buttonFireplace,
  inputRangeForest,
  inputRangeStorm,
  inputRangeCoffee,
  inputRangeFire,
  body,
  buttonLightTheme,
  buttonDarkTheme
} from './elements.js'

const controls = Controls({
  buttonPlay,
  buttonPause
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
})

const theme = Theme({
  buttonDarkTheme,
  buttonLightTheme,
  body
})

const sound = Sound()

// controls ==============================================
buttonPlay.addEventListener('click', () => {
  controls.toggleButton()
  timer.countdown()
  sound.pressButton()
})

buttonPause.addEventListener('click', () => {
  controls.toggleButton()
  timer.hold()
  sound.pressButton()
})

buttonStop.addEventListener('click', () => {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  timer.reset()
  sound.pressButton()
})

buttonMore.addEventListener('click', () => {
  timer.addFiveMinutes()
  sound.pressButton()
})

buttonLess.addEventListener('click', () => {
  timer.removeFiveMinutes()
  sound.pressButton()
})

// theme =================================================
buttonLightTheme.addEventListener('click', () => {
  theme.toggleTheme()
  theme.toggleBodyClass()
})

buttonDarkTheme.addEventListener('click', () => {
  theme.toggleTheme()
  theme.toggleBodyClass()
})

// sounds ================================================
buttonForest.addEventListener('click', sound.playAudioForest)
buttonRain.addEventListener('click', sound.playAudioRain)
buttonCoffeeShop.addEventListener('click', sound.playAudioCoffeeShop)
buttonFireplace.addEventListener('click', sound.playAudioFireplace)

inputRangeForest.addEventListener('input', () => {
  sound.forestVolume(inputRangeForest.value)
})

inputRangeStorm.addEventListener('input', () => {
  sound.rainVolume(inputRangeStorm.value)
})

inputRangeCoffee.addEventListener('input', () => {
  sound.coffeeShopVolume(inputRangeCoffee.value)
})

inputRangeFire.addEventListener('input', () => {
  sound.fireplaceVolume(inputRangeFire.value)
})