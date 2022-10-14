import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonMore,
    buttonLess,
    buttonLightTheme,
    buttonDarkTheme,
    buttonForest,
    buttonRain,
    buttonCoffeeShop,
    buttonFireplace,
    inputRangeForest,
    inputRangeStorm,
    inputRangeCoffee,
    inputRangeFire
} from './elements.js'

export function Events({ controls, timer, theme, sound }) {
    
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

    
    buttonLightTheme.addEventListener('click', () => {
        theme.toggleTheme()
        theme.toggleBodyClass()
    })

    buttonDarkTheme.addEventListener('click', () => {
        theme.toggleTheme()
        theme.toggleBodyClass()
    })

    
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
}