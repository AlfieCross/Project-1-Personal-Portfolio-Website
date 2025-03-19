// Wait for the page to fully load before running the script
document.addEventListener("DOMContentLoaded", function () {

    // Get the sidebar element
    const sidebar = document.querySelector(".sidebar");

    // Create a button element for the menu toggle
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "☰"; // This is the menu icon
    toggleButton.className = "sidebar-toggle"; // Add a class for styling

    // Add the button at the top of the page
    document.body.prepend(toggleButton);

    // When the button is clicked, show or hide the sidebar
    toggleButton.addEventListener("click", function () {
        sidebar.classList.toggle("active"); // Adds or removes the "active" class
    });

});