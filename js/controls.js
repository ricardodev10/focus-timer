export function Controls({
    // injeção de dependências
    buttonPlay,
    buttonPause,
    minutesDisplay,
    secondsDisplay,
}) {

    function toggleButton() {
        buttonPlay.classList.toggle('hide')
        buttonPause.classList.toggle('hide')
    }

    function updateTimerDisplay(minutes, seconds) {
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }

    function addFiveMinutes() {
        if (Number(minutesDisplay.textContent) <= 55) {
            updateTimerDisplay(Number(minutesDisplay.textContent) + 5, 0)
        }
    }

    function removeFiveMinutes() {
        if (Number(minutesDisplay.textContent) >= 10) {
            updateTimerDisplay(Number(minutesDisplay.textContent) - 5, 0)
        }
    }

    return {
        toggleButton,
        updateTimerDisplay,
        addFiveMinutes,
        removeFiveMinutes
    }

}