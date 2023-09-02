// const myWidget = cloudinary.createUploadWidget({
//     cloudName: 'mosco-cloud', 
//     uploadPreset: 'uw-test'}, (error, result) => { 
//         if (!error && result && result.event === "success") { 
//             console.log('Done! Here is the image info: ', result.info); 
//             console.log('Done! Here is the image url: ', result.info.secure_url); 
//         } else {
//             console.log('error:', error)
//         }
//     }
// );

// document.getElementById("add").addEventListener("click", function(){
//     myWidget.open();
// }, false);


const modal = document.getElementById('modal');
const form = document.getElementById('admin-form');
const emailInput = document.getElementById('admin-email');
const levelInput = document.getElementById('admin-level');
const passwordInput = document.getElementById('admin-pwd');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const apiUrl = 'https://embraceher.onrender.com/api/v1/admin/register';
    const email = emailInput.value;
    const level = levelInput.value;
    const password = passwordInput.value;

    const requestBody = {
        email,
        level,
        password
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Admin registration successful:', data);
        // clear form
        document.getElementById('admin-email').value = '';
        document.getElementById('admin-level').value = '';
        document.getElementById('admin-pwd').value = '';

        alert('Admin has been registered successfully');

        modal.style.display = 'none';
    })
    .catch(error => {
        console.error('Admin registration failed:', error);
    });
});
