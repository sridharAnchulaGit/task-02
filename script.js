let startTime;
let updatedTime;
let difference;
let timerInterval;
let running = false;

const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

const hoursSpan = document.getElementById('hours');
const minutesSpan = document.getElementById('minutes');
const secondsSpan = document.getElementById('seconds');
const millisecondsSpan = document.getElementById('milliseconds');

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

function startTimer() {
    if (!running) {
        startTime = new Date().getTime();
        timerInterval = setInterval(updateTimer, 10);
        running = true;
    }
}

function pauseTimer() {
    if (running) {
        clearInterval(timerInterval);
        running = false;
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    running = false;
    hoursSpan.textContent = "00";
    minutesSpan.textContent = "00";
    secondsSpan.textContent = "00";
    millisecondsSpan.textContent = "000";
}

function updateTimer() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((difference % 1000));

    hoursSpan.textContent = pad(hours, 2);
    minutesSpan.textContent = pad(minutes, 2);
    secondsSpan.textContent = pad(seconds, 2);
    millisecondsSpan.textContent = pad(milliseconds, 3);
}

function pad(number, length) {
    let str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}
