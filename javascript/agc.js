/*****MENU******/
navbar=document.querySelector('.navbar')
navigation=document.querySelector('.navigation')
menu=document.querySelector('.menu_icon')

menu.addEventListener('click',()=>{
    navigation.classList.toggle('visible');
    navbar.classList.toggle('nav_res');
})
