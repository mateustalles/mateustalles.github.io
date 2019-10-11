function interacaoSelecao() {
    let divBolinha = document.querySelectorAll(".btn-container");
    for (let divs of divBolinha) {
        divs.addEventListener("mouseover", function() {
            this.className += " active-hover";
        });
        divs.addEventListener("mouseleave", function() {
            if(this.className.includes("active-hover") && !(this.className.includes("active ")) ) {
                this.className = "btn-container";   
            }         
        }); 
        
        divs.addEventListener("click", function () {
            for (let div of divBolinha) {
                div.className = "btn-container";
            }
            this.className += " active";
        })
    }
}
interacaoSelecao();

function corAleatoria() {
    let vermelhoRGB = Math.floor(Math.random()*256);
    let verdeRGB = Math.floor(Math.random()*256);
    let azulRGB = Math.floor(Math.random()*256);
    let corAleatoria = "rgb("+vermelhoRGB+","+verdeRGB+","+azulRGB+")";
    return corAleatoria;
}

function atribuiCor() {
    let bolinhas = document.querySelectorAll(".bolinha");
    for (let bola of bolinhas) {
        let novaCorAleatoria = corAleatoria();
        bola.style.backgroundColor = novaCorAleatoria;
    }
}
atribuiCor();

function pegaBolinhaAleatoria() {
    let numeroBola = Math.floor((Math.random()*6)+1);
    let containerCor = document.querySelector(".nova-cor");
    let novaCor = document.createElement("h3");
    novaCor.className = "cor-aleatoria";
    containerCor.appendChild(novaCor);
    let idRandom = "cor"+numeroBola;
    let bolaRandom = document.getElementById(idRandom);
    let rgbColor = bolaRandom.style.backgroundColor
    document.querySelector(".cor-aleatoria").innerHTML = rgbColor;
    return rgbColor;
}
pegaBolinhaAleatoria();

let bolinhas = document.getElementsByClassName("bolinha");
let containerResultado = document.querySelector(".resultado");
let msgResultado = document.createElement("h2");  
msgResultado.className = "status";
containerResultado.appendChild(msgResultado);
function erroAcerto() {
     for (let bola of bolinhas) {
         bola.removeEventListener("click",condicionalErroAcerto);
         bola.addEventListener("click", condicionalErroAcerto);
     }
 }
 function condicionalErroAcerto() {
    let corDaVez = document.querySelector(".cor-aleatoria").innerHTML;
    let alterarResultado = document.querySelector(".status");
        if (this.style.backgroundColor == corDaVez) {
            alterarResultado.innerHTML = "ACERTÔ MISERAVI!!!!";
            acerto();
            reset();
        } else {
            alterarResultado.innerHTML = "TÁ QUASE ADIVINHANDO...";
            erro();
        }
    }
erroAcerto();

let botaoResetar = document.querySelector(".btn-resetar");
function reset() {
    atribuiCor();
    pegaBolinhaAleatoria();
    limparSelecao();
    atualizaPlacar();
};

function limparSelecao() {
    let divBolinha = document.querySelectorAll(".btn-container");
    for (let div of divBolinha) {
        div.className = "btn-container";
    };
}
botaoResetar.addEventListener("click", function() {
    reset();
    scoreReset();
});

let score = 0;
let placarStatus = "";
let alterarResultado = document.querySelector(".status");
let xAcertos = 0, xErros = 0;

function atualizaPlacar() { 
    let placar = document.querySelector(".placar");
    placar.innerHTML=score;
};
atualizaPlacar();

function numCheck() {
    if (score < 0) {
        score = 0;
        xErros = 0;
        atualizaPlacar();
    }
}

function acerto() {
    if (placarStatus !== "mais") {
        xErros = 0;
        placarStatus = "mais";
        xAcertos++;
        score += 3;
        atualizaPlacar();
    } else {
        if (xAcertos > 0 && xAcertos < 2) {
            score += 3;
        }
        else if (xAcertos >= 2 && xAcertos < 4 ) {
            score += 4;
            alterarResultado.innerHTML += " ---WINNING 4 POINTS PER WIN"
        }
        else if (xAcertos >= 4 && xAcertos < 6) {
            score += 5;
            alterarResultado.innerHTML += " ---WINNING 5 POINTS PER WIN"
        }
        else {
            score += 6;
            alterarResultado.innerHTML += " ---6 POINTS MAX ACUMULATOR "
        }
    xAcertos++;
    atualizaPlacar();
    }
}

function erro() {
    if (placarStatus == "mais") {
        xAcertos = 0;
        placarStatus = "menos";
        xErros++;
        score -= 1;
        atualizaPlacar();
    } else {
        if (xErros < 2) {
            score -= 1;
        }
        else if (xErros >= 2 && xErros < 4 ) {
            score -= 2;
            alterarResultado.innerHTML += " ---LOSING 2 POINTS PER MISS"
        }
        else if (xErros >= 4 && xErros < 6) {
            score -= 3;
            alterarResultado.innerHTML += " ---LOSING 3 POINTS PER MISS"
        }
        else {
            score -= 4;
            alterarResultado.innerHTML += " ---4 POINTS MAX LOSING"
        }
    xErros++;
    numCheck();
    atualizaPlacar();
    }
}

function scoreReset() {
       score = 0;
       atualizaPlacar();
       xAcertos = 0;
       xErros = 0;
       status.innerHTML = "";
   }

function criarBolinhas(value) {
    let containerBolas = document.querySelectorAll(".btn-container");
    for (bolas of containerBolas) {
        bolas.remove();
    };
    for (let i = 1; i <= value; i++){
        let createDiv = document.createElement("div");
        createDiv.className="btn-container";
        document.querySelector(".container-bolas").appendChild(createDiv);
        let novaBolinha = document.createElement("div");
        novaBolinha.id = "cor"+i;
        novaBolinha.className = "bolinha";
        let newContainer = document.getElementsByClassName("btn-container");
        for (div of newContainer){
            div.appendChild(novaBolinha);
        };
    };
    reset();
    interacaoSelecao();
}

let qtdInput = document.querySelector(".quantidade");
qtdInput.addEventListener("change", function() {
    let inputQtdBolinhas = qtdInput.value;
    if (inputQtdBolinhas >= 3 || inputQtdBolinhas < 19) {
        criarBolinhas(inputQtdBolinhas);
    } else {
        alert("Valor inválido!");
    };
});
