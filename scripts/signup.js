const signup_page = document.getElementById("signup_page");
const signup_btn = document.getElementById("signup_btn");
const verify_email_page = document.getElementById("verify_email_page");
const verify_email_btn = document.getElementById("verify_email_btn");
const email_verified_page = document.getElementById("email_verified_page");
const email_verified_btn = document.getElementById("email_verified_btn");
const success_page = document.getElementById("success_page");
const success_btn = document.getElementById("success_btn");

signup_btn.onclick = () => {
  verify_email_page.style.display = "flex";
  signup_page.style.display = "none";
  console.log("works");
};

verify_email_btn.onclick = () => {
  email_verified_page.style.display = "flex";
  signup_page.style.display = "none";
  verify_email_page.style.display = "none";
};

email_verified_btn.onclick = () => {
  success_page.style.display = "flex";
  signup_page.style.display = "none";
  verify_email_page.style.display = "none";
  email_verified_page.style.display = "none";
};
