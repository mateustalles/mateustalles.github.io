var el = document.querySelector(".box");

el.addEventListener("click", clickedBox, false);
let counter = 0

function clickedBox(evt) {
    console.log("clicked on box.")

    counter++
    this.className = `box box${counter}`
    counter === 4 ? counter = 0 : counter
}