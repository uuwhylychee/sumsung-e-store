document.getElementById("loginForm").addEventListener("submit", function(event) {
    // Regular Expression for Email Validation
    var emailRegex = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}(\.[a-zA-Z]{2,3})?$/;
    var email = document.getElementById("email").value;
    var errorMessage = document.getElementById("error-message");

    // Validate Email
    if (!emailRegex.test(email)) {
        errorMessage.textContent = "Please enter a valid email address.";
        errorMessage.style.display = "block";
        event.preventDefault();  // Prevent form submission
    } else {
        errorMessage.style.display = "none";
    }
});
