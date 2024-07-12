

var typed = new Typed(".auto-type", {
    strings: [
      "Hey I am Marjan Ahmed  ",
      "Welcome!, To My Official Website",
    ],
    typeSpeed: 90,
    backSpeed: 50,
    loop: true,
  });



  document.addEventListener("DOMContentLoaded", function() {
  const loader = document.getElementById('loader');
  const content = document.getElementById('content');

  
  loader.style.display = 'flex';

  
  setTimeout(function() {
    
    loader.style.display = 'none';
    
    content.classList.add('loaded');
  }, 1500); 
});
