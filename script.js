// Register a new user
const signupForm = document.getElementById('signupForm');
signupForm?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
    const role = document.getElementById('signupRole').value;

    fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password, role })
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        window.location.href = 'index.html';
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

// Login functionality
const loginForm = document.getElementById('adminForm') || document.getElementById('vendorForm') || document.getElementById('userForm');
loginForm?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = loginForm.querySelector('input[type="text"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Login failed');
        }
    })
    .then(data => {
        alert(data.message);
        if (data.role === 'admin') window.location.href = 'admin-dashboard.html';
        else if (data.role === 'vendor') window.location.href = 'vendor-dashboard.html';
        else window.location.href = 'user-dashboard.html';
    })
    .catch(error => {
        alert('Login failed. Please check your credentials.');
        console.error('Error:', error);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Handle adding new events
    const addEventForm = document.getElementById('addEventForm');
    addEventForm?.addEventListener('submit', function (e) {
        e.preventDefault();
        const eventName = document.getElementById('eventName').value;
        const eventDate = document.getElementById('eventDate').value;
        const eventLocation = document.getElementById('eventLocation').value;

        fetch('http://localhost:3000/add-event', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ eventName, eventDate, eventLocation })
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            loadEvents();  // Reload events after adding
        })
        .catch(error => {
            alert('Failed to add event');
            console.error('Error:', error);
        });
    });

    // Load current events
    function loadEvents() {
        fetch('http://localhost:3000/events')
        .then(response => response.json())
        .then(events => {
            const eventsList = document.getElementById('eventsList');
            eventsList.innerHTML = '';
            events.forEach(event => {
                const li = document.createElement('li');
                li.textContent = `${event.event_name} - ${event.event_date} - ${event.event_location}`;
                eventsList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    // Load events on page load
    loadEvents();
});

document.addEventListener('DOMContentLoaded', () => {
    // Handle adding services for vendors
    const addServiceForm = document.getElementById('addServiceForm');
    addServiceForm?.addEventListener('submit', function (e) {
        e.preventDefault();
        const serviceName = document.getElementById('serviceName').value;
        const servicePrice = document.getElementById('servicePrice').value;

        // Display service in the list (for now, we'll do it locally)
        const servicesList = document.getElementById('servicesList');
        const li = document.createElement('li');
        li.textContent = `${serviceName} - $${servicePrice}`;
        servicesList.appendChild(li);

        alert('Service added successfully');
    });

    // Handle event booking for users
    const bookEventForm = document.getElementById('bookEventForm');
    bookEventForm?.addEventListener('submit', function (e) {
        e.preventDefault();
        const selectedEvent = document.getElementById('eventSelect').value;

        alert(`You have booked the event: ${selectedEvent}`);
    });

    // Simulate loading events for users
    function loadEvents() {
        const eventsList = document.getElementById('eventsList');
        const eventSelect = document.getElementById('eventSelect');

        const events = [
            { name: 'Wedding Expo', date: '2024-09-20' },
            { name: 'Corporate Meetup', date: '2024-09-22' },
        ];

        events.forEach(event => {
            const li = document.createElement('li');
            li.textContent = `${event.name} - ${event.date}`;
            eventsList.appendChild(li);

            const option = document.createElement('option');
            option.value = event.name;
            option.textContent = event.name;
            eventSelect.appendChild(option);
        });
    }

    // Load events for user dashboard
    loadEvents();
});


document.addEventListener('DOMContentLoaded', () => {
    // Admin Sign-Up
    const adminSignupForm = document.getElementById('adminSignupForm');
    adminSignupForm?.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('adminName').value;
        const email = document.getElementById('adminEmail').value;
        const password = document.getElementById('adminPassword').value;
        const category = document.getElementById('category').value;

        // For now, just simulate successful sign-up and redirect
        alert('Admin signed up successfully');
        window.location.href = 'admin-dashboard.html'; // Redirect to admin dashboard
    });

    // User Sign-Up
    const userSignupForm = document.getElementById('userSignupForm');
    userSignupForm?.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('userName').value;
        const email = document.getElementById('userEmail').value;
        const password = document.getElementById('userPassword').value;

        alert('User signed up successfully');
        window.location.href = 'user-dashboard.html'; // Redirect to user dashboard
    });

    // Vendor Sign-Up
    const vendorSignupForm = document.getElementById('vendorSignupForm');
    vendorSignupForm?.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('vendorName').value;
        const email = document.getElementById('vendorEmail').value;
        const password = document.getElementById('vendorPassword').value;

        alert('Vendor signed up successfully');
        window.location.href = 'vendor-dashboard.html'; // Redirect to vendor dashboard
    });
});

 // Handle Home button
 window.goHome = function () {
    window.location.href = 'index.html'; // Redirect to index
};

// Handle Home button
window.logout= function () {
    window.location.href = 'admin-login.html'; // Redirect to index
};