function criaLinhas(i, tabela) {
    let linha = document.createElement("tr");
    linha.id = i;
    tabela.appendChild(linha);
}
function criaColunas(i, j, arrayTabela) {
    let coluna = document.createElement("td");
    coluna.id = [i, j];
    let linha = document.getElementById(i);
    linha.appendChild(coluna);
    arrayTabela.push(coluna)
}

function criaTabela(linhasXColunas) {
    let arrayTabela = [];
    let tabelaContainer = document.querySelector(".container-tabela");
    let tabela = document.createElement("table");
    tabela.className = "tabela-pixel"
    tabela.style.borderSpacing = "0px"
    tabela.style.outline = "1px solid black"
    tabelaContainer.appendChild(tabela);
    for (let i = 0; i < linhasXColunas; i++) {
        criaLinhas(i, tabela);
        for (let j = 0; j < linhasXColunas; j++) {
            criaColunas(i, j, arrayTabela);
        }
    }
    document.querySelector('.container-tabela').style.minWidth = linhasXColunas * 40 + "px";
    return arrayTabela
}

let pixelArray = criaTabela(5)

let paletaCor = document.querySelectorAll(".btn-container");
function novaPaleta() {
    for (let cores of paletaCor) {
        cores.addEventListener("mouseover", function () {
            this.className += " ativa-hover";
        });
        cores.addEventListener("mouseleave", function () {
            if (this.className.includes("ativa-hover") && !(this.className.includes("ativa "))) {
                this.className = "btn-container";
            }
        });
        cores.addEventListener("click", function () {
            for (cor of paletaCor) {
                cor.className = "btn-container";
            }
            this.className += " ativa";
        })
    }
}
novaPaleta();

function pegaCores() {
    let paletaCor = document.querySelectorAll(".btn-container");
    for (let cor of paletaCor) {
        cor.addEventListener("click", function () {
            let corSelecionada = cor.childNodes;
            for (nodes of corSelecionada) {
                //Isto pois a ordem dos nodes gerada no carregamento
                //e depois da aleatorização estavam vindo diferentes.
               if (nodes.nodeName!="#text") {   
                    corAtual = getComputedStyle(nodes).backgroundColor;
                }
            }
        })
    }
}
function pintarTabela() {
    let pixelArray = document.querySelectorAll("td");
    for (pixel of pixelArray) {
        pixel.addEventListener("click", function () {
            this.style.backgroundColor = corAtual;
        })
    };
}
function funcaoPintar() {
    pegaCores();
    pintarTabela();
}
funcaoPintar();

function resetar(arrayTabela) {
    let reset = document.querySelector(".reset");
    reset.addEventListener("click", function () {
        for (pixel of arrayTabela) {
            pixel.style.backgroundColor = "white";
        }
    });
}
resetar(pixelArray)

function tamanhoCustomizado() {
    let inputTamanho = document.querySelector(".input-tamanho");
    inputTamanho.addEventListener("change", function () {
        if (inputTamanho.value >= 5 && inputTamanho.value <= 50) {
            document.querySelector(".tabela-pixel").remove();
            pixelArray = criaTabela(inputTamanho.value);
            funcaoPintar();
            coresAleatorias(pixelArray);
            resetar(pixelArray)
            let corAtiva = document.querySelector("[class*='ativa']")
            corAtiva.className = "btn-container"
            let paletaCor = document.querySelectorAll(".btn-container");
            paletaCor[0].className += " ativa"
        } else {
            alert("Valores permitidos: de 5 a 50.")
        }
    });
}
tamanhoCustomizado();

let btnAlien = document.querySelector(".btn-github");
btnAlien.addEventListener("click", gitHub);
function gitHub() {
    let pixelArray = document.querySelectorAll("td");
    let tamanhoTabela = Math.sqrt(pixelArray.length);
    let metadeTabela = tamanhoTabela / 2;
    for (let x = 0; x < tamanhoTabela; x++) {
        let alienY = Math.floor(Math.random() * (tamanhoTabela - metadeTabela));
        let alienPixel = document.getElementById(x + "," + alienY);
        alienPixel.style.backgroundColor = corAtual;
        let antiY = tamanhoTabela - 1 - alienY;
        let antiPixel = document.getElementById(x + "," + antiY);
        antiPixel.style.backgroundColor = corAtual;
    }
}
function corAleatoria(){
    let vermelho = Math.floor(Math.random()*256);
    let verde = Math.floor(Math.random()*256);
    let azul = Math.floor(Math.random()*256);
    let corPaletaAleatoria = "rgb("+vermelho+","+verde+","+azul+")";
    return corPaletaAleatoria
}

function aleatorizarPaleta(){
    let coresPaleta = document.querySelectorAll(".cores-paleta");
    for (cor of coresPaleta) {
        cor.remove();
    }
    for(let c = 1; c<=4; c++){
        let corPaletaAleatoria = corAleatoria();
        let novaCorAleatoria = document.createElement("div");
        novaCorAleatoria.className="cores-paleta";
        novaCorAleatoria.className+=" color"+c;
        novaCorAleatoria.style.backgroundColor=corPaletaAleatoria;
        let containerCor = document.getElementById("color"+c);
        containerCor.appendChild(novaCorAleatoria);
    }  
    coresAleatorias(pixelArray)
}    

function botaoAleatorizar() {
let btnAleatorizar=document.querySelector(".btn-aleatorizar");
btnAleatorizar.addEventListener("click", aleatorizarPaleta);
}
botaoAleatorizar();

function coresAleatorias(arrayTabela) {
    let paletaCor = document.querySelectorAll(".cores-paleta");
    for (pixels of arrayTabela) {
        for (let cor of paletaCor) {
            let idRandom = (Math.floor(Math.random() * 4) + 1);
            let corSelecionada = document.querySelector(".cores-paleta.color"+idRandom);
            let corAtual = getComputedStyle(corSelecionada).backgroundColor;
            pixels.style.backgroundColor = corAtual;
        }
    }
    corAtual = "black";
}
coresAleatorias(pixelArray);
