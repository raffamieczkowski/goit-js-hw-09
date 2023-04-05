const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");

startButton.onclick = () => {
  startButton.disabled = true;
  stopButton.disabled = false;
  const intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  stopButton.onclick = () => {
    clearInterval(intervalId);
    startButton.disabled = false;
    stopButton.disabled = true;
  };
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}