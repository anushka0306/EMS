document.addEventListener('DOMContentLoaded', () => {
    // Home button click handler
    const homeButton = document.querySelector('.btn');
    homeButton.addEventListener('click', () => {
        window.location.href = 'user-dashboard.html'; // Redirect to the user dashboard
    });

    // Logout button click handler
    const logoutButton = document.querySelector('.logout');
    logoutButton.addEventListener('click', () => {
        alert('Logging out...');
        window.location.href = 'user-login.html'; // Redirect to the login page
    });

    // Update button click handler
    const updateButton = document.querySelector('.update-btn');
    updateButton.addEventListener('click', () => {
        alert('Order status updated successfully!');
        // You can add logic here to handle order status updates (e.g., sending data to the server)
    });

    // Status button click handlers
    const statusButtons = document.querySelectorAll('.status-item .btn');
    statusButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            alert(`Order status set to: ${e.target.textContent}`);
            // Additional functionality for status change can be added here
        });
    });
});
