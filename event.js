let changePage = document.querySelectorAll('.changePage');
let Header = document.querySelector('.header');
let LastScrollY = 0;

function changing(event){
    event.target.classList.add('changing');
}

function unchanging(event){
    event.target.classList.remove('changing');
}

changePage.forEach((choose)=>{
    choose.addEventListener('mouseover',changing);
    choose.addEventListener('mouseout',unchanging);
})

window.addEventListener('scroll',()=>{
    if (window.scrollY > LastScrollY){
        Header.classList.add('hide');
    }
    else {
        Header.classList.remove('hide');
    }
    LastScrollY = window.scrollY
})
