// script.js

const symbols = ['🍒', '🍋', '🔔', '⭐', '🍉'];
let points = 0;

const reels = [
    document.getElementById('reel1'),
    document.getElementById('reel2'),
    document.getElementById('reel3')
];

document.getElementById('spin-button').addEventListener('click', spinReels);
document.getElementById('reset-button').addEventListener('click', resetGame);

function spinReels() {
    let result = [];
    const spinTime = 2000;
    const interval = 100;

    reels.forEach(reel => {
        let currentSpin = 0;
        const spinInterval = setInterval(() => {
            currentSpin++;
            const randomIndex = Math.floor(Math.random() * symbols.length);
            reel.textContent = symbols[randomIndex];
        }, interval);

        setTimeout(() => {
            clearInterval(spinInterval);
            const finalIndex = Math.floor(Math.random() * symbols.length);
            reel.textContent = symbols[finalIndex];
            result.push(symbols[finalIndex]);

            if (result.length === reels.length) {
                evaluateResult(result);
            }
        }, spinTime);
    });
}

function evaluateResult(result) {
    const uniqueSymbols = new Set(result);

    if (uniqueSymbols.size === 1) {
        points += 100; // 3 matching symbols
        alert('You won 100 points!');
    } else if (uniqueSymbols.size === 2) {
        points += 50; // 2 matching symbols
        alert('You won 50 points!');
    } else {
        alert('No match, try again!');
    }

    document.getElementById('points-display').textContent = `Points: ${points}`;
}

function resetGame() {
    points = 0;
    reels.forEach(reel => reel.textContent = symbols[Math.floor(Math.random() * symbols.length)]);
    document.getElementById('points-display').textContent = `Points: ${points}`;
}
