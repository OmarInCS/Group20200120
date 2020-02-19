// Comparisone Operators:
// >, >=, <, <=, ==, !=, ===, !==

// let x = 5;
// let y = "5";
// console.log(x == y);
// console.log(x === y);

// let x = 0;
// x = "";
// x = "Ahmed";
// x = [];
// let y;
// if (y) {
//     console.log("I'm True");
// }
// else {
//     console.log("I'm False");
// }


// let showGrade = function () {
//     let mark = document.getElementById("tf-mark").value;
//     let finalMark = document.getElementById("tf-final-mark").value;
//     let pct = mark / finalMark * 100;
//     let divResult = document.getElementById("result");
//     if (pct > 85) {
//         divResult.innerHTML = `<h3>Excellent ${pct}</h3><img src="happy.jpg" alt="">`
//     }
//     else if (pct > 75) {
//         divResult.innerHTML = `<h3>V. Good ${pct}</h3><img src="happy.jpg" alt="">`
//     }
//     else if (pct > 65) {
//         divResult.innerHTML = `<h3>Good ${pct}</h3><img src="happy.jpg" alt="">`
//     }
//     else if (pct >= 50) {
//         divResult.innerHTML = `<h3>Pass ${pct}</h3><img src="meh.jpg" alt="">`
//     }
//     else {
//         divResult.innerHTML = `<h3>Fail ${pct}</h3><img src="sad.jpg" alt="">`
//     }
// }

let showGrade = () => {
    let mark = document.getElementById("tf-mark").value;
    let finalMark = document.getElementById("tf-final-mark").value;
    let pct = mark / finalMark * 100;
    let divResult = document.getElementById("result");
    if (pct > 85) {
        divResult.innerHTML = `<h3>Excellent ${pct}</h3><img src="happy.jpg" alt="">`
    }
    else if (pct > 75) {
        divResult.innerHTML = `<h3>V. Good ${pct}</h3><img src="happy.jpg" alt="">`
    }
    else if (pct > 65) {
        divResult.innerHTML = `<h3>Good ${pct}</h3><img src="happy.jpg" alt="">`
    }
    else if (pct >= 50) {
        divResult.innerHTML = `<h3>Pass ${pct}</h3><img src="meh.jpg" alt="">`
    }
    else {
        divResult.innerHTML = `<h3>Fail ${pct}</h3><img src="sad.jpg" alt="">`
    }
}

// function showGrade() {
//     let mark = document.getElementById("tf-mark").value;
//     let finalMark = document.getElementById("tf-final-mark").value;
//     let pct = mark / finalMark * 100;
//     let divResult = document.getElementById("result");
//     if (pct > 85) {
//         divResult.innerHTML = `<h3>Excellent ${pct}</h3><img src="happy.jpg" alt="">`
//     }
//     else if (pct > 75) {
//         divResult.innerHTML = `<h3>V. Good ${pct}</h3><img src="happy.jpg" alt="">`
//     }
//     else if (pct > 65) {
//         divResult.innerHTML = `<h3>Good ${pct}</h3><img src="happy.jpg" alt="">`
//     }
//     else if (pct >= 50) {
//         divResult.innerHTML = `<h3>Pass ${pct}</h3><img src="meh.jpg" alt="">`
//     }
//     else {
//         divResult.innerHTML = `<h3>Fail ${pct}</h3><img src="sad.jpg" alt="">`
//     }
// }

document.getElementById("bt-get-grade").onclick = showGrade;