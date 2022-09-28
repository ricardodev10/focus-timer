/*
import Sounds from "./sounds.js"
const sound = Sounds()
*/

// controls ==============================================
const buttonPlay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")
const buttonStop = document.querySelector(".stop")
const buttonMore = document.querySelector(".more")
const buttonLess = document.querySelector(".less")
let timerTimeout;

const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
let minutes = Number(minutesDisplay.textContent)

// controls functions ====================================
function countdown() {
  timerTimeout = setTimeout(() => {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateTimerDisplay(minutes, 0)

    if (minutes <= 0) {
      timeEnd()
      return
    }

    if (seconds <= 0) {
      seconds = 60
      --minutes
    }

    updateTimerDisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
}

function toggleButton() {
  buttonPlay.classList.toggle('hide')
  buttonPause.classList.toggle('hide')
}

function addFiveMinutes() {
  if (Number(minutesDisplay.textContent) <= 55) {
    updateTimerDisplay(Number(minutesDisplay.textContent) + 5, 0)
  }

  pressButton()
}

function removeFiveMinutes() {
  if (Number(minutesDisplay.textContent) >= 5) {
    updateTimerDisplay(Number(minutesDisplay.textContent) - 5, 0)
  }

  pressButton()
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function resetTimer() {
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeout)
}

// controls events =======================================
buttonMore.addEventListener('click', addFiveMinutes)
buttonLess.addEventListener('click', removeFiveMinutes)

buttonPlay.addEventListener('click', () => {
  toggleButton()
  countdown()
  pressButton()
})

buttonPause.addEventListener('click', () => {
  toggleButton()
  clearTimeout(timerTimeout)
  pressButton()
})

buttonStop.addEventListener('click', () => {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  resetTimer()
  pressButton()
})


// sounds ================================================
const buttonForest = document.querySelector(".forest")
const buttonRain = document.querySelector(".rain")
const buttonCoffeeShop = document.querySelector(".coffee-shop")
const buttonFireplace = document.querySelector(".fireplace")

const buttonPressAudio = new Audio("./sounds/Button-press.wav")
const kitchenTimer = new Audio("./sounds/Kitchen-timer.mp3")

const audioForest = new Audio("./sounds/Floresta.mp3")
const audioRain = new Audio("./sounds/Chuva.mp3")
const audioCoffeeShop = new Audio("./sounds/Cafeteria.mp3")
const audioFireplace = new Audio("./sounds/Lareira.mp3")

// sounds functions ======================================
let isPlaying = false

function pressButton() {
  buttonPressAudio.play()
}

function timeEnd() {
  kitchenTimer.play()
}

function playAudioForest() {
  audioForest.loop = true

  isPlaying ? audioForest.pause() : audioForest.play()

  audioForest.onplaying = () => {
    isPlaying = true
    buttonForest.style.background = "var(--bg-card-2)"
  };

  audioForest.onpause = () => {
    isPlaying = false
    buttonForest.style.background = "var(--bg-card-1)"
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
    buttonRain.style.background = "var(--bg-card-1)"
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
    buttonCoffeeShop.style.background = "var(--bg-card-1)"
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
    buttonFireplace.style.background = "var(--bg-card-1)"
  };
}

// sounds events =========================================
buttonForest.addEventListener('click', playAudioForest)
buttonRain.addEventListener('click', playAudioRain)
buttonCoffeeShop.addEventListener('click', playAudioCoffeeShop)
buttonFireplace.addEventListener('click', playAudioFireplace)