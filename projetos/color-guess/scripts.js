//Função que gera cores aleatórias e adiciona header com a cor aleatória da vez.
function corAleatoria() {
    randomNumber1 = Math.floor(Math.random()*256);
    randomNumber2 = Math.floor(Math.random()*256);
    randomNumber3 = Math.floor(Math.random()*256);
    randomColor = "rgb("+randomNumber1+","+randomNumber2+","+randomNumber3+")";
}
//Atribui cor aleatória às 6 bolinhas nas divs.
function atribuiCor() {
let bolas = document.querySelectorAll(".bolinha");
    for (each of bolas) {
        corAleatoria();
        each.style.backgroundColor=randomColor;
    }
}
//Executa funções principais.
window.addEventListener("load", atribuiCor(),corAleatoria(),getRandom(), erroAcerto(), interacaoMenu());
//Escolhe uma bolinha aleatória e adiciona na header da cor surpresa
function getRandom(){
    let numeroBola = Math.floor((Math.random()*6)+1);
    bolaEscolhida=document.querySelector(".cor"+numeroBola);
    let colorContainer=document.querySelector(".new-color");
    let newColor = document.createElement("h3");
    newColor.className="random-color";
    colorContainer.appendChild(newColor);
    document.querySelector(".random-color").innerHTML=getComputedStyle(bolaEscolhida).backgroundColor;
}
//Adiciona class active a medida que passa o mouse ou seleciona
function interacaoMenu() {
    divBolinha = document.querySelectorAll(".btn-container");
        for (let divs of divBolinha) {
            //configurando classe active ligar e desligar apenas nos eventos corretos, ou seja, quando tem
            //a classe active-hover e não a active definitiva, que só é setada através do clique.
            divs.addEventListener("mouseover", function() {
                this.className+=" active-hover";
            });
            divs.addEventListener("mouseleave", function() {
                                                                //importante o espaço no final dessa class
                if(this.className.includes("active-hover") && !(this.className.includes("active ")) ) {
                this.className="btn-container";   
                }         
            }); 

            divs.addEventListener("click", function () {
                for (each of divBolinha) {
                    each.className="btn-container";
                }
                this.className+=" active";
            })
        }
}
//Adiciona função acerto/erro
function erroAcerto() {
let msgAcerto=document.createElement("h2");  
msgAcerto.className="status";
let containerResult = document.querySelector(".resultado");
containerResult.appendChild(msgAcerto);
let bolas = document.querySelectorAll("div[class*='cor']");
for (let each of bolas) {
    each.addEventListener("click", function() {   
            if (getComputedStyle(this).backgroundColor == getComputedStyle(bolaEscolhida).backgroundColor) {
                let status = document.querySelector(".status");
                status.innerHTML="ACERTÔ MISERAVI!!!!";
                addScore();
                reset();
            } else {
                let status = document.querySelector(".status");
                status.innerHTML="TÁ QUASE ADIVINHANDO...";
                errou();
            }
    });
}
}
//Atribui função ao botão
let botaoRestart = document.querySelector(".btn-restart");
function reset() {
        atribuiCor();
        corAleatoria();
        getRandom();
        
        let divBolinha = document.querySelectorAll(".btn-container");
        for (each of divBolinha) {
            each.className="btn-container";
        }
}
botaoRestart.addEventListener("click", function() {
    reset();
    scoreReset();
    });

//funcionamento do placar
var placar = document.querySelector(".placar");
var score = 0;
var placarStatus = "";
function placarUpdate() { 
    var placar = document.querySelector(".placar");
   placar.innerHTML=score;
};
placarUpdate();
var xAcertos = 0,
    xErros = 0;
//função chega se é negativo, retorna 0
function numCheck() {
    if (score < 0) {
        score = 0;
        xErros = 0;
        placarUpdate();
    }
}
//função adiciona score
function addScore() {
    if (placarStatus!=="mais") {
        xErros=0;
    }
    placarStatus="mais";
    if (xAcertos < 2) {
        score+=3;
        placarUpdate();
        xAcertos++;
    }
    else if (xAcertos < 4 ) {
        score+=4;
        placarUpdate();
        xAcertos++;
        let status = document.querySelector(".status");
        status.innerHTML+=" ---WINNING 4 POINTS PER WIN"
    }
    else if (xAcertos < 6) {
        score+=5;
        placarUpdate();
        xAcertos++
        let status = document.querySelector(".status");
        status.innerHTML+=" ---WINNING 5 POINTS PER WIN"
    }
    else {
        score+=6;
        placarUpdate();
        xAcertos++
        let status = document.querySelector(".status");
        status.innerHTML+=" ---6 POINTS MAX ACUMULATOR "
    }
}
//função errou
function errou() {
    numCheck()
    if (placarStatus=="mais") {
        xAcertos=0;
    }
    placarStatus="menos";
        if (xErros < 2) {
            score-=1;
            placarUpdate();
            xErros++;
            numCheck()
        }
        else if (xErros < 4 ) {
            score-=2;
            placarUpdate();
            xErros++;
            let status = document.querySelector(".status");
            status.innerHTML+=" ---LOSING 2 POINTS PER MISS"
            numCheck()
        }
        else if (xErros < 6) {
            score-=3;
            placarUpdate();
            xErros++;
            let status = document.querySelector(".status");
            status.innerHTML+=" ---LOSING 3 POINTS PER MISS"
            numCheck()
        }
        else {
            score-=4;
            placarUpdate();
            xErros++;
            let status = document.querySelector(".status");
            status.innerHTML+=" ---4 POINTS MAX LOSING"
            numCheck()
        }
   }
   //score reset
   function scoreReset() {
       score=0;
       placarUpdate();
       xAcertos=0;
       xErros=0;
       let status = document.querySelector(".status");
        status.innerHTML="";
   }
   
//Redefinir quantidade de bolinhas;

function criarBolinhas(value) {
    let containerBolas = document.querySelectorAll(".btn-container");
    for (bolas of containerBolas) {
        bolas.remove();
    }
    for (let i = 1;i<=value;i++){
        let createDiv = document.createElement("div");
        createDiv.className="btn-container";
        document.querySelector(".container-bolas").appendChild(createDiv);
        let novaBolinha = document.createElement("div")
        novaBolinha.className="bolinha cor"+i;
        let newContainer = document.getElementsByClassName("btn-container");
        for (div of newContainer){
            div.appendChild(novaBolinha);
        }
        console.log(createDiv)
    }
    reset();
    erroAcerto();
    interacaoMenu();
}
let qtyInput = document.querySelector(".qty");
qtyInput.addEventListener("change", function() {
    let input = qtyInput.value;
    if (input <= 18) {
    criarBolinhas(input);
    } else {
    alert("MAX EXCEEDED");
    }
});