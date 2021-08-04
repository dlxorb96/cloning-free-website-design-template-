const toggle = document.querySelector('.hidden');
// const ul = document.querySelector('#nav__bar_ul')
const ul = document.querySelector('.nav__bar .bar')
function clickEvent(){
    ul.classList.toggle('active')
}

toggle.addEventListener('click', clickEvent)

