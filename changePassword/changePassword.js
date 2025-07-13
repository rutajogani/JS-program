const LOCAL_STORAGE_KEY = "register";

function changePassword(event) {
  event.preventDefault();

  const oldPassword = document.getElementById("old");
  const newPassword = document.getElementById("new");

  const local = localStorage.getItem(LOCAL_STORAGE_KEY);
  const registeredData = JSON.parse(local);
  const email = registeredData.email;

  if (oldPassword.value === registeredData.password) {
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify({
        email: email,
        password: newPassword.value,
      })
    );
    window.location.href = "/login";
  } else {
    alert("Old password is not same!");
  }
}
