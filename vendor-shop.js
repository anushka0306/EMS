document.addEventListener('DOMContentLoaded', () => {
    // Get vendor and category from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const vendorName = urlParams.get('vendor');
    const category = urlParams.get('category');
    
    // Update shop page title and header
    document.getElementById('shopPageTitle').textContent = `Shop - ${vendorName}`;
    document.getElementById('shopTitle').textContent = `Shop - ${vendorName} (${category})`;
    
    // Example products (mocked)
    const products = [
        { name: "Product 1", price: 20.99 },
        { name: "Product 2", price: 35.50 },
        { name: "Product 3", price: 50.00 },
        { name: "Product 4", price: 15.25 }
    ];

    // Render products as cards
    const productContainer = document.getElementById('productContainer');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Add Product</button>
        `;
        productContainer.appendChild(productCard);
    });

    // Function to add product to cart
    window.addToCart = function (productName, productPrice) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push({ name: productName, price: productPrice });
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${productName} added to cart`);
    };

    // Handle Home button
    window.goHome = function () {
        window.location.href = 'user-dashboard.html';
    };

    // Handle Logout button
    window.logout = function () {
        alert('Logging out');
        window.location.href = 'user-login.html';
    };
});
