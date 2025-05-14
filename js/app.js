// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Select the sidebar element
  const sidebar = document.querySelector(".sidebar");

  // Create a button for toggling the sidebar
  const toggleButton = document.createElement("button");
  toggleButton.textContent = "☰"; // Menu icon
  toggleButton.classList.add("sidebar-toggle"); // Add class for styling

  // Insert the button at the beginning of the body
  document.body.prepend(toggleButton);

  // Add event listener to toggle sidebar visibility on button click
  toggleButton.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });
});
