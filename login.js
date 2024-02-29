//Register-Login form
document.addEventListener("DOMContentLoaded", function () {
  const switchToRegister = document.getElementById("switch-to-register");
  const switchToLogin = document.getElementById("switch-to-login");
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");

  switchToRegister.addEventListener("click", function (e) {
    e.preventDefault();
    loginForm.classList.remove("active");
    registerForm.classList.add("active");
  });

  switchToLogin.addEventListener("click", function (e) {
    e.preventDefault();
    loginForm.classList.add("active");
    registerForm.classList.remove("active");
  });
});