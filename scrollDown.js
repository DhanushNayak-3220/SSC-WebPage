// Get references to the header and footer
const header = document.querySelector('header');
const footer = document.querySelector('footer');

// Store the last scroll position
let lastScrollTop = 0;

// Function to handle scroll event
window.addEventListener('scroll', function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // If we are scrolling down
    if (currentScroll > lastScrollTop) {
        // Scroll down: hide header and footer
        header.style.transform = 'translateY(-100%)';
        footer.style.transform = 'translateY(100%)';
    } else {
        // Scroll up: show header and footer
        header.style.transform = 'translateY(0)';
        footer.style.transform = 'translateY(0)';
    }

    // Update the last scroll position
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}, false);
