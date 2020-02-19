
let n = parseInt(prompt("How many questions?"));
let correct = 0; 

for (let i = 0; i < n; i++) {
    let x = parseInt(Math.random() * 10);
    let y = parseInt(Math.random() * 10);
    let answer = parseInt(prompt(`${i+1}) What's ${x} + ${y} ?`));
    
    if (answer === x+y) {
        alert("Correct Answer");
        correct++;
    }
    else {
        alert("Wrong Answer");
    }
}

// alert(i);
alert(`You score: ${correct} out of ${n}`);
