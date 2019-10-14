function addFontSizeOptions() {
    let fontSizesArray = [], fontSizes = 0;
    fontSizes.toFixed(2);
    for (fontSizes = 0.1;fontSizes < 4.1; fontSizes += 0.1) {
        fontSizesArray.push(fontSizes.toFixed(2));
    }
    let dropdown = document.querySelector(".dropdown-font-size")
    for (let fontSize of fontSizesArray) {
        let option = document.createElement("option")
        option.text = fontSize
        option.value = fontSize
        dropdown.appendChild(option)
    }
}
window.addEventListener("load", function() {
    addFontSizeOptions();
    setStyle();
});

let letterInput = document.querySelector(".input-letter");
let btnEnvia = document.querySelector(".btn-submit");
function coringaRi() {
    let placeholder = letterInput.placeholder;
    stringArray = [];
    stringArray.push(placeholder.toString().split(" "));
    randomSize();
    classMenu();
    wordCounter();
}
coringaRi();

btnEnvia.addEventListener("click", function() {
    reset();
    stringFormation();
    randomSize();
    classMenu();
    wordCounter();
});

function stringFormation () {
    stringArray = [];
    stringArray.push(letterInput.value.toString().split(" "));
};

function randomSize() {
    let letterContainer = document.querySelector(".container-result");
    for (let word of stringArray[0]) {
        let wordSpan = document.createElement("span");
        let randomSize = ((Math.random()*3)+1);
        wordSpan.style.fontSize = randomSize+"em";
        wordSpan.innerHTML = word+" ";
        wordSpan.className = "current-word"
        function randomColor() {
            let randomRGB1 = Math.floor((Math.random()*255))+1,
            randomRGB2 = Math.floor((Math.random()*255))+1,
            randomRGB3 = Math.floor((Math.random()*255))+1;
            wordSpan.style.backgroundColor="rgb("+randomRGB1+","+randomRGB2+","+randomRGB3+")";     
        }
        randomColor()
        
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
                17: "rough",
                18: "border-radius-1",
                19: "border-radius-2",
                20: "border-radius-3",
                21: "saturate",
                22: "rotate-upsidedown"
            };
            let obj_length = Object.keys(stylesObj).length
            random = Math.floor(Math.random()*obj_length);
            wordSpan.className += " "+stylesObj[random];
            letterContainer.appendChild(wordSpan);
        };
            randomStyle();
    };
};
function classMenu() {
    let currentWords = document.querySelectorAll(".current-word");  
    divArray = Array.prototype.slice.call(document.querySelector('.container-result').children ); 
    for (word of currentWords) {
        word.addEventListener("click", function() { 
            divIndex = divArray.indexOf(this)
            let tempDiv = document.querySelector(".temp-div")
            tempDiv.style.display="inline-block";
            tempDiv.style.top = this.getBoundingClientRect().top+"px";
            tempDiv.style.left = this.getBoundingClientRect().left-100+"px";
            tempDiv.addEventListener ("mouseleave", function() {
                let colorPallete = document.querySelector(".color-picker-sv")
                if (document.body.contains(colorPallete)) {
                    tempDiv.style.display="inline-block";
                } else {
                    tempDiv.style.display="none";
                }
            });
        });
    }

    let styleDropdown = document.querySelector(".dropdown-style");
    styleDropdown.addEventListener("change", function() {
        currentWords[divIndex].className+=" "+this.value;
    })

    let fontSizeDropdown = document.querySelector(".dropdown-font-size")
    fontSizeDropdown.addEventListener("change", function() {
        currentWords[divIndex].style.fontSize=this.value+"em";
    });


    var picker = new CP(document.querySelector(".color-container"));
    var target = document.querySelector(".color-container");
    target.addEventListener("click", function() {

        picker.on("drag", function(color) {
            target.value = '#' + color;
            currentWords[divIndex].style.backgroundColor=target.value;
        });
    });
}

function reset() {
    let currentWords = document.querySelectorAll("[class*='current-word']");   
    for (let word of currentWords) {
        document.querySelector(".container-result").removeChild(word);
    };
};

function wordCounter() {
    let wordCounter = document.querySelector(".word-counter");
    let wordArray = document.querySelectorAll(".current-word");
    let counter = 0;
    for (let word of wordArray) {
        if ( word.innerText == "" || word.innerText == " " ) {
            wordCounter.innerHTML = counter + " palavras";
        } else {
            counter++;
            wordCounter.innerHTML = counter+" palavras";
        }
    }
}

function setStyle() {
    let styles = [{
      value: "underlined",
      classes: ["dropdown", "underlined"],
      text: "Underlined"
    }, {
      value: "overlined",
      classes: ["dropdown", "overlined"],
      text: "Overlined"
    }, {
        value: "italic",
        classes: ["dropdown", "italic"],
        text: "Italic"
    }, {
        value: "linethrough",
        classes: ["dropdown", "linethrough"],
        text: "Linethrough"
    }, {
        value: "smallcaps",
        classes: ["dropdown", "smallcaps"],
        text: "Smallcaps"
    }, {
        value: "bold",
        classes: ["dropdown", "bold"],
        text: "Bold"
    }, {
        value: "lspacing-small",
        classes: ["dropdown", "lspacing-small"],
        text: "L-Spacing Small"
    }, {
        value: "lspacing-big",
        classes: ["dropdown", "lspacing-big"],
        text: "L-Spacing Big"
    }, {
        value: "capitalize",
        classes: ["dropdown", "lspacing-small"],
        text: "Capitalize"
    }, {
        value: "neon",
        classes: ["dropdown", "neon"],
        text: "Neon"
    }, {
        value: "flaming",
        classes: ["dropdown", "flaming"],
        text: "Flaming"
    }, {
        value: "comic",
        classes: ["dropdown", "comic"],
        text: "Comic"
    }, {
        value: "vegas",
        classes: ["dropdown", "vegas"],
        text: "Vegas"
    }, {
        value: "deep",
        classes: ["dropdown", "deep"],
        text: "Deep"
    }, {
        value: "canvas",
        classes: ["dropdown", "canvas"],
        text: "Canvas"
    }, {
        value: "printout",
        classes: ["dropdown", "printout"],
        text: "Printout"
    }, {
        value: "pink",
        classes: ["dropdown", "pink"],
        text: "Pink"
    }, {
        value: "rough",
        classes: ["dropdown", "rough"],
        text: "Rough"
    }, {
        value: "border-radius-1",
        classes: ["dropdown", "border-radius-1"],
        text: "Border Radius I"
    }, {
        value: "border-radius-2",
        classes: ["dropdown", "border-radius-2"],
        text: "Border Radius II"
    }, {
        value: "border-radius-3",
        classes: ["dropdown", "border-radius-3"],
        text: "Border Radius III"
    }];
    let dropdown = document.querySelector(".dropdown-style")
    for (let style of styles) {
    let option = document.createElement("option");
    option.value = style.value;
    option.className = style.classes.join(" ");
    option.text = style.text;
    dropdown.appendChild(option);
  }
}
