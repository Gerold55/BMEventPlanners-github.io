document.addEventListener('DOMContentLoaded', function () {
    const slideContainer = document.querySelector('.slide-container');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-slide-btn');
    const nextBtn = document.querySelector('.next-slide-btn');
    let slideIndex = 0;

    // Function to show current slide
    function showSlide() {
        slides.forEach((slide, index) => {
            slide.style.display = index === slideIndex ? 'block' : 'none';
        });
    }

    // Event listener for previous button
    prevBtn.addEventListener('click', function () {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        showSlide();
    });

    // Event listener for next button
    nextBtn.addEventListener('click', function () {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide();
    });

    // Show initial slide
    showSlide();
});

