// Open the lightbox
function openLightbox(imageElement) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");

    lightbox.style.display = "flex"; // Show the lightbox
    lightboxImage.src = imageElement.src; // Set clicked image as lightbox content
}

// Close the lightbox
function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none"; // Hide the lightbox
}
