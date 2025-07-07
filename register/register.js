function register() {
    const email = document.getElementById("email");
    const register_password = document.getElementById("password");
    const confirm_password = document.getElementById("confirm");

    if (register === confirm) {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(register_password,confirm_password,email));
    }else{
        alert("Confirm The Password");
    }
}
