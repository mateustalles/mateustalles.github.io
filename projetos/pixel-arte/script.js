var tableArray=[];
function criaTabela(n) {
    let tabelaContainer = document.querySelector(".container-table"),
        tabela = document.createElement("table");
        tabela.className="pixel-table"
        tabelaContainer.appendChild(tabela);
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
criaTabela(5)

//atribuindo função à paleta, que armazena a cor numa variavel
//Bonus 1 - adicionar class "active" para cor ativa

    let paletaCor = document.querySelectorAll(".btn-container"),
    corAtual="black";
    for (let cores of paletaCor) {
        console.log(cores.id);

        //configurando classe active ligar e desligar apenas nos eventos corretos, ou seja, quando tem
        //a classe active-hover e não a active definitiva, que só é setada através do clique.
        cores.addEventListener("mouseover", function() {
            this.className+=" active-hover";
        });
            cores.addEventListener("mouseleave", function() {
                                                                //importante o espaço no final dessa class
                if(this.className.includes("active-hover") && !(this.className.includes("active ")) ) {
                this.className="btn-container";   
                }         
        }); 

        cores.addEventListener("click", function () {
            let selectedColor = document.querySelector("."+this.id);
            corAtual = getComputedStyle(selectedColor).backgroundColor;
            //atribui class active à div pai
            
            for (each of paletaCor) {
                each.className="btn-container";
            }
            this.className+=" active";
        })
    }

//atribuindo função de pintar a tabela de pixel

    for (pixel of tableArray) {
        console.log(pixel)
        pixel.addEventListener("click", function() {
            this.style.backgroundColor=corAtual;
        })
    };

    //resetar quadro - Bonus #2
    let reset = document.querySelector(".reset");
    reset.addEventListener("click",function() {
        for (cells of tableArray) {
            cells.style.backgroundColor="white";
        }
    });
        
    //setar tamanho customizado: Bonus #3
    let inputSize = document.querySelector(".input-tablesize");
    inputSize.addEventListener("change", function() {
        document.querySelector(".pixel-table").remove();
        criaTabela(this.value);
    });

    //Bonus #4: Gerando paletas aleatórias

    window.addEventListener("load", function(){
        let paletaCor = document.querySelectorAll(".btn-container");
        for (pixels of tableArray) {
            for (let colors of paletaCor) {
                //Este comando exclui o ultimo digito do colors.id que é um número, e adicionada
                //a string "color" um outronumero aleatoriamente gerado de 0 a 3, 
                //e depois adiciona +1, pois os Id's estão
                //numeros como color1, color2, color3 e color 4;                
            let idRandom = ((colors.id).slice(0,-1)) + (Math.floor(Math.random() * 4)+1) ;
            //captura o valor de backgroundColor das divs de cada botão
            let selectedColor = document.querySelector("."+idRandom);
            corAtual = getComputedStyle(selectedColor).backgroundColor;
            //aplica a cada pixel que esteja endo itnerpolado.            
            pixels.style.backgroundColor=corAtual;
            }
        }
    });