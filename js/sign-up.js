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

function validate_signup() {
    var fname = document.signupform.fname.value;
    var mname = document.signupform.mname.value;
    var lname = document.signupform.lname.value;
    var username = document.signupform.username.value;
    var email = document.signupform.email.value;
    var password = document.signupform.password.value;
    var password2 = document.signupform.password2.value;
    var phone = document.signupform.phone.value;

    var status = true;

    if (fname == "" || fname == " ") {
        document
            .getElementById("errorfname")
            .innerHTML = "Please enter first name.";
        status = false;
    }
    if (isAlpha(fname) == false) {
        document
            .getElementById("errorfname")
            .innerHTML = "Name can only contain letters.";
        status = false;
    }
    if (mname != "" && isAlpha(mname) == false) {
        document
            .getElementById("errormname")
            .innerHTML = "Name can only contain letters.";
        status = false;
    }
    if (lname == "" || lname == " ") {
        document
            .getElementById("errorlname")
            .innerHTML = "Please enter last name.";
        status = false;
    }
    if (isAlpha(lname) == false) {
        document
            .getElementById("errorlname")
            .innerHTML = "Name can only contain letters.";
        status = false;
    }
    if (username == "" || username == " ") {
        document
            .getElementById("errorusername")
            .innerHTML = "Please enter username.";
        status = false;
    }
    if (isAlphaNum(username) == false) {
        document
            .getElementById("errorusername")
            .innerHTML = "Username can only contain alphabets and numbers.";
        status = false;
    }
    if (email == "" || email == " ") {
        document
            .getElementById("erroremail")
            .innerHTML = "Please enter email address.";
        status = false;
    }
    if (phone == "" || phone == " ") {
        document
            .getElementById("errorphone")
            .innerHTML = "Please enter phone number.";
        status = false;
    }
    if (phone != "" && phone.length != 10) {
        document
            .getElementById("errorphone")
            .innerHTML = "Enter a valid phone number (must be 10-digits)";
        status = false;
    }
    if (isNaN(phone) == true) {
        document
            .getElementById("errorphone")
            .innerHTML = "Enter digits only.";
        status = false;
    }
    if (password == "" || password == " ") {
        document
            .getElementById("errorpassword")
            .innerHTML = "Please enter password.";
        status = false;
    }
    if (password != "" && password.length < 6) {
        document
            .getElementById("errorpassword")
            .innerHTML = "Password must be greater than 6 characters.";
        status = false;
    }
    if (password2 == "" || password2 == " ") {
        document
            .getElementById("errorpassword2")
            .innerHTML = "Please retype the password.";
        status = false;
    }
    if (password2 != "" && password2 != password) {
        document
            .getElementById("errorpassword2")
            .innerHTML = "Passwords don't match.";
        status = false;
    }

    return status;
}