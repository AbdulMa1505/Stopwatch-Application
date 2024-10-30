const startStopBtn = document.querySelector('#startStopBtn'); 
const resetBtn = document.querySelector('#resetBtn');

// Variables for time values
let seconds = 0;
let minutes = 0;
let hours = 0;

// Variables for leading zeros
let leadingSeconds = "00";
let leadingMinutes = "00";
let leadingHours = "00";

// Variable for setting interval and timer status
let timerInterval = null;
let timerStatus = "stopped";

// Stopwatch function
function StopWatch() {
    seconds++;
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    // Add leading zeros
    leadingSeconds = seconds < 10 ? "0" + seconds : seconds;
    leadingMinutes = minutes < 10 ? "0" + minutes : minutes;
    leadingHours = hours < 10 ? "0" + hours : hours;

    // Display updated time
    document.getElementById('timer').innerHTML = `${leadingHours}:${leadingMinutes}:${leadingSeconds}`;
}

// Start/Stop Button
startStopBtn.addEventListener('click', function() {
    if (timerStatus === "stopped") {
        timerInterval = window.setInterval(StopWatch, 1000);
        document.getElementById('startStopBtn').innerHTML = '<i class="fa-solid fa-pause" id="pause"></i>';
        timerStatus = "started";  // Update timer status
    } else {
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = '<i class="fa-solid fa-play" id="play"></i>';
        timerStatus = "stopped";  // Update timer status
    }
});

// Reset Button
resetBtn.addEventListener('click', function() {
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('timer').innerHTML = "00:00:00";
    document.getElementById('startStopBtn').innerHTML = '<i class="fa-solid fa-play" id="play"></i>';
    timerStatus = "stopped"; 
});
