document.getElementById("email-submit").addEventListener("click", function() {
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("email-error");

    // Regular expression for email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(email)) {
        emailError.textContent = "Invalid email address. Please enter a valid email.";
        emailError.style.display = "block";
    } else {
        emailError.textContent = "";
        emailError.style.display = "none";
        document.getElementById("signup-button").disabled = false;
    }
});

document.getElementById("password-submit").addEventListener("click", function() {
    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("password-error");

    // Regular expression for password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;

    if (!passwordRegex.test(password)) {
        passwordError.textContent = "Invalid password. Password must be at least 8 characters long and contain at least one uppercase letter, one special character, and one number.";
        passwordError.style.display = "block";
    } else {
        passwordError.textContent = "";
        passwordError.style.display = "none";
        document.getElementById("signup-button").disabled = false;
    }
});

document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("success-message").textContent = "Successfully signed up!";
    document.getElementById("success-message").style.display = "block";
});
