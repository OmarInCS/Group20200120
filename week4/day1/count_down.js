
let time = 20;

let intervalId = setInterval(function () {
    let span = document.getElementById("time");
    let progress = document.getElementById("progress");

    if (time === 0) {
        alert("Registeration Closed");
        clearInterval(intervalId);
    }
    if (time === 10) {
        span.style.color = "red";
        span.style.fontWeight = "bold";
    }
    
    span.innerText = time--;
    progress.style.width = (20 - time) * 200 / 20 + "px";
}, 1000);