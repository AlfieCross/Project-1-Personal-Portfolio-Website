// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");

  // Create a button for toggling the sidebar
  const toggleButton = document.createElement("button");
  toggleButton.textContent = "☰"; // Menu icon
  toggleButton.classList.add("sidebar-toggle");
  toggleButton.setAttribute("aria-label", "Toggle sidebar");
  toggleButton.setAttribute("aria-expanded", "false");

  // Insert the button at the beginning of the body
  document.body.prepend(toggleButton);

  // Toggle sidebar visibility on button click
  toggleButton.addEventListener("click", () => {
    const isActive = sidebar.classList.toggle("active");
    toggleButton.setAttribute("aria-expanded", isActive ? "true" : "false");
  });
});
