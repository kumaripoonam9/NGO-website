function isAlphaNum(test_value) {
    var regex = /^[A-Za-z0-9]+$/
    var isValid = regex.test(test_value);
    return isValid;
}

function isAlpha(str) {
    var regex = /^[A-Za-z]+$/;
    var isValid = regex.test(str);
    return isValid;
}

function validate_login() {
    var username = document.signupform.username.value;
    var password = document.signupform.password.value;

    var status = true;

    if (username == "" || username == " ") {
        document
            .getElementById("errorusername")
            .innerHTML = "Please enter username/email.";
        status = false;
    }

    if (password == "" || password == " ") {
        document
            .getElementById("errorpassword")
            .innerHTML = "Please enter password.";
        status = false;
    }

    return status;
}