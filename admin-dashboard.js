document.addEventListener('DOMContentLoaded', () => {
    // Home button click handler
    const homeButton = document.querySelector('.top-left');
    homeButton.addEventListener('click', () => {
        window.location.href = 'index.html'; // Redirect to the index.html page
    });

    // Logout button click handler
    const logoutButton = document.querySelector('.top-right');
    logoutButton.addEventListener('click', () => {
        alert('Logging out...');
        window.location.href = 'admin-login.html'; // Redirect to the admin login page
    });

    // Maintain User button click handler
    const maintainUserButton = document.querySelector('.bottom-left');
    maintainUserButton.addEventListener('click', () => {
        window.location.href = 'maintain.html'; // Redirect to the maintain.html page
    });

    // Maintain Vendor button click handler
    const maintainVendorButton = document.querySelector('.bottom-right');
    maintainVendorButton.addEventListener('click', () => {
        alert('Redirecting to Maintain Vendor page');
        // Add redirection or logic for Maintain Vendor here
    });
});
