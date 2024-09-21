document.addEventListener('DOMContentLoaded', () => {
    // Handle Vendor Dropdown Selection
    const vendorLinks = document.querySelectorAll('#vendorDropdown a');

    
    
    vendorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = e.target.getAttribute('data-category');
            // Redirect user to the vendor category page
            redirectToVendorCategory(category);
        });
    });

    

    // Function to redirect to the selected vendor category page
    function redirectToVendorCategory(category) {
        const validCategories = ['Catering', 'Decoration', 'Lighting', 'Florist'];
        
        // Check if the category is valid
        if (validCategories.includes(category)) {
            // Redirect to the vendor category page
            window.location.href = `vendor-category.html?category=${category}`;
        } else {
            showPopup('Page not Found');
        }
    }

    // Handle redirection for other options
    window.redirectToPage = function (page) {
        const validPages = ['cart', 'guest-list', 'order-status'];

        if (validPages.includes(page)) {
            window.location.href = `${page}.html`;
        } else {
            showPopup('Page not Found');
        }
    };

    // Show "Page Not Found" popup
    function showPopup(message) {
        const popup = document.createElement('div');
        popup.className = 'popup';
        popup.innerHTML = `
            <h2>${message}</h2>
            <button onclick="closePopup()">OK</button>
        `;
        document.body.appendChild(popup);
        popup.style.display = 'block';
    }

    // Close the popup
    window.closePopup = function () {
        const popup = document.querySelector('.popup');
        if (popup) {
            popup.remove();
        }
    };

    // Handle Logout
    window.goHome = function () {
        window.location.href = 'index.html';
    };

    // Handle Logout
    window.orderstatus = function () {
        window.location.href = 'update.html';
    };

    // Handle Logout
    window.cart = function () {
        window.location.href = 'cart.html';

    };


    // Handle Logout
    window.logout = function () {
        window.location.href = 'user-login.html';
    };
});

