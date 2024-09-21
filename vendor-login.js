document.addEventListener('DOMContentLoaded', () => {
    const vendorLoginForm = document.getElementById('vendorLoginForm');

    // Handle form submission
    vendorLoginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form submission (since there's no backend for now)

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Simple validation (you can add more logic if needed)
        if (email && password) {
            // Simulate successful login and redirect to vendor dashboard
            alert('Logged in successfully');
            window.location.href = 'vendor-dashboard.html'; // Redirect to vendor dashboard
        } else {
            alert('Please fill in both fields');
        }
    });

    // Handle Logout
    window.goHome = function () {
        window.location.href = 'index.html';
    };
});
