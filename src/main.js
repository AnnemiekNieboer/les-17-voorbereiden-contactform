const userNameElement = document.getElementById("userName");
const passwordElement = document.getElementById("password");

const divUsernameErrorField = document.getElementById("registration-form-username__listener");
const divPasswordErrorField = document.getElementById("registration-form-password__listener");

userNameElement.addEventListener("keyup", checkUsername);
passwordElement.addEventListener("keyup", checkPassword);

function checkUsername(e) {
    if (e.target.value.includes("@")) {
        divUsernameErrorField.textContent = "Gebruikersnaam mag geen @ bevatten";
    } else {
        divUsernameErrorField.textContent = "";
    }
}

function checkPassword(e) {
    if (e.target.value === "" || e.target.value.length > 6) {
        divPasswordErrorField.textContent = "";
    } else {
        divPasswordErrorField.textContent = "Wachtwoord is te kort, gebruik minimaal 6 tekens"
    }
}