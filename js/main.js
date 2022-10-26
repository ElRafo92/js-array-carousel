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
    if (indexImg !== img.length) {
        img[indexImg].classList.remove('mostra');
        indexImg += 1;
        img[indexImg].classList.add('mostra');
    } else if (indexImg == img.length) {
        indexImg -= img.length;
        img[indexImg].classList.add('mostra');
    }
})

const prev = document.querySelector(".precedente");

prev.addEventListener('click', function() {
    if (indexImg !== 0) {
        img[indexImg].classList.remove('mostra');
        indexImg -= 1;
        img[indexImg].classList.add('mostra');
    } else if (indexImg == 0) {
        img[indexImg].classList.remove('mostra');
        indexImg = img.length;
        indexImg -= 1;
        img[indexImg].classList.add('mostra');
        
    }
})

