    let timer;
    let seconds = 0, minutes = 0, hours = 0;
    let isRunning = false;

    function updateDisplay() {
      let h = hours < 10 ? "0" + hours : hours;
      let m = minutes < 10 ? "0" + minutes : minutes;
      let s = seconds < 10 ? "0" + seconds : seconds;
      document.getElementById("display").innerText = `${h}:${m}:${s}`;
    }

    function start() {
      if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
          seconds++;
          if (seconds === 60) {
            seconds = 0;
            minutes++;
          }
          if (minutes === 60) {
            minutes = 0;
            hours++;
          }
          updateDisplay();
        }, 1000);
      }
    }

    function pause() {
      isRunning = false;
      clearInterval(timer);
    }

    function reset() {
      isRunning = false;
      clearInterval(timer);
      seconds = 0;
      minutes = 0;
      hours = 0;
      updateDisplay();
    }