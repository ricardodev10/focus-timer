import { Controls } from './controls.js'
import { Timer } from './timer.js'
import { Theme } from './theme.js'
import { Sound } from './sounds.js'
import { Events } from './events.js'
import {
  buttonPlay,
  buttonPause,
  minutesDisplay,
  secondsDisplay,
  body,
  buttonLightTheme,
  buttonDarkTheme
} from './elements.js'

// factory
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

Events({ controls, timer, theme, sound })