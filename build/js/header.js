  document.querySelector('.hamburger')
    .addEventListener('click', (event)=>{
      document.querySelector('.hamburger').classList.toggle('is-active');
      document.querySelector('.block-menu').classList.toggle('block-menu_active');
      document.querySelector('.btn-main-box').classList.toggle('active');
      document.querySelector('.nav-header').classList.toggle('active');
  })