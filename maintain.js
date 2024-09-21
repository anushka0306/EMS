document.addEventListener('DOMContentLoaded', () => {
    // Home button click handler
    const homeButton = document.querySelector('.header .button');
    homeButton.addEventListener('click', () => {
        window.location.href = 'admin-dashboard.html'; // Redirect to the admin dashboard
    });

    // Logout button click handler
    const logoutButton = document.querySelector('.header .logout');
    logoutButton.addEventListener('click', () => {
        alert('Logging out...');
        window.location.href = 'admin-login.html'; // Redirect to the admin login page
    });

    // Membership button click handler
    const membershipButton = document.querySelector('.sidebar .button:nth-child(1)');
    membershipButton.addEventListener('click', () => {
        alert('Membership section clicked');
        // You can add redirection or actions for Membership here
    });

    // User Management button click handler
    const userManagementButton = document.querySelector('.sidebar .button:nth-child(2)');
    userManagementButton.addEventListener('click', () => {
        alert('User Management section clicked');
        // You can add redirection or actions for User Management here
    });

    // Add and Update buttons in the main section (you can modify as needed)
    const addButtons = document.querySelectorAll('.main .section .button:nth-child(1)');
    const updateButtons = document.querySelectorAll('.main .section .button:nth-child(2)');

    addButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Add button clicked');
            // You can add logic for Add functionality here
        });
    });

    updateButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Update button clicked');
            // You can add logic for Update functionality here
        });
    });
});
