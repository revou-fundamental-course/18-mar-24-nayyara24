// Code for validate this web
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var destination = document.getElementById("destination").value;

    /* validation for name and destination (check if they are not empty) */
    if (name.trim() == "" || destination.trim() == "") {
        alert("Name and destination cannot be empty");
        return false;
    }

/* Regular expression for email validation */
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return false;
    }

/* If all validations pass, return true to submit the form */
    return true;
}
