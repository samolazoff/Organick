'use strict';

const  forms = document.querySelectorAll('form');

const message ={
    loading: 'loading',
    success: 'Thank you! We will contact you',
    failure: 'Something went wrong'
}

forms.forEach(item => {
    bindPostData(item);
})

function bindPostData(form){
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const statusMessage = document.createElement('span');
        statusMessage.textContent=message.loading;
        form.append(statusMessage);

        const formDate = new FormData(form),
              object ={};

        formDate.forEach((value,key)=>{
            object[key]=value;
        })
 
        fetch('server.php',{
            method:'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(object)
        })
        .then(data => data.text())
        .then(data => {
            console.log(data);
            statusMessage.textContent=message.success;
        })
        .catch(()=>{
            statusMessage.textContent=message.failure;
        })
        .finally(()=>{
            form.reset();
            setTimeout(()=>{
                statusMessage.remove();
            }, 2000)
        })
    })
}
