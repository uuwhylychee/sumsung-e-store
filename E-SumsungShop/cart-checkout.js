document.addEventListener('DOMContentLoaded', function () {
    const checkoutBtn = document.querySelector('.checkout-btn');
    const checkoutSection = document.getElementById('checkout-section');
    const cartItems = document.querySelector('#cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Function to update total price based on quantities
    function updateTotal() {
        let total = 0;
        const rows = document.querySelectorAll('#cart-items tr');
        rows.forEach(row => {
            const price = parseFloat(row.querySelector('.item-price').dataset.price);
            const qty = parseInt(row.querySelector('.item-qty').value);
            total += price * qty;
        });
        cartTotal.textContent = `$${total.toFixed(2)}`;
    }

    // Event listener to handle quantity change
    cartItems.addEventListener('input', function (e) {
        if (e.target.classList.contains('item-qty')) {
            updateTotal(); // Recalculate total when quantity is updated
        }
    });

    // Event listener to handle item removal
    cartItems.addEventListener('click', function (e) {
        if (e.target.classList.contains('remove-item')) {
            const row = e.target.closest('tr');
            row.remove(); // Remove the item row
            updateTotal(); // Recalculate total after item is removed
        }
    });

    // Show the checkout form when "Proceed to Checkout" is clicked
    checkoutBtn.addEventListener('click', function () {
        checkoutSection.style.display = 'block';
        window.scrollTo(0, checkoutSection.offsetTop); // Scroll to the checkout form
    });

    // Initial call to update the total price
    updateTotal();
});
