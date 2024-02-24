document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item img');

    galleryItems.forEach(function (item) {
        item.addEventListener('click', function () {
            const index = parseInt(item.dataset.index);
            openLightbox(index);
        });
    });

    function openLightbox(index) {
        // Create a lightbox/modal element
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        
        // Create an image element inside the lightbox
        const image = document.createElement('img');
        image.src = 'gallery-image-' + index + '.jpg'; // Set the image source based on the clicked index
        lightbox.appendChild(image);

        // Add the lightbox to the document body
        document.body.appendChild(lightbox);

        // Close the lightbox when clicking outside the image
        lightbox.addEventListener('click', function () {
            document.body.removeChild(lightbox);
        });
    }
});

    document.addEventListener("DOMContentLoaded", function() {
        const galleryItems = document.querySelectorAll(".gallery-item");

        galleryItems.forEach(item => {
            item.addEventListener("click", function() {
                const largeImagePath = this.querySelector("img").getAttribute("data-large");
                const modalContent = `<div class="modal-overlay">
                                        <div class="modal-content">
                                            <span class="close-btn">&times;</span>
                                            <img src="${largeImagePath}" alt="Large Image">
                                        </div>
                                    </div>`;
                document.body.insertAdjacentHTML("beforeend", modalContent);

                const modalOverlay = document.querySelector(".modal-overlay");
                const closeButton = document.querySelector(".close-btn");

                modalOverlay.addEventListener("click", function(e) {
                    if (e.target === modalOverlay || e.target === closeButton) {
                        modalOverlay.remove();
                    }
                });
            });
        });
    });
