document.addEventListener('DOMContentLoaded', () => {
    console.log("BharatiVaR website loaded successfully");
});


function adjustImageSize(size) {
    // Select all images with the class 'product-image'
    const images = document.querySelectorAll('.product-image');
    
    // Set the width of each image based on the slider value
    images.forEach(img => {
        img.style.width = size + 'px';
    });
}

// scripts.js

function searchProducts() {
    // Get the search input value
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    
    // Get all product items (you'll need to adjust the selector based on your actual HTML structure)
    const productItems = document.querySelectorAll('#product-grid .product-item');
    
    // Loop through all product items
    productItems.forEach(item => {
        // Get the product name and description
        const productName = item.querySelector('h3').textContent.toLowerCase();
        const productDescription = item.querySelector('p').textContent.toLowerCase();
        
        // Check if the search input matches either the name or description
        if (productName.includes(searchInput) || productDescription.includes(searchInput)) {
            item.style.display = ''; // Show item
        } else {
            item.style.display = 'none'; // Hide item
        }
    });
}
