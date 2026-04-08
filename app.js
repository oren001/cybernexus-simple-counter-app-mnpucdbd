let counter = 0;

const counterDisplay = document.getElementById('counter-display');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');

function updateDisplay() {
  counterDisplay.textContent = counter;
  
  if (counter > 0) {
    counterDisplay.classList.add('positive');
    counterDisplay.classList.remove('negative');
  } else if (counter < 0) {
    counterDisplay.classList.add('negative');
    counterDisplay.classList.remove('positive');
  } else {
    counterDisplay.classList.remove('positive', 'negative');
  }
}

function increment() {
  counter++;
  updateDisplay();
}

function decrement() {
  counter--;
  updateDisplay();
}

function reset() {
  counter = 0;
  updateDisplay();
}

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
resetBtn.addEventListener('click', reset);

updateDisplay();