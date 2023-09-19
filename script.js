let timerDisplay = document.querySelector('.timerDisplay');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');

let msec = 0;
let secs = 0;
let mins = 0;
let timerId = null;

startBtn.addEventListener('click', function () {
    if (timerId === null) {
        timerId = setInterval(updateTimer, 10);
    }
});

stopBtn.addEventListener('click', function () {
    clearInterval(timerId);
    timerId = null;
});

resetBtn.addEventListener('click', function () {
    clearInterval(timerId);
    timerId = null;
    updateDisplay(0, 0, 0);
});

function updateTimer() {
    msec++;
    if (msec === 100) {
        msec = 0;
        secs++;
        if (secs === 60) {
            secs = 0;
            mins++;
        }
    }
    updateDisplay(mins, secs, msec);
}

function updateDisplay(minutes, seconds, milliseconds) {
    let msecString = milliseconds.toString().padStart(2, '0');
    let secsString = seconds.toString().padStart(2, '0');
    let minsString = minutes.toString().padStart(2, '0');
    timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
}