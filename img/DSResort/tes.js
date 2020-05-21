const gambarSlide = document.querySelector('.gambar-slide'); 
const gambarImages = document.querySelectorAll('.gambar-slide img');

// Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// counter
let counter = 1;
const size = gambarImages[0].clientWidth;

gambarSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

// button listeners

nextBtn.addEventListener('click', ()=>{
    if (counter >= gambarImages.length -1) return;
    gambarSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    gambarSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
});
 
prevBtn.addEventListener('click', ()=>{
    if (counter <= 0) return;
    gambarSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    gambarSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
});

gambarSlide.addEventListener('transitionend', ()=>{
    if (gambarImages[counter].id === 'lastClone'){
        gambarSlide.style.transition = "none";
        counter = gambarImages.length - 2 ;
        gambarSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    }

    if (gambarImages[counter].id === 'firstClone'){
        gambarSlide.style.transition = "none";
        counter = gambarImages.length - counter ;
        gambarSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    }
});






