var red = document.querySelector('div#loader .red');
var blue = document.querySelector('div#loader .blue');
var green = document.querySelector('div#loader .green');

function randomColor() {
    return '#'+Math.random().toString(16).substr(-6);
}

let timeRed = setInterval(() => red.style.backgroundColor = randomColor(), 2000)
let timeGreen = setInterval(() => green.style.backgroundColor = randomColor(), 3000)
let timeBlue = setInterval(() => blue.style.backgroundColor = randomColor(), 4000)

var loader = document.getElementById("loader");
var button = document.getElementById("button");

button.addEventListener("click", function() {
    if ( loader.className === "loading" ) {
        loader.className="";
        clearInterval(timeRed)
        clearInterval(timeGreen)
        clearInterval(timeBlue)
    } else {
        loader.className="loading";
        timeRed = setInterval(() => red.style.backgroundColor = randomColor(), 2000)
        timeGreen = setInterval(() => green.style.backgroundColor = randomColor(), 3000)
        timeBlue = setInterval(() => blue.style.backgroundColor = randomColor(), 4000)
    }
})

class Timer {
    constructor (callback, time) {
        this.timeId = setInterval (callback, time)
    }

    clear() {
        clearInterval (this.timeId)
    }
}