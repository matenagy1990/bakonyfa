// Gallery script
const galleryImages = document.querySelectorAll('.gallery img');
let currentImageIndex = 0;

function showImages(index) {
    galleryImages.forEach((img, i) => {
        img.classList.toggle('active', i >= index && i < index + 3);
    });
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    if (currentImageIndex + 3 > galleryImages.length) {
        currentImageIndex = 0;
    }
    showImages(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 3;
    }
    showImages(currentImageIndex);
}

// Initial display
showImages(currentImageIndex);

document.querySelector('.gallery-container').insertAdjacentHTML('beforeend', `
    <div class="gallery-controls">
        <button class="gallery-nav" onclick="prevImage()">&#10094;</button>
        <button class="gallery-nav" onclick="nextImage()">&#10095;</button>
    </div>
`);
