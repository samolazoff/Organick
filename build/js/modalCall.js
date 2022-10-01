'use strict';

window.addEventListener('DOMContentLoaded',()=>{
    const modal = document.querySelector('.modal'),
          btnModalClose = document.querySelector('.modal__close');
    function modalShow(){
        modal.classList.add('modal-active')
    }
    function modalEndShow(){
        modal.classList.remove('modal-active');
        document.body.style.overflow='hidden';
    }
    btnModalClose.addEventListener('click',()=>{
        modalEndShow();
        document.body.style.overflow='';
    })
    document.addEventListener('keydown',(e)=>{
        if(e==='Escape'&&modal.classList.contains('modal-active')){
            modalEndShow();
        }
    })

    const modalTimer = setTimeout(modalShow, 4000);

    function showModalBbyScroll(){
        if(window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight){
            modalShow();
            window.removeEventListener('scroll',showModalBbyScroll)
        } 
    }

    showModalBbyScroll();


})