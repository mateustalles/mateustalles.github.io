let radioButtons = document.querySelectorAll(".radio");
let buttonSubmit = document.querySelector(".submit");
let pollResult = document.querySelector(".poll-result")

buttonSubmit.addEventListener("click", buttonAction);

function buttonAction(event) {
    event.preventDefault();
    for (let radio of radioButtons) {
        if (radio.checked) {
            let textLabel = radio.parentNode.innerText;
            pollResult.innerHTML = "<br><strong>A seção que você mais gostou é: " + textLabel +"!! Obrigado por participar.</strong><br><br>";
        }
        radio.addEventListener("click", normalizeRadioSelection);
    }
}

function normalizeRadioSelection() {
    for (let radio of radioButtons) {
        if (radio.checked) {
            radio.checked = false;
        }
        this.checked = true;
    }
}
