function criaTabela(n) {
    let tabela = document.querySelector(".pixel-table");
        tableArray=[];
        for (let i = 0; i<n ; i++) {
            let linha = document.createElement("tr");
            tabela.appendChild(linha);
            for (let j = 0; j<n ; j++){
                let celula = document.createElement("td");
                let novaLinha = linha.appendChild(celula);
                novaLinha.id=[i,j];
                tableArray.push(novaLinha)
            }
        }
        document.querySelector('.container-table').style.minWidth=n*40+"px";
        console.log(tableArray)
}
criaTabela(7)

//atribuindo função à paleta, que armazena a cor numa variavel

    let paletaCor = document.querySelectorAll(".paleta-colors"),
    corAtual=undefined;
    for (let cores of paletaCor) {
        console.log(cores);
        cores.addEventListener("click", function () {
            console.log(getComputedStyle(this).backgroundColor)
            corAtual = getComputedStyle(this).backgroundColor;
        })
    }

//atribuindo função de pintar a tabela de pixel

    for (pixel of tableArray) {
        console.log(pixel)
        pixel.addEventListener("click", function() {
            this.style.backgroundColor=corAtual;
        })
    };