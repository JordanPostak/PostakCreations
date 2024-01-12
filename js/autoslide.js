// Auto-rotating carousel
let currentIndex = 0;

function showSlide(index) {
    const container = document.querySelector('.slideshow-container');
    container.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % document.querySelectorAll('.slide').length;
    showSlide(currentIndex);
}

setInterval(nextSlide, 6000); // Change slide every 6 seconds