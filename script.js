document.addEventListener("DOMContentLoaded", function () {
  // Get elements by ID
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const rememberCheckbox = document.getElementById("checkbox");
  const submitBtn = document.getElementById("submit");
  const existingBtn = document.getElementById("existing");

  // Check if all required elements exist
  if (!usernameInput || !passwordInput || !rememberCheckbox || !submitBtn || !existingBtn) {
    console.error("One or more required elements not found in the DOM.");
    return;
  }

  // Initially hide the "Login as existing user" button
  existingBtn.style.display = "none";

  // Check on page load if credentials are saved
  const savedUsername = localStorage.getItem("savedUsername");
  const savedPassword = localStorage.getItem("savedPassword");

  if (savedUsername && savedPassword) {
    existingBtn.style.display = "block";
  }

  // Handle form submission
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const rememberMe = rememberCheckbox.checked;

    alert(`Logged in as ${username}`);

    if (rememberMe) {
      localStorage.setItem("savedUsername", username);
      localStorage.setItem("savedPassword", password);
      existingBtn.style.display = "block";
    } else {
      localStorage.removeItem("savedUsername");
      localStorage.removeItem("savedPassword");
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
