export function Timer({
    minutesDisplay,
    secondsDisplay,
    minutes
}) {

    let timerTimeout

    function countdown() {
        timerTimeout = setTimeout(() => {
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)

            updateDisplay(minutes, 0)

            if (minutes <= 0) {
                sound.timeEnd()
                return
            }

            if (seconds <= 0) {
                seconds = 60
                --minutes
            }

            updateDisplay(minutes, String(seconds - 1))

            countdown()
        }, 1000)
    }

    function updateDisplay(minutes, seconds) {
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }

    function reset() {
        updateDisplay(minutes, 0)
        clearTimeout(timerTimeout)
    }

    function addFiveMinutes() {
        if (Number(minutesDisplay.textContent) <= 55) {
            updateDisplay(Number(minutesDisplay.textContent) + 5, 0)
        }
    }

    function removeFiveMinutes() {
        if (Number(minutesDisplay.textContent) >= 10) {
            updateDisplay(Number(minutesDisplay.textContent) - 5, 0)
        }
    }

    function hold() {
        clearTimeout(timerTimeout)
    }

    return {
        countdown,
        updateDisplay,
        reset,
        addFiveMinutes,
        removeFiveMinutes,
        hold
    }
}