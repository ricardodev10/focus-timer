export function Sound({
    buttonPressAudio,
}) {
    
    function pressButton() {
        buttonPressAudio.volume = 0.02
        buttonPressAudio.play()
    }

    return {
        pressButton
    }
}