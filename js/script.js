// Auto Typing Effect Script

var typed = new Typed(".auto-type", {
    strings: [
      "Hey I am Marjan Ahmed  ",
      "Welcome!, To My Official Website",
    ],
    typeSpeed: 90,
    backSpeed: 50,
    loop: true,
  });

// Loading effect

  document.addEventListener("DOMContentLoaded", function() {
  const loader = document.getElementById('loader');
  const content = document.getElementById('content');

  // Show loader initially
  loader.style.display = 'flex';

  // Simulate content loading delay (you can remove this in production)
  setTimeout(function() {
    // Hide loader
    loader.style.display = 'none';
    // Show content
    content.classList.add('loaded');
  }, 1500); // Adjust the timeout duration as needed
});
