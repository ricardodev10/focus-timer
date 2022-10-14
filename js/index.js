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

let minutes = Number(minutesDisplay.textContent)

const controls = Controls({
  buttonPlay,
  buttonPause
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  minutes
})

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

// sounds ================================================
const buttonPressAudio = new Audio("./sounds/Button-press.wav")
const kitchenTimerAudio = new Audio("./sounds/Kitchen-timer.mp3")

const audioForest = new Audio("./sounds/Floresta.mp3")
const audioRain = new Audio("./sounds/Chuva.mp3")
const audioCoffeeShop = new Audio("./sounds/Cafeteria.mp3")
const audioFireplace = new Audio("./sounds/Lareira.mp3")

const sound = Sound({
  buttonPressAudio,
  kitchenTimerAudio
})

let isPlaying = false

function playAudioForest() {
  audioForest.loop = true

  isPlaying ? audioForest.pause() : audioForest.play()

  audioForest.onplaying = () => {
    isPlaying = true
    buttonForest.style.background = "var(--bg-card-2)"
  };

  audioForest.onpause = () => {
    isPlaying = false
    buttonForest.style.background = ""
  };
}

function playAudioRain() {
  audioRain.loop = true

  isPlaying ? audioRain.pause() : audioRain.play()

  audioRain.onplaying = () => {
    isPlaying = true
    buttonRain.style.background = "var(--bg-card-2)"
  };

  audioRain.onpause = () => {
    isPlaying = false
    buttonRain.style.background = ""
  };
}

function playAudioCoffeeShop() {
  audioCoffeeShop.loop = true

  isPlaying ? audioCoffeeShop.pause() : audioCoffeeShop.play()

  audioCoffeeShop.onplaying = () => {
    isPlaying = true
    buttonCoffeeShop.style.background = "var(--bg-card-2)"
  };

  audioCoffeeShop.onpause = () => {
    isPlaying = false
    buttonCoffeeShop.style.background = ""
  };
}

function playAudioFireplace() {
  audioFireplace.loop = true

  isPlaying ? audioFireplace.pause() : audioFireplace.play()

  audioFireplace.onplaying = () => {
    isPlaying = true
    buttonFireplace.style.background = "var(--bg-card-2)"
  };

  audioFireplace.onpause = () => {
    isPlaying = false
    buttonFireplace.style.background = ""
  };
}

buttonForest.addEventListener('click', playAudioForest)
buttonRain.addEventListener('click', playAudioRain)
buttonCoffeeShop.addEventListener('click', playAudioCoffeeShop)
buttonFireplace.addEventListener('click', playAudioFireplace)


// volume ================================================
function forestVolume(volume) {
  audioForest.volume = volume / 100
}

function rainVolume(volume) {
  audioRain.volume = volume / 100
}

function coffeeShopVolume(volume) {
  audioCoffeeShop.volume = volume / 100
}

function fireplaceVolume(volume) {
  audioFireplace.volume = volume / 100
}

inputRangeForest.addEventListener('input', () => {
  forestVolume(inputRangeForest.value)
})

inputRangeStorm.addEventListener('input', () => {
  rainVolume(inputRangeStorm.value)
})

inputRangeCoffee.addEventListener('input', () => {
  coffeeShopVolume(inputRangeCoffee.value)
})

inputRangeFire.addEventListener('input', () => {
  fireplaceVolume(inputRangeFire.value)
})

// theme =================================================
const theme = Theme({
  buttonDarkTheme,
  buttonLightTheme,
  body
})

buttonLightTheme.addEventListener('click', () => {
  theme.toggleTheme()
  theme.toggleBodyClass()
})

buttonDarkTheme.addEventListener('click', () => {
  theme.toggleTheme()
  theme.toggleBodyClass()
})