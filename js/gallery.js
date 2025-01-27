document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.getElementById('image-gallery');

    async function loadGalleryImages() {
        try {
            const response = await fetch('/api/images');
            const images = await response.json();

            images.forEach(imagePath => {
                const img = document.createElement('img');
                img.src = imagePath;
                img.alt = 'Gallery Image';
                img.className = 'gallery-image';

                const wrapper = document.createElement('div');
                wrapper.className = 'gallery-item';
                wrapper.appendChild(img);

                gallery.appendChild(wrapper);
            });
        } catch (error) {
            console.error('Error loading gallery images:', error);
            gallery.innerHTML = '<p>Error loading gallery images</p>';
        }
    }

    loadGalleryImages();
});
