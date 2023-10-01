const first_prev = document.querySelector(".first_prev");
const first_next = document.querySelector(".first_next");
const second_prev = document.querySelector(".second_prev");
const second_next = document.querySelector(".second_next");
const first_pro = document.querySelector(".first_pro");
const second_pro = document.querySelector(".second_pro");

first_prev.addEventListener('click', (e) => {
    let x = first_pro.scrollLeft;
    let full = first_pro.scrollWidth - window.innerWidth;
    first_pro.scrollBy({left:-full*0.25, behavior:"smooth"})
    console.log(x, full*0.25);
});

first_next.addEventListener('click', (e) => {
    let x = first_pro.scrollLeft;
    let full = first_pro.scrollWidth - window.innerWidth;
    first_pro.scrollBy({left:full*0.25, behavior:"smooth"})    
});

second_prev.addEventListener('click', (e) => {
    let x = second_pro.scrollLeft;
    let full = second_pro.scrollWidth - window.innerWidth;
    second_pro.scrollBy({left:-full*0.0833, behavior:"smooth"})
    console.log(x, full*0.25);
});

second_next.addEventListener('click', (e) => {
    let x = second_pro.scrollLeft;
    let full = second_pro.scrollWidth - window.innerWidth;
    second_pro.scrollBy({left:full*0.0833, behavior:"smooth"})    
});

