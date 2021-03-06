window.addEventListener("load", function() {
    adicionaEstados();
});
window.DatePickerX.setDefaults({ format : 'dd/mm/yyyy' })

let formulario = document.querySelector(".formulario");

new window.JustValidate('.js-form', {
       messages: {
           text: {           
               required: 'Cê num preencheu porra!'
           },
        },
        Rules: {
            text: {
                required: true,
                minLength: 5,
                maxLength: 300
            }
        }
    });

function adicionaEstados() {
let campoEstados = document.getElementById("campo-estados");
let listaEstados = [{
    name: " ",
    value: ""
}, {
    name: "Acre",
    value: "ac"
}, {
    name: "Alagoas",
    value: "al"
}, {
    name: "Amapá",
    value: "ap"
}, {
    name: "Amazonas",
    value: "am"
}, {
    name: "Bahia",
    value: "ba"
}, {
    name: "Ceará",
    value: "ce"
}, {
    name: "Distrito Federal",
    value: "df"
}, {
    name: "Espírito Santo",
    value: "es"
}, {
    name: "Goiás",
    value: "go"
}, {
    name: "Maranhão",
    value: "ma"
}, {
    name: "Mato Grosso",
    value: "mt"
}, {
    name: "Mato Grosso do Sul",
    value: "ms"
}, {
    name: "Minas Gerais",
    value: "mg"
}, {
    name: "Pará",
    value: "pa"
}, {
    name: "Paraíba",
    value: "pb"
}, {
    name: "Paraná",
    value: "pr"
}, {
    name: "Pernambuco",
    value: "pe"
}, {
    name: "Piauí",
    value: "pi"
}, {
    name: "Rio de Janeiro",
    value: "rj"
}, {
    name: "Rio Grande do Norte",
    value: "rn"
}, {
    name: "Rio Grande do Sul",
    value: "rs"
}, {
    name: "Rondônia",
    value: "ro"
}, {
    name: "Roraima",
    value: "rr"
}, {
    name: "Santa Catarina",
    value: "sc"
}, {
    name: "São Paulo",
    value: "sp"
}, {
    name: "Sergipe",
    value: "se"
}, {
    name: "Tocantins",
    value: "to"
}];
    for (let estado of listaEstados) {
        let criaEstado = document.createElement("option");
        criaEstado.innerText = estado.name;
        criaEstado.value = estado.value;
        campoEstados.appendChild(criaEstado);
    }
}

let botaoSubmit = document.getElementById("botao-submit")
let campoData = document.getElementById("campo-data-inicio").DatePickerX.init();

function statusInvalida() {
    dataStatus.style.visibility = "visible";
    botaoSubmit.disabled = true;
    return false;
};


let botaoBloquearFluxo = document.querySelector("#botao-bloqueio");

botaoBloquearFluxo.addEventListener("click", function(event) {
        for (let campos of formulario.elements) {
            campos.addEventListener("click", function(event){
            event.preventDefault()
       });
    }
});

let botaoValidacao = document.querySelector("#botao-validacao");
let inputsVazios = "";

botaoValidacao.addEventListener("click", function() {
    for (let campo of formulario.elements) {
            if (campo.innerHTML == "") {
                inputsVazios += " " + campo.name;
            }
        }
        alert(inputsVazios + "precisam ser preenchidos.");
        return false;
});

let botaoShowValidation = document.getElementById("botao-mostra-validacao");
let validatedData = document.querySelector(".validated-data");
let allLabels = document.getElementsByTagName("label");
let labelForArray = [];
let span = document.createElement("span");
for (let label of allLabels) {
    labelForArray.push(label.htmlFor);
}
let labelIndex;

function displayValidatedData() {
    clear();
    for (let campo of formulario.elements) {
        if ( ( campo.type == "text" || campo.tagName == "TEXTAREA" ||
         campo.checked || campo.tagName == "SELECT" ) && campo.checkValidity() ) {
            labelIndex = labelForArray.indexOf(labelForArray.find(function(item) { return item == campo.id }))
            span;
            span.innerHTML += "=> " + allLabels[labelIndex].innerHTML + ": " + campo.value + "<br>";
            validatedData.appendChild(span);
            }
        }
    }
botaoShowValidation.addEventListener("click", displayValidatedData);

function clear() {
    span = document.createElement("span");
    if ( validatedData.hasChildNodes() ) {
        validatedData.removeChild(validatedData.childNodes[0]);
    };
}

let botaoClear = document.getElementById("botao-clear");

botaoClear.addEventListener("click", function() {
    clear();
    formulario.reset();
});
