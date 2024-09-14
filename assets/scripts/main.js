var gallery = document.querySelector('#gallery');

// Helper functions
var getVal = function (elem, style) { 
    return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); 
};

var getHeight = function (item) { 
    return item.querySelector('.content').getBoundingClientRect().height; 
};

// Function to resize all gallery items
var resizeAll = function () {
    var altura = getVal(gallery, 'grid-auto-rows');
    var gap = getVal(gallery, 'grid-row-gap');
    gallery.querySelectorAll('.gallery-item').forEach(function (item) {
        var el = item;
        el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
    });
};

// Function to handle image loading and resizing
gallery.querySelectorAll('img').forEach(function (item) {
    if (!item.complete) {
        item.classList.add('byebye');
        item.addEventListener('load', function () {
            item.classList.remove('byebye');
            var altura = getVal(gallery, 'grid-auto-rows');
            var gap = getVal(gallery, 'grid-row-gap');
            var gitem = item.closest('.gallery-item');
            gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
        });
    } else {
        console.log(item.src); // Log loaded image src
    }
});

// Function to open lightbox
function setupLightbox() {
    document.querySelectorAll('.gallery-item img').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelector('.lightbox-content').src = this.src;
            document.querySelector('#lightbox').style.display = 'flex';
            document.querySelector('#caption').innerHTML = this.alt;
        });
    });
}

// Function to close lightbox
function closeLightbox() {
    document.querySelector('#lightbox').style.display = 'none';
}

// Resize gallery items on window resize
window.addEventListener('resize', resizeAll);

// Initialize gallery and lightbox on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    resizeAll(); // Initial resize of gallery items
    setupLightbox(); // Setup lightbox functionality

    // Adjust grid spans based on image dimensions
    gallery.querySelectorAll('.gallery-item img').forEach(item => {
        item.onload = () => {
            const width = item.naturalWidth;
            const height = item.naturalHeight;
            const aspectRatio = width / height;
            const parent = item.closest('.gallery-item');

            if (aspectRatio > 1.5) {
                parent.style.gridColumnEnd = 'span 2';
            }
            if (height > width) {
                parent.style.gridRowEnd = 'span 2';
            }
        };
    });
});

document.querySelectorAll('.gallery-item a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();  // Prevent the default link behavior
        const img = link.querySelector('img');  // Assuming there's an image inside the <a> tag
        if (img) {
            document.querySelector('.lightbox-content').src = img.src;  // Set the source for the lightbox image
            document.querySelector('#lightbox').style.display = 'flex';  // Display the lightbox
            document.querySelector('#caption').innerHTML = img.alt || 'No description available';  // Set the caption if available
        }
    });
});