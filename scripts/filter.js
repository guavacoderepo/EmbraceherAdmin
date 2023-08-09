document.addEventListener("DOMContentLoaded", function () {
  const filterOptions = document.querySelector(".filter-options");
  const searchInput = document.getElementById("search");

  // Initialize with "all" category
  let currentCategory = "all";

  // Function to reset the styles of all filter buttons
  function resetFilterButtons() {
    const filterButtons = filterOptions.querySelectorAll("button");
    filterButtons.forEach((button) => {
      button.style.backgroundColor = "white";
      button.style.color = "black";
      button.style.border = "0.5px solid lightgray";
    });
  }

  // Function to handle filter button click
  function handleFilterClick(event) {
    resetFilterButtons();
    const selectedButton = event.target;
    selectedButton.style.backgroundColor = "#13A7E7";
    selectedButton.style.color = "white";
    selectedButton.style.border = "none";

    const selectedCategory = selectedButton.id;
    console.log(selectedCategory);
    filterTableRowsByCategory(selectedCategory);
  }

  // Function to filter the table rows based on the selected category
  function filterTableRowsByCategory(category) {
    const tableRows = document.querySelectorAll("table tr");
    for (let i = 1; i < tableRows.length; i++) {
      const row = tableRows[i];
      const rowCategory = row.querySelector("td:nth-child(3)")?.textContent?.toLowerCase().trim();
      if (category === "all" || rowCategory === category) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    }
  }

  let noResultsMessage; // Variable to store the "No Results" message element

  // Function to display a message when no results are found
  function displayNoResultsMessage() {
    if (!noResultsMessage) {
      const table = document.querySelector("table");
      noResultsMessage = document.createElement("span");
      noResultsMessage.textContent = "Sorry, no result(s) match(es) your filter";
      noResultsMessage.classList.add("no-results-message");
      table.appendChild(noResultsMessage);
    }
  }

  // Function to remove the no results message
  function removeNoResultsMessage() {
    if (noResultsMessage) {
      noResultsMessage.remove();
      noResultsMessage = null; // Reset the variable to null
    }
  }

  // Function to filter the table rows based on the current category and search input value
  function filterTableRows() {
    const tableRows = document.querySelectorAll("table tr");
    let hasResults = false; // Flag to track if there are any matching rows

    const searchValue = searchInput.value.toLowerCase().trim();

    tableRows.forEach((row, index) => {
      // Skip the first row - header row
      if (index === 0) {
        return;
      }

      const rowCategory = row.querySelector("td:nth-child(3)")?.textContent?.toLowerCase().trim();
      const rowTitleElement = row.querySelector("td:nth-child(2)");
      if (!rowTitleElement) {
        console.warn("Row does not have a valid title element (td:nth-child(2)).");
        return;
      }

      const rowTitle = rowTitleElement.textContent.toLowerCase().trim();
      const shouldDisplay = (currentCategory === "all" || rowCategory === currentCategory) && rowTitle.includes(searchValue);

      row.style.display = shouldDisplay ? "table-row" : "none";

      if (shouldDisplay) {
        hasResults = true;
      }
    });

    // If no matching rows found, display the no results message
    if (!hasResults && searchValue !== "") {
      displayNoResultsMessage();
    } else {
      removeNoResultsMessage();
    }
  };

  // Add click event listener using event delegation to the filter options
  filterOptions.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      resetFilterButtons();
      handleFilterClick(event);
      currentCategory = event.target.id; // Update the currentCategory based on the clicked button
      filterTableRows();
    }
  });

  // Add input event listener to the search input
  searchInput.addEventListener("input", function () {
    filterTableRows();
  });
});



// FILTER USERS
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-user");

  // Function to filter the table rows based on the search input value
  function filterTableRowsBySearch(inputValue) {
    console.log("Search Value:", inputValue);
    
    const tableRows = document.querySelectorAll("table tr");
    tableRows.forEach((row) => {
      const rowTitleElement = row.querySelector("td:nth-child(1)");
      if (!rowTitleElement) {
        console.warn("Row does not have a valid title element (td:nth-child(1)).");
        return;
      }
      
      const rowTitle = rowTitleElement.textContent.toLowerCase().trim();
      console.log("Row Title:", rowTitle);
      
      if (rowTitle.includes(inputValue.toLowerCase())) {
        row.style.display = "table-row";
      } else {
        row.style.display = "none";
      }
    });
  }

  // Add input event listener to the search input
  searchInput.addEventListener("input", function () {
    const searchValue = this.value.trim();
    console.log("Input Event: ", searchValue);
    
    filterTableRowsBySearch(searchValue);
  });
});