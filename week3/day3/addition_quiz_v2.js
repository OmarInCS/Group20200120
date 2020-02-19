let x = parseInt(Math.random() * 10);
let y = parseInt(Math.random() * 10);
let answer = parseInt(prompt(`What's ${x} + ${y} ?`));
let score = 0;

while (answer === x+y) {
    score += 10;
    x = parseInt(Math.random() * 10);
    y = parseInt(Math.random() * 10);
    answer = parseInt(prompt(`What's ${x} + ${y} ?`));
}

alert("Game Over!\nYou Score: " + score);