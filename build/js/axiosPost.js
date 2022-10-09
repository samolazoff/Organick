const  formModal = document.querySelector('.modal form');
formModal.addEventListener('submit',(e)=>{
    e.preventDefault();
    const formModalData = new FormData(formModal);
    console.log(formModalData);

    axios.post('http://localhost:3000/requests', {
        "name": formModalData.get('name'),
        "phone":formModalData.get('phone')})
})


