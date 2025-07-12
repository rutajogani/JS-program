const LOCAL_STORAGE_KEY = "register";
const button = document.getElementById("btn");
button.addEventListener("click", ()=>{
  changePassword()  
})
  
  function changePassword(event) {
    event.preventDefault();
    
    const oldPassword = document.getElementById("old");
    const newPassword = document.getElementById("new");
    
    const local = localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify({
        email: email.value,
      })
    );
    
    if (oldPassword.value === local.value) {
      window.location.href = "/login";
    } else {
      alert("Old password is not same!");
    }
  }
  