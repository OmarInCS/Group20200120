
let text = "Welcome to JS";
console.log(text[0]);
console.log(text.length);
console.log(text[text.length - 1]);
console.log(text.slice(0, 7));
console.log(text.toUpperCase());
console.log(text);
console.log(text.includes("e"));
console.log(text.includes("!"));
console.log(text.indexOf("e"));

for (let letter of text) {
    console.log(letter);
}

let marks = [];
console.log(typeof marks);
marks.push(15, 18, 22);
console.log(marks);
marks.push(13, 24);
console.log(marks);
marks.unshift(21);
console.log(marks);
// marks.pop()
// console.log(marks);
// marks.shift()
// console.log(marks);
console.log(marks[0]);
console.log(marks.length);
console.log(marks.slice(2));
console.log(marks.slice(1, 5));
console.log(marks.slice(0, 4));

let birthDate = "19/5/1992";
console.log(birthDate);
console.log(birthDate.split("/"));
console.log(marks.join("~"));
console.log(marks);

let best = 0;
for (let m of marks) {
    if (m > best) {
        best = m;
    }
}

console.log(`The best mark is: ${best}`);