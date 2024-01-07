window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var scrollPosition = window.scrollY;
    var sticky = navbar.offsetTop - 100;
  
    // Add a class for sticky navbar
    if (scrollPosition >= sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
  
    // Calculate opacity based on scroll position with a minimum value
    var minimumOpacity = 0.5;
    var opacity = Math.max(minimumOpacity, 1 - (scrollPosition / 300)); // You can adjust the divisor for a faster or slower fade
  
    // Apply the calculated opacity to the background image
    navbar.style.backgroundImage = `linear-gradient(to right, rgba(2, 62, 138, ${opacity}), rgba(2, 62, 138, ${opacity}), rgba(9, 225, 243, ${opacity}))`;
  });