const numbers = [
    { digit: '1', englishName: 'One', count: 1 },
    { digit: '2', englishName: 'Two', count: 2 },
    { digit: '3', englishName: 'Three', count: 3 },
    { digit: '4', englishName: 'Four', count: 4 },
    { digit: '5', englishName: 'Five', count: 5 },
    { digit: '6', englishName: 'Six', count: 6 },
    { digit: '7', englishName: 'Seven', count: 7 },
    { digit: '8', englishName: 'Eight', count: 8 },
    { digit: '9', englishName: 'Nine', count: 9 },
    { digit: '10', englishName: 'Ten', count: 10 }
];

const fruits = ['🍎', '🍌', '🍊', '🍓', '🍇'];
const vegetables = ['🍅', '🥒', '🥕', '🍆', '🧅'];

let currentIndex = 0;
let isFruit = true;

function initApp() {
    updateNumberDisplay();
    createProgressDots();
}

function updateNumberDisplay() {
    const currentNumber = numbers[currentIndex];
    document.querySelector('.number-display').textContent = currentNumber.digit;
    document.querySelector('.number-word').textContent = currentNumber.englishName;
    updateExamples(currentNumber.count);
    updateProgressDots();
}

function updateExamples(count) {
    const examplesContainer = document.getElementById('examples');
    examplesContainer.innerHTML = '';

    const items = isFruit ? fruits : vegetables;
    for (let i = 0; i < count; i++) {
        const exampleItem = document.createElement('div');
        exampleItem.className = 'example-item';
        exampleItem.textContent = items[i % items.length];
        examplesContainer.appendChild(exampleItem);
    }
}

function createProgressDots() {
    const progressContainer = document.getElementById('progress');
    progressContainer.innerHTML = '';

    for (let i = 0; i < numbers.length; i++) {
        const dot = document.createElement('div');
        dot.className = 'progress-dot';
        dot.onclick = function () {
            currentIndex = i;
            updateNumberDisplay();
        };
        progressContainer.appendChild(dot);
    }

    updateProgressDots();
}

function updateProgressDots() {
    const dots = document.querySelectorAll('.progress-dot');
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function nextNumber() {
    if (currentIndex < numbers.length - 1) {
        currentIndex++;
        updateNumberDisplay();
    }
}

function prevNumber() {
    if (currentIndex > 0) {
        currentIndex--;
        updateNumberDisplay();
    }
}

function playNumberSound() {
    if ('speechSynthesis' in window) {
        const currentNumber = numbers[currentIndex];
        const utterance = new SpeechSynthesisUtterance(currentNumber.englishName);
        utterance.lang = 'en-US';
        window.speechSynthesis.speak(utterance);
    } else {
        alert("Sorry, your browser does not support text-to-speech functionality.");
    }
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
        prevNumber();
    } else if (event.key === 'ArrowRight') {
        nextNumber();
    }
});

window.onload = initApp;
