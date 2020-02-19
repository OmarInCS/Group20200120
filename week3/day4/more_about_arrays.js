
// let x = 5;
// let y = x;
// y += 3;
// console.log(x);
// console.log(y);

let x = [10, 20, 30];
let y = x;
let z = [];
for (let value of x) {
    z.push(value);
}

y[1] += 3;
console.log(x);
console.log(y);
console.log(z);