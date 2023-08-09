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