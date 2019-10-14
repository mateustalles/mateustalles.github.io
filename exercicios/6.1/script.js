window.addEventListener("load", function() {
    adicionaEstados();
    checarData();
});

function adicionaEstados() {
let campoEstados = document.getElementById("campo-estados");
let listaEstados = [{
    name: " ",
    value: "n/a"
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

function checarData() {
    let botaoSubmit = document.getElementById("botao-submit")
    let campoData = document.getElementById("campo-data-inicio")
    let dataStatus = document.querySelector(".data-status")
    campoData.addEventListener("change", function() {
    let stringData = campoData.value.split("/");
    if ( stringData[0] > 0 && stringData[0] <= 31 &&
        stringData[1] > 1 && stringData[1] <= 12 &&
                stringData[2] > 0) {
                dataStatus.style.visibility = "hidden";
                botaoSubmit.disabled = false;
                return true;
            } else {
                dataStatus.style.visibility = "visible";
                botaoSubmit.disabled = true;
                return false;
            }
    });
}

