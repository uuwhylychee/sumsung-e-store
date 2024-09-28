// Select all add-to-cart buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

// Attach click event listeners to all buttons
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        alert(`${product} has been added to your cart!`);
        // You can expand this with actual cart functionality
    });
});
