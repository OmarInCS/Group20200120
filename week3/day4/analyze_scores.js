
let marks = [];
for (let i = 0; i < 5; i++) {
    let m = parseInt(prompt("Enter student mark: "));
    marks.push(m);
}

let total = 0;
for (let m of marks) {
    total += m;
}

let avg = total / 5;
alert(`The Average is: ${avg}`);

let count = 0;
for (let m of marks) {
    if (m > avg) {
        count++;
    }
}

alert(`The #students above average is: ${count}`);