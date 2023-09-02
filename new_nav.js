const menu=document.querySelector('.menu')
const list=document.querySelector('ul')
menu.addEventListener('click',()=>{
    list.classList.toggle('menu_active');
    const menu_child=menu.firstElementChild;
    if(list.classList.contains('menu_active')){
        menu_child.classList.replace('fa-bars','fa-xmark');
    }
    else{
        menu_child.classList.replace('fa-xmark','fa-bars');
    }
});