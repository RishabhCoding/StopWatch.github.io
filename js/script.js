window.onload = function () {
    var minutes = 00
    var seconds = 00
    var tens = 00

    const appendMinutes = document.getElementById('minutes')
    const appendSeconds = document.getElementById('seconds')
    const appendTens = document.getElementById('tens')

    const buttonStart = document.getElementById('start-button')
    const buttonPause = document.getElementById('pause-button')
    const buttonReset = document.getElementById('reset-button')

    buttonStart.onclick = function () {
        Interval = setInterval(startTimer, 10)
    }

    buttonPause.onclick = function () {
        clearInterval(Interval)
    }

    buttonReset.onclick = function () {
        clearInterval(Interval)
        minutes = 00
        seconds = 00
        tens = 00

        appendMinutes.innerHTML = '0' + minutes
        appendSeconds.innerHTML = '0' + seconds
        appendTens.innerHTML = '0' + tens
    }

    function startTimer() {
        tens++
        if (tens <= 9) {
            appendTens.innerHTML = '0' + tens
        }

        if (tens > 9) {
            appendTens.innerHTML = tens
        }

        if (tens > 99) {
            seconds++
            appendSeconds.innerHTML = '0' + seconds
            tens = 0
            appendTens.innerHTML = '0' + tens
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds
        }

        if (seconds > 59) {
            minutes++
            appendMinutes.innerHTML = '0' + minutes
            seconds = 0
            appendSeconds.innerHTML = '0' + seconds
        }

        if (minutes > 9) {
            appendMinutes.innerHTML = minutes
        }
    }
}