const signup_page = document.getElementById("signup_page");
const signup_btn = document.getElementById("signup_btn");
const verify_email_page = document.getElementById("verify_email_page");
const verify_email_btn = document.getElementById("verify_email_btn");
const email_verified_page = document.getElementById("email_verified_page");
const email_verified_btn = document.getElementById("email_verified_btn");
const success_page = document.getElementById("success_page");
const success_btn = document.getElementById("success_btn");
const password_page = document.getElementById("password_page");
const password_btn = document.getElementById("password_btn");
const login_page = document.getElementById("login_page");
const login_btn = document.getElementById("login_btn");

signup_btn.onclick = () => {
  verify_email_page.style.display = "flex";
  signup_page.style.display = "none";
};

verify_email_btn.onclick = () => {
  email_verified_page.style.display = "flex";
  verify_email_page.style.display = "none";
};

email_verified_btn.onclick = () => {
  password_page.style.display = "flex";
  email_verified_page.style.display = "none";
};

password_btn.onclick = () => {
  success_page.style.display = "flex";
  password_page.style.display = "none";
};

success_btn.onclick = () => {
  login_page.style.display = "flex";
  success_page.style.display = "none";
};

document.addEventListener("DOMContentLoaded", function () {
  // Function to toggle password visibility
  function togglePassword(buttonId, inputId) {
    const toggleButton = document.getElementById(buttonId);
    const passwordInput = document.getElementById(inputId);

    toggleButton.addEventListener("click", function () {
      // Check if the password is currently visible
      const isPasswordVisible = passwordInput.type === "text";

      // Toggle the input type
      passwordInput.type = isPasswordVisible ? "password" : "text";

      // Toggle the icon visibility
      const eyeIcon = this.querySelector(".fa-eye");
      const eyeSlashIcon = this.querySelector(".fa-eye-slash");
      if (isPasswordVisible) {
        eyeIcon.style.display = "inline";
        eyeSlashIcon.style.display = "none";
      } else {
        eyeIcon.style.display = "none";
        eyeSlashIcon.style.display = "inline";
      }
    });
  }

  // Initialize the toggle functionality for both fields
  togglePassword("toggle-password", "password");
  togglePassword("toggle-confirm-password", "confirm_password");
  togglePassword("toggle-password-login", "password_login_input");
});
