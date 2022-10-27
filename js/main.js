const immagini = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];
const box = document.querySelector(".box");

for (i = 0; i < immagini.length; i++) {
    let div = `<div class="item">
                    <img src=${immagini[i]} alt="">
                </div>`;

    box.innerHTML += div;

    const item = document.querySelector(".item");
    item.classList.add("mostra");
}

let img = document.querySelectorAll('.item')

const next = document.querySelector(".prossimo");
let indexImg = 0;

next.addEventListener('click', function() {
    img[indexImg].classList.remove('mostra');
    if (indexImg === img.length -1) {
        indexImg = 0;
    } else {
        indexImg ++;
    }
    img[indexImg].classList.add('mostra');
})

const prev = document.querySelector(".precedente");

prev.addEventListener('click', function() {
    img[indexImg].classList.remove('mostra');
    if (indexImg === 0) {
        indexImg = img.length - 1;
    } else {
        indexImg --;
    }
    img[indexImg].classList.add('mostra');
})

