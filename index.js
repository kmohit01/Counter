let count = 0;
document.querySelector(".decrease").onclick = function () {
    count -= 1;
    document.getElementById("value").innerHTML = count;
    if (count < 0) {
        document.getElementById("value").style.color = "red";
    }
}

document.querySelector(".increase").onclick = function () {
    count += 1;
    document.getElementById("value").innerHTML = count;
    if (count > 0) {
        document.getElementById("value").style.color = "green";
    }
}

document.querySelector(".reset").onclick = function () {
    // count === 0;
    count =0
    document.getElementById("value").innerHTML = count;
    if (count === 0) {
        document.getElementById("value").style.color = "black";
    }
}