document.addEventListener('DOMContentLoaded', () => {
    const categoryFilter = document.getElementById('category-filter');
    const priceRange = document.getElementById('price-range');
    const priceDisplay = document.getElementById('price-display');
    const products = document.querySelectorAll('.product-card');

    // Update price display when range input changes
    priceRange.addEventListener('input', function() {
        priceDisplay.textContent = `$${this.value}`;
        filterProducts();
    });

    // Filter products by category and price
    categoryFilter.addEventListener('change', filterProducts);

    function filterProducts() {
        const selectedCategory = categoryFilter.value;
        const maxPrice = parseInt(priceRange.value);

        products.forEach(product => {
            const productCategory = product.getAttribute('data-category');
            const productPrice = parseInt(product.getAttribute('data-price'));

            // Show products matching both category and price range
            if ((selectedCategory === 'all' || productCategory === selectedCategory) && productPrice <= maxPrice) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }
});
