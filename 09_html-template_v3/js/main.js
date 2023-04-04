document.addEventListener('DOMContentLoaded', function() {
  const removeLoaded = document.querySelectorAll('.d-none-loaded');
  const btnMenu = document.querySelector('.menu');
  const overlayNav = document.querySelector('.p-overlay__nav');
  const body = document.body;
  const header = document.querySelector('.l-header');
  removeLoaded.forEach(removeLoaded => {
    removeLoaded.classList.remove('d-none-loaded');
  });
  btnMenu.addEventListener('click', function() {
    this.classList.toggle('is-active');
    overlayNav.classList.toggle('is-active');
    body.classList.toggle('is-blur');
  });
  document.addEventListener('scroll', function() {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let isShadow = header.classList.contains('is-shadow');
    if(scrollTop > 20) {
      !isShadow ? header.classList.add('is-shadow') : '' ;
    } else {
      isShadow ? header.classList.remove('is-shadow') : '' ;
    }
  });
});
