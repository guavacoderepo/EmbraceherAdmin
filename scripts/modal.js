// ADMIN modal
document.addEventListener("DOMContentLoaded", function () {
    const addAdmin = document.getElementById("admin-btn");
    const modal = document.querySelector("#modal");
    const closeButton = document.querySelector("#close-button");

    function openModal() {
        modal.style.display = "block";
    }

    function closeModal() {
        modal.style.display = "none";
    }

    addAdmin.addEventListener("click", openModal);

    closeButton.addEventListener("click", closeModal);

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});



// Code applied on the trash icons to delete a table row
// document.addEventListener("DOMContentLoaded", function () {
//     // Get all the trash icons
//     const trashIcons = document.querySelectorAll(".fas.fa-regular.fa-trash");

//     // Function to remove the table row when trash icon is clicked
//     function removeTableRow(event) {
//         const trashIcon = event.target;
//         const tableRow = trashIcon.closest("tr");
//         if (confirm("Are you sure you want to delete?") == true) {
//             tableRow.remove();
//         } else {
//             console.log('You cancelled');
//         }
//     }

//     // Add click event listener to each trash icon
//     trashIcons.forEach((icon) => {
//       icon.addEventListener("click", removeTableRow);
//     });
// });