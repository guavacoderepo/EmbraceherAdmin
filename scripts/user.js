document.addEventListener("DOMContentLoaded", function () {
    // Get the token from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    console.log("Token from URL:", token);

    // Get the token from localStorage
    const getToken = sessionStorage.getItem('token');

    if (token || getToken) {
        const apiUrl = "https://embraceher.onrender.com";
        const endpoint = "/api/v1/admin/me";
        const url = apiUrl + endpoint;

        fetch(url, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token || getToken}`
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }
            return response.json();
        })
        .then(user => {
            console.log("User Data:", user);
            const adName = document.getElementById('ad-name');
            const adEmail = document.getElementById('ad-email');

            // Store the token in localStorage
            sessionStorage.setItem('token', user.token);

            adName.innerHTML = 'Admin' + ' ' + '<b>' + 'Level' + ' ' + user.data.level + '</b>';
            adEmail.innerHTML = user.data.email;
            adEmail.style.fontSize = '12px';
        })
        .catch(error => {
            console.error("Error:", error);
        });
    } else {
        // If no token is present, route back to the login page
        window.location.href = '/index.html';
    }
});