//Carta inicial - Bonus 1
let letterInput = document.querySelector(".input-letter");
let btnEnvia = document.querySelector(".btn-submit");
function coringaRi() {
    //letterContainer = document.querySelector(".container-result");
    let placeholder = letterInput.placeholder;
    stringArray = [];
    stringArray.push(placeholder.toString().split(" "));
    randomSize();
    classMenu();
}
coringaRi();

//função gera texto em div a partir do input.
btnEnvia.addEventListener("click", function() {
    reset();
    stringFormation();
    randomSize();
    classMenu();
});

//formação de array de palavras
function stringFormation () {
    stringArray = [];
    stringArray.push(letterInput.value.toString().split(" "));
}

//função tamanho de letra aleatório

function randomSize() {
    let letterContainer = document.querySelector(".container-result");
    for (let word of stringArray[0]) {
        let wordSpan = document.createElement("span");
        let randomSize = ((Math.random()*3)+1);
        wordSpan.style.fontSize=randomSize+"em";
        wordSpan.innerHTML=word+" ";
        wordSpan.className="current-word"
        //Cor aleatoria
        function randomColor() {
            let randomRGB1 = Math.floor((Math.random()*255))+1,
            randomRGB2 = Math.floor((Math.random()*255))+1,
            randomRGB3 = Math.floor((Math.random()*255))+1;
            wordSpan.style.backgroundColor="rgb("+randomRGB1+","+randomRGB2+","+randomRGB3+")";     
        }
        randomColor()
        
        //Aleatório: negrito, italico, etc
        function randomStyle() {
            var stylesObj = {
                0: "underlined",
                1: "overlined",
                2: "italic",
                3: "linethrough",
                4: "smallcaps",
                5: "bold",
                6: "lspacing-small",
                7: "lspacing-big",
                8: "capitalize",
                9: "neon",
                10: "flaming",
                11: "comic",
                12: "vegas",
                13: "deep",
                14: "canvas",
                15: "printout",
                16: "pink",
                17: "rough"
            };
            random = Math.floor(Math.random()*18);
            wordSpan.className+=" "+stylesObj[random];
            letterContainer.appendChild(wordSpan);
        }
            randomStyle();
    }
}

//Bonus 2 -  Menu de classes
function classMenu() {
    let currentWords = document.querySelectorAll(".current-word");  
    divArray = Array.prototype.slice.call(document.querySelector('.container-result').children ); 
    for (word of currentWords) {
        word.addEventListener("click", function() { 
                divIndex = divArray.indexOf(this)
                let tempDiv = document.querySelector(".temp-div")
                tempDiv.style.display="inline-block";
                //this.appendChild(tempDiv);
                tempDiv.addEventListener ("mouseleave", function() {
                    let colorPallete = document.querySelector(".color-picker-sv")
                    //Não fecha DIV se paleta de cor estiver aberta.
                    if (document.body.contains(colorPallete)) {
                        tempDiv.style.display="inline-block";
                    } else {
                        tempDiv.style.display="none";
                    }
                });
        });
    }

    //Funcionalidade selecionar stilo: (Bonus #2)
    let styleDropdown = document.querySelector(".dropdown-style");
    styleDropdown.addEventListener("change", function() {
        currentWords[divIndex].className+=" "+this.value;
    })

    //Funcionalidade tamanho da fonte - Bonus #2

    let fontSizeDropdown = document.querySelector(".dropdown-font-size")
    fontSizeDropdown.addEventListener("change", function() {
        currentWords[divIndex].style.fontSize=this.value+"em";
    });

    //Funcionalidade mudança de cores - Bonus #2
    //Como por algum motivo bizarro não consegui usar a paleta de cores do HTML, vou imbutir uma em
    //javaScript que achei na net.

    var picker = new CP(document.querySelector(".color-container"));
    var target = document.querySelector(".color-container");
    target.addEventListener("click", function() {
    
        picker.on("drag", function(color) {
            target.value = '#' + color;
            currentWords[divIndex].style.backgroundColor=target.value;
        });
    });
}

//window.addEventListener("load",classMenu);    


function reset() {
    let currentWords = document.querySelectorAll("[class*='current-word']");   
    for (let word of currentWords) {
        document.querySelector(".container-result").removeChild(word);
    }
}
