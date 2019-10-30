const buttonCounter = document.getElementById("counter-button");
const counter = document.getElementById("counter");

function counterFunction () {
    let clickCount = 0;
    buttonCounter.addEventListener("click", () => {
        clickCount++
        counter.innerText = clickCount
    })
}
counterFunction();