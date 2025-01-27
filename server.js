const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/images', (req, res) => {
    const galleryFolder = path.join(__dirname, 'public/images/gallery');
    console.log('Gallery folder path:', galleryFolder);

    fs.readdir(galleryFolder, (err, files) => {
        if (err) {
            console.error('Error reading gallery folder:', err);
            return res.status(500).json({ error: 'Failed to load images' });
        }

        // Filter for image files only (e.g., .jpg, .png, .gif)
        const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif|jfif)$/i.test(file));

        // Construct URLs for images (relative to public folder)
        const imagePaths = imageFiles.map(file => `/images/gallery/${file}`);
        res.json(imagePaths); // Send image paths as relative URLs
    });
});


// Set up the main route to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
