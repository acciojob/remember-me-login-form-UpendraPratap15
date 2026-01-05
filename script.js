//your JS code here. If required.
// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get all required elements
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const rememberCheckbox = document.getElementById("checkbox");
  const submitBtn = document.getElementById("submit");
  const existingBtn = document.getElementById("existing");

  // Initially hide the "Login as existing user" button
  existingBtn.style.display = "none";

  // Check on page load if credentials are saved in localStorage
  const savedUsername = localStorage.getItem("savedUsername");
  const savedPassword = localStorage.getItem("savedPassword");

  if (savedUsername && savedPassword) {
    // Show the "Login as existing user" button
    existingBtn.style.display = "block";
  }

  // Handle form submission
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent actual form submission

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const rememberMe = rememberCheckbox.checked;

    // Show login alert
    alert(`Logged in as ${username}`);

    if (rememberMe) {
      // Save credentials to localStorage
      localStorage.setItem("savedUsername", username);
      localStorage.setItem("savedPassword", password);
      // Show the existing user button
      existingBtn.style.display = "block";
    } else {
      // Remove saved credentials if "Remember Me" is unchecked
      localStorage.removeItem("savedUsername");
      localStorage.removeItem("savedPassword");
      // Hide the existing user button
      existingBtn.style.display = "none";
    }
  });

  // Handle "Login as existing user" button click
  existingBtn.addEventListener("click", function () {
    const savedUsername = localStorage.getItem("savedUsername");
    if (savedUsername) {
      alert(`Logged in as ${savedUsername}`);
    }
  });
});
