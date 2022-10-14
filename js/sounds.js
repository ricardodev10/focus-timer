import {
    buttonForest,
    buttonRain,
    buttonCoffeeShop,
    buttonFireplace
} from "./elements.js"

export function Sound() {
    const buttonPressAudio = new Audio("./sounds/Button-press.wav")
    const kitchenTimerAudio = new Audio("./sounds/Kitchen-timer.mp3")

    const audioForest = new Audio("./sounds/Floresta.mp3")
    const audioRain = new Audio("./sounds/Chuva.mp3")
    const audioCoffeeShop = new Audio("./sounds/Cafeteria.mp3")
    const audioFireplace = new Audio("./sounds/Lareira.mp3")

    let isPlaying = false

    function pressButton() {
        buttonPressAudio.volume = 0.02
        buttonPressAudio.play()
    }

    function timeEnd() {
        kitchenTimerAudio.volume = 0.05
        kitchenTimerAudio.play()
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

    return {
        buttonPressAudio,
        kitchenTimerAudio,
        audioForest,
        audioRain,
        audioCoffeeShop,
        audioFireplace,
        pressButton,
        timeEnd,
        playAudioForest,
        playAudioRain,
        playAudioCoffeeShop,
        playAudioFireplace,
        forestVolume,
        rainVolume,
        coffeeShopVolume,
        fireplaceVolume
    }
}