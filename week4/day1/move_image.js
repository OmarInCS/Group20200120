
function moveImageLeft() {
    let image = document.getElementById("image");
    image.style.left = -20 + "px";
}

function moveImageRight() {
    let image = document.getElementById("image");
    image.style.left = 0 + "px";
}

document.getElementById("box").onmouseover = moveImageLeft;
document.getElementById("box").onmouseout = moveImageRight;