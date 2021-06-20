function reset_form() {
    var msg = document.getElementById("form_msg");
    msg.style.visibility = "visible";
    msg.innerHTML = "The form was cleared out!";
}

function onmouseover_fun() {
    document
        .getElementById("tag_line")
        .innerHTML = "Spread at least one smile today";
}

function onmouseout_fun() {
    document
        .getElementById("tag_line")
        .innerHTML = "Building humanity together";
}

function onmousedown_fun() {
    document
        .getElementById("getintouch")
        .innerHTML = "&nbsp;You'll be redirected to contact us page in 3 seconds...";
}

function form_validate() {
    var comments = document.contactForm.comments;
    if (comments.value == "" || comments.value == " ") {
        var msg = document.getElementById("form_msg");
        msg.style.visibility = "visible";
        msg.innerHTML = "Please fill the form completely.";
    }
    return false;
}

function ondbclick_fun() {
    document
        .getElementById("dbmsg")
        .style
        .visibility = "visible";
}

function caps_fun() {
    var name = document.contactForm.name;
    name.value = name
        .value
        .toUpperCase();
}

function name_change() {
    var name = document.contactForm.name.value;
    document
        .getElementById("onchange")
        .innerHTML = "Hi " + name + " !";
}

function welcome() {
    alert("Welcome to Smile Foundation!");
}