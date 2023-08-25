// COURSES
document.addEventListener("DOMContentLoaded", function () {
    const penIcons = document.querySelectorAll(".fas.fa-pen");
    const modal = document.querySelector(".modal");
    const closeButton = document.querySelector(".close-button");
    const titleInput = document.getElementById("table-title");
    const categoryInput = document.getElementById("table-category");
    const subcategoryInput = document.getElementById("table-subcategory");
    const descriptionInput = document.getElementById("table-description");
    const imageSrcInput = document.getElementById("table-image-src");

    function openModal(event) {
        modal.style.display = "block";

        const tableRow = event.target.closest("tr");
        const tds = tableRow.querySelectorAll("td");


        // Assuming the image source is stored in the 'src' attribute of the <img> element
        const imageSrc = tds[0].querySelector("img").getAttribute("src");
        const title = tds[1].textContent;
        const category = tds[2].textContent;
        const subcategory = tds[3].textContent;
        const description = tds[4].textContent;


        imageSrcInput.value = imageSrc;
        titleInput.value = title;
        categoryInput.value = category;
        subcategoryInput.value = subcategory;
        descriptionInput.value = description;
    }

    function closeModal() {
        modal.style.display = "none";
    }

    penIcons.forEach((icon) => {
        icon.addEventListener("click", openModal);
    });

    closeButton.addEventListener("click", closeModal);

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});

// HEALTH-TIPS
document.addEventListener("DOMContentLoaded", function () {
    const penIcons = document.querySelectorAll(".fas.fa-pen");
    const modal = document.querySelector(".modal");
    const closeButton = document.querySelector(".close-button");
    const titleInputHealth = document.getElementById("table-title-health");
    const catInputHealth = document.getElementById("table-category-health");
    const subcategoryInputStatus = document.getElementById("table-status");
    const descInputHealth = document.getElementById("table-description-health");

    function openModal(event) {
        modal.style.display = "block";

        const tableRow = event.target.closest("tr");
        const tds = tableRow.querySelectorAll("td");


        const health = tds[0].textContent;
        const category = tds[1].textContent;
        const status = tds[2].textContent;
        const description = tds[3].textContent;


        titleInputHealth.value = health;
        catInputHealth.value = category;
        subcategoryInputStatus.value = status;
        descInputHealth.value = description;
    }

    function closeModal() {
        modal.style.display = "none";
    }

    penIcons.forEach((icon) => {
        icon.addEventListener("click", openModal);
    });

    closeButton.addEventListener("click", closeModal);

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});


// RECOMMENDATION AND WEIGHT LOSS
document.addEventListener("DOMContentLoaded", function () {
    const penIcons = document.querySelectorAll(".fas.fa-pen");
    const modal = document.querySelector(".modal");
    const closeButton = document.querySelector(".close-button");
    const titleInputReco = document.getElementById("table-title-reco");
    const catInputReco = document.getElementById("table-cat-reco");
    const descInputReco = document.getElementById("table-desc-reco");
    const imgInputReco = document.getElementById("table-image-src");

    function openModal(event) {
        modal.style.display = "block";

        const tableRow = event.target.closest("tr");
        const tds = tableRow.querySelectorAll("td");


        const title = tds[0].textContent;
        const categories = tds[2].textContent;
        const description = tds[3].textContent;
        const image = tds[1].querySelector("img").getAttribute("src");


        titleInputReco.value = title;
        catInputReco.value = categories;
        descInputReco.value = description;
        imgInputReco.value = image;
    }

    function closeModal() {
        modal.style.display = "none";
    }

    penIcons.forEach((icon) => {
        icon.addEventListener("click", openModal);
    });

    closeButton.addEventListener("click", closeModal);

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});

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
document.addEventListener("DOMContentLoaded", function () {
    // Get all the trash icons
    const trashIcons = document.querySelectorAll(".fas.fa-regular.fa-trash");

    // Function to remove the table row when trash icon is clicked
    function removeTableRow(event) {
        const trashIcon = event.target;
        const tableRow = trashIcon.closest("tr");
        if (confirm("Are you sure you want to delete?") == true) {
            tableRow.remove();
        } else {
            console.log('You cancelled');
        }
    }

    // Add click event listener to each trash icon
    trashIcons.forEach((icon) => {
      icon.addEventListener("click", removeTableRow);
    });
});