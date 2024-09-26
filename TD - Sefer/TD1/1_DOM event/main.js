console.log("HOP")

// const body = document.querySelector("body")
// body.style.backgroundColor = "red"

const h1 = document.querySelector("h1")
h1.innerText = "Rouge"

const span = document.querySelector("span")
span.style.color = "blue"

//#region changer la couleur du main
const main = document.querySelector("main");
function changerCouleurFond() {
    let couleurHasard = (Math.floor(Math.random() * 0xFFFFFF));
    main.style.backgroundColor = `#${couleurHasard}`;
}
setInterval(changerCouleurFond, 2000);
//#endregion

//#region changer la couleur des span "orange"
//const span = document.querySelector("span.orange");
function changerCouleurSpan() {
    let couleurHasard = (Math.floor(Math.random() * 0xFFFFFF));
    span.style.color = `#${couleurHasard}`;
}
setInterval(changerCouleurSpan, 1000);
//#endregion

//#region Rajouter coleur
const colonne = document.querySelectorAll("table tr");
for (let i = 0; i < colonne.length; i++) {
    const caseHex = colonne[i].querySelector('.hexa');
    const derniereCase = colonne[i].querySelector('.visu');
    derniereCase.style.backgroundColor = caseHex.innerText;
    }
//#endregion

//#region Enlever Purple
for (let i = 0; i < colonne.length; i++) {
    const nameCell = colonne[i].querySelector('.name');
        if (nameCell && nameCell.innerText.trim() === "Purple") {
        colonne[i].remove();
    }
}
//#endregion

//#region Changer image
const images = [
    "images/abstract.jpg", 
    "images/beer.jpg",
    "images/chair.jpg",
    "images/fruit.jpg",
    "images/pen.jpg",
    "images/redhead.jpg",
    "images/stairs.jpg",    
    "images/van.jpg"
];

const img = document.querySelector("#img img");
let currentIndex = 0;
function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    img.src = images[currentIndex];
}
setInterval(changeImage, 1000);
//#endregion

//#region Changer titre article
const article = document.querySelector("#img h2")
article.innerText = "Images" 
//#endregion


const nav = document.querySelector("nav");
nav.addEventListener("click", function () {
    nav.classList.toggle("visible");
});

