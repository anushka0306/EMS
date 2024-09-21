document.addEventListener('DOMContentLoaded', () => {
    // Load cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartTable = document.querySelector('.cart-table');
    const totalSection = document.querySelector('.total-section');
    const checkoutButton = document.querySelector('.checkout');

    // Function to render the cart items
    function renderCartItems() {
        // Clear any existing rows except the header
        const rows = cartTable.querySelectorAll('.row:not(.header)');
        rows.forEach(row => row.remove());

        let grandTotal = 0;

        // Loop through cart items and display them
        cartItems.forEach((item, index) => {
            const totalPrice = item.price * item.quantity;
            grandTotal += totalPrice;

            // Create a row for each cart item
            const cartRow = document.createElement('div');
            cartRow.classList.add('row');
            cartRow.innerHTML = `
                <div><img src="${item.image}" alt="${item.name}"></div>
                <div>${item.name}</div>
                <div>${item.price}/-</div>
                <div>${item.quantity}</div>
                <div>${totalPrice}/-</div>
                <div><button class="remove-item" data-index="${index}">Remove</button></div>
            `;
            cartTable.appendChild(cartRow);
        });

        // Update grand total
        totalSection.querySelector('div:last-child').textContent = `${grandTotal}/-`;
    }

    // Function to remove an item from the cart
    function removeCartItem(index) {
        cartItems.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cartItems));
        renderCartItems();
    }

    // Event listener for remove buttons
    cartTable.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-item')) {
            const index = e.target.getAttribute('data-index');
            removeCartItem(index);
        }
    });

    // Event listener for "Delete All" button
    const deleteAllButton = totalSection.querySelector('button');
    deleteAllButton.addEventListener('click', () => {
        localStorage.removeItem('cart');
        cartItems.length = 0; // Clear the cart array
        renderCartItems();
    });

    // Proceed to checkout button (add your logic here)
    checkoutButton.addEventListener('click', () => {
        if (cartItems.length > 0) {
            alert('Proceeding to checkout');
            // Redirect to checkout page or add your checkout logic
        } else {
            alert('Your cart is empty!');
        }
    });

    // Render the cart items when the page loads
    renderCartItems();
});
