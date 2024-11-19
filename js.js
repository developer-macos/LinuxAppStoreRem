let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    const offset = -currentIndex * 100; // Move by 100% of the slide width
    document.getElementById('carouselInner').style.transform = `translateX(${offset}%)`;
}