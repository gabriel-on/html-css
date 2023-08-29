function slider(anything){
    window.document.querySelector('.foto-one') .src = anything;
}

var menu = document.querySelector('#menu-icon')
var navbar = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('open')
}