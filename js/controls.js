export function Controls({
    buttonPlay,
    buttonPause
}) {

    function toggleButton() {
        buttonPlay.classList.toggle('hide')
        buttonPause.classList.toggle('hide')
    }

    return {
        toggleButton
    }

}