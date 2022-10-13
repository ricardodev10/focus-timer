export function Sound({
    buttonPressAudio,
    kitchenTimerAudio
}) {

    function pressButton() {
        buttonPressAudio.volume = 0.02
        buttonPressAudio.play()
    }

    function timeEnd() {
        kitchenTimerAudio.volume = 0.05
        kitchenTimerAudio.play()
    }

    return {
        pressButton,
        timeEnd
    }
}