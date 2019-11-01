window.addEventListener("load", animate);
window.addEventListener("resize", animate);

let broom = document.querySelector(".broom");
let articles = document.getElementsByTagName("article");

function putBroomStyle() {
    this.style = "animation: broom 5s forwards ease-in;";
    this.classList.remove("halt-animation");
};

function putBroomStyleSmall () {
    this.style = "animation: broom 5s steps(10, end) forwards"
    this.classList.remove("halt-animation")
}

function animate() {
    for (let article of articles) {
        article.className = ""
    }
    if ( window.innerWidth >= 760 ) {
        broom.addEventListener("click", putBroomStyle);
        for (article of articles) {
            article.addEventListener("click", function(e, size = "big") {
                switch (this.className) {
                    case "" :
                        this.className = `article-animation-${size}`
                        break
                    case `article-animation-${size}` :
                        this.className = "halt-animation"
                        break
                    case "halt-animation" :
                        this.className = `article-animation-${size}`
                        break
                    }
            })
        }    
    }
    else if (window.innerWidth < 760) {
        broom.addEventListener("click", function() {
            putBroomStyleSmall
        });
        for (article of articles) {
        article.addEventListener("click", function(e, size = "small") {
            switch (this.className) {
                case "" :
                    this.className = `article-animation-${size}`
                    break
                case `article-animation-${size}` :
                    this.className = "halt-animation"
                    break
                case "halt-animation" :
                    this.className = `article-animation-${size}`
                    break
                }
            })
        }    
    }
}
