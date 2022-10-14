import { Controls } from './controls.js'
import { Sound } from './sounds.js'
import { Theme } from './theme.js'
import { Timer } from './timer.js'

const buttonPlay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")
const buttonStop = document.querySelector(".stop")
const buttonMore = document.querySelector(".more")
const buttonLess = document.querySelector(".less")

const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
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
const buttonForest = document.querySelector(".button-forest")
const buttonRain = document.querySelector(".button-rain")
const buttonCoffeeShop = document.querySelector(".button-coffee-shop")
const buttonFireplace = document.querySelector(".button-fireplace")

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

// sounds functions ======================================
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

// sounds events =========================================
buttonForest.addEventListener('click', playAudioForest)
buttonRain.addEventListener('click', playAudioRain)
buttonCoffeeShop.addEventListener('click', playAudioCoffeeShop)
buttonFireplace.addEventListener('click', playAudioFireplace)


// volume ================================================
const inputRangeForest = document.querySelector('#sounds .forest input')
const inputRangeStorm = document.querySelector('#sounds .rain input')
const inputRangeCoffee = document.querySelector('#sounds .coffee-shop input')
const inputRangeFire = document.querySelector('#sounds .fireplace input')

// volume functions ======================================
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

// volume events =========================================
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
const body = document.querySelector("body")
const buttonLightTheme = document.querySelector('.light-theme')
const buttonDarkTheme = document.querySelector('.dark-theme')

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