const LOCAL_STORAGE_KEY = "register";

function register(event) {
  event.preventDefault();

  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm");

  if (password.value === confirmPassword.value) {
    console.log("wr");

    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify({
        email: email.value,
        password: password.value,
      })
    );

    window.location.href = "/login";
  } else {
    alert("Confirm password is not same!");
  }
}
