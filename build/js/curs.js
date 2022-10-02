'use ctrict';

const closeBtnCurse = document.querySelector('.curs__close'),
      curseCont = document.querySelector('.curs'),
      inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

closeBtnCurse.addEventListener('click', () => {
    curseCont.style.display='none';
})

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest(); 

    request.open('GET','js/current.json');
    request.setRequestHeader('Content-type', 'application/json', 'charset=utd-8');
    request.send();

    request.addEventListener('load', ()=>{
        if(request.status === 200){
            const data = JSON.parse(request.response);
            inputUsd.value=(+inputRub.value/data.current.usd).toFixed(2);
        }else{
            inputUsd.value="Something went wrong"
        }
    })
})