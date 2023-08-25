// Function to handle focus and blur events for input elements
function handleInputFocusBlur(inputElement, iconElement) {
    inputElement.addEventListener('focus', () => {
        iconElement.style.color = '#13A7E7';
    });

    inputElement.addEventListener('blur', () => {
        iconElement.style.color = 'unset';
    });
}

// Call the function for the 'ad-input' element and 'ad-user' label
const adInput = document.getElementById('ad-input');
const adUserIcon = document.getElementById('ad-user');
handleInputFocusBlur(adInput, adUserIcon);

// Call the function for the 'ad-lock' element and 'lock' label
const adLock = document.getElementById('ad-lock');
const lockIcon = document.getElementById('lock');
handleInputFocusBlur(adLock, lockIcon);


const loginForm = document.getElementById('login-form');

const loginButton = document.getElementById('login');
const loginButtonText = loginButton.textContent;

loginForm.addEventListener('submit', (event) => {
    // Prevent form submission
    event.preventDefault();

    // Disable the button and change text to "Logging in..."
    loginButton.disabled = true;
    loginButton.textContent = 'Logging in...';

    // Get the values of the input fields
    let email = document.getElementById('ad-input').value;
    let password = document.getElementById('ad-lock').value;

    const apiUrl = "https://embraceher.onrender.com";
    const endpoint = "/api/v1/admin/login";
    const url = apiUrl + endpoint;

    console.log(url);

    // Sample login data
    const loginData = {
        email: email,
        password: password
    };

    console.log(loginData);

    // Make the POST request
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
        }
        return response.json();
    })
    .then(user => {
        console.log("Login Response:", user);
        console.log("User Token:", user.token);
        
        // Clear email and password fields
        document.getElementById('ad-input').value = '';
        document.getElementById('ad-lock').value = '';

        // Restore the button state after login
        loginButton.disabled = false;
        loginButton.textContent = loginButtonText;
        
        // Get the user's token
        const token = user.token;

        // Redirect to another page and pass the token as a query parameter
        window.location.href = `dashboard.html?token=${token}`;
    })
    .catch(error => {
        console.error("Error:", error);
        // Restore the button state after error
        loginButton.disabled = false;
        loginButton.textContent = loginButtonText;
    });
})