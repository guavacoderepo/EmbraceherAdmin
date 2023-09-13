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



// ADD modal
document.addEventListener("DOMContentLoaded", function () {
    const addAny = document.getElementById("add");
    const modal2 = document.querySelector(".modal2");
    const closeButton2 = document.querySelector(".close-button2");

    function openModal2() {
        console.log("Opening modal");
        modal2.style.display = "block";
    }

    function closeModal2() {
        console.log("Closing modal");
        modal2.style.display = "none";
    }

    addAny.addEventListener("click", openModal2);

    closeButton2.addEventListener("click", closeModal2);

    window.addEventListener("click", function (event) {
        if (event.target === modal2) {
            closeModal2();
        }
    });
});