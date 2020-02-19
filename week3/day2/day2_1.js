let x;
let y;

function checkAnswer() {
    let answer = document.getElementById("tf-answer").value;
    let resultDiv = document.getElementById("result");
    if (answer == x+y) {
        resultDiv.innerText = "Correct";
        // resultDiv.innerHTML += '<br><img src="happy.jpg" alt="">';
        let img = document.createElement("img");
        img.setAttribute("src", "happy.jpg");
        resultDiv.append(img);
        document.getElementById("tf-answer").style.backgroundColor = "green";
    }
    else {
        resultDiv.innerText = "Wrong";
        resultDiv.innerHTML += '<br><img src="sad.jpg" alt="">';
        document.getElementById("tf-answer").style.backgroundColor = "red";
    }
}

function newQuestion() {
    x = parseInt(Math.random() * 10);
    y = parseInt(Math.random() * 10);
    document.getElementById("question").innerText = `What's ${x} + ${y} ?`;
    document.getElementById("result").innerText = "";
}

document.getElementById("bt-check").onclick = checkAnswer;
document.getElementById("bt-new").onclick = newQuestion;