const LOCAL_STORAGE_KEY = "register";

function register() {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm");

  if (password.value === confirmPassword.value) {
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify({
        email: email.value,
        password: password.value
      })
    );
  } else {
    alert("Confirm password is not same!");
  }
}
