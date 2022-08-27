window.addEventListener('DOMContentLoaded',()=>{
    const btns=document.querySelectorAll('.products-box-card__btn'),
          btnsBox=document.querySelector('.block-btn-choise'),
          cardsProduct=document.querySelectorAll('.products-box-card')

    btnsBox.addEventListener('click',(event)=>{
        const target=event.target;
        if(target && target.classList.contains('products-box-card__btn')){

            cardsProduct.forEach(item=>{
                if(item.dataset.category!==target.dataset.category){
                    item.classList.add('none');
                }else{
                    item.classList.remove('none');
                }
                if(target.dataset.category==='All'){
                    item.classList.remove('none');
                }
            })

        }

    })
    
});