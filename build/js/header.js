document.getElementById('hamburger').onclick = function() {
    document.getElementById('hamburger').classList.toggle('is-active');
    document.getElementsByClassName('block-menu')[0].classList.toggle('block-menu_active');
    document.getElementsByClassName('btn-main-box')[0].classList.toggle('active');
    document.getElementsByClassName('nav-header')[0].classList.toggle('active');
  }