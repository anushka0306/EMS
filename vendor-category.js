document.addEventListener('DOMContentLoaded', () => {
    // Get category from URL or passed parameter (mocked for now)
    const category = "Catering";  // This should be dynamically passed based on the selected category
    
    // Update page title and header based on the selected category
    document.getElementById('pageTitle').textContent = `Vendors in ${category}`;
    document.getElementById('vendorTitle').textContent = `Vendors in ${category}`;
    
    // Example list of vendors (mocked)
    const vendors = [
        { name: "John", contact: "123-456-7890", category: "Catering" },
        { name: "Best Decorators", contact: "987-654-3210", category: "Decoration" }
    ];

    // Filter vendors by selected category
    const filteredVendors = vendors.filter(vendor => vendor.category === category);

    const vendorContainer = document.getElementById('vendorContainer');
    
    // If no vendors found, show "Page Under Maintenance" popup
    if (filteredVendors.length === 0) {
        showPopup('PAGE UNDER MAINTENANCE');
    } else {
        // Create vendor service cards
        filteredVendors.forEach(vendor => {
            const vendorCard = document.createElement('div');
            vendorCard.classList.add('vendor-card');
            vendorCard.innerHTML = `
                <h3>${vendor.name}</h3>
                <p>Contact: ${vendor.contact}</p>
                <button onclick="shopItems('${vendor.name}', '${category}')">Shop Items</button>
            `;
            vendorContainer.appendChild(vendorCard);
        });
    }

    // Function to redirect to the vendor shop page
    window.shopItems = function (vendorName, category) {
        console.log(`Shop Items clicked for Vendor: ${JohnsCatering}, Category: ${catering}`); // Debugging

        // Construct the URL for redirection
        const redirectUrl = `vendor-shop.html?vendor=${encodeURIComponent(John)}&category=${encodeURIComponent(catering)}`;
        console.log(`Redirecting to: ${redirectUrl}`); // Debugging

        // Redirect to vendor shop page
        window.location.href = redirectUrl;
    };

    // Handle Home button
    window.goHome = function () {
        window.location.href = 'user-dashboard.html';
    };

    // Handle Logout button
    window.logout = function () {
        window.location.href = 'user-login.html';
    };

    // Show popup for "Page Under Maintenance"
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
});
