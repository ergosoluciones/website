function init(){

  // NAV
  const burger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.nav-links');
  const mobileNavLinks = document.querySelectorAll('.nav-links a'); 
  const windowWidth = window.innerWidth;
  
  burger.addEventListener('click', function(){
    mobileNav.classList.toggle('visible');
    burger.classList.toggle('close');
  });

  mobileNavLinks.forEach(function(e){
    e.addEventListener('click', function(){
      if(windowWidth < 768){
        mobileNav.classList.toggle('visible');
        burger.classList.toggle('close');
      }
    })
  });


  // PRODUCTS
  const products = document.querySelectorAll('.tools span');
  const productsCopy = document.querySelectorAll('.tools-description p');
  const productsLinks = document.querySelectorAll('.productos-menu li');
  const productCards = document.querySelectorAll('.card');

  // SHOW PRODUCT CARDS
  productsLinks.forEach(function(e){
    e.addEventListener('click', function(){
      productsLinks.forEach(function(e){
        e.classList.toggle('active');
      })
      productCards.forEach(function(e){
        e.classList.toggle('active');
      })
    })
  })

  // SHOW PRODUCT DESCRIPTIONS
  products.forEach(function(e){
    e.addEventListener('click', function(e){
      products.forEach(function(f){
        f.classList.remove('active');
      })
      productsCopy.forEach(function(f){
        f.classList.remove('active');
      })
      const showCopy = e.target.classList.value;
      e.target.classList.add('active');
      document.querySelector('.tools-description p.' + showCopy).classList.add('active');
    })
  })

  // GLIDE CAROUSEL
  if(windowWidth < 768){
    new Glide('.glide').mount();
  }

}


document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    init();
  }
}