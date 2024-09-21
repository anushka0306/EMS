document.addEventListener('DOMContentLoaded', () => {
    // Handle adding services for vendors
    const addServiceForm = document.getElementById('addServiceForm');
    const servicesContainer = document.getElementById('servicesContainer');

    // Handle Home button
 window.goHome = function () {
    window.location.href = 'index.html'; // Redirect to index
};

// Handle Home button
window.goback = function () {
    window.location.href = 'vendor-login.html';
};

    addServiceForm?.addEventListener('submit', function (e) {
        e.preventDefault();
        const serviceName = document.getElementById('serviceName').value;
        const servicePrice = document.getElementById('servicePrice').value;

        // Create a new service card
        const serviceCard = document.createElement('div');
        serviceCard.classList.add('service-card');

        // Add content to the service card
        serviceCard.innerHTML = `
            <h3>${serviceName}</h3>
            <p>Price: $${servicePrice}</p>
        `;

        // Append the new service card to the services container
        servicesContainer.appendChild(serviceCard);

        // Clear the form
        addServiceForm.reset();
        
        alert('Service added successfully');
    });
});
