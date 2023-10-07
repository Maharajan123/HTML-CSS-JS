document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Regular expressions for email and password validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;

    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");

    emailError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;

    if (!emailRegex.test(email)) {
        emailError.textContent = "Invalid email address. Please enter a valid email.";
        isValid = false;
    }

    if (!passwordRegex.test(password)) {
        passwordError.textContent = "Invalid password. Password must be at least 8 characters long and contain at least one uppercase letter, one special character, and one number.";
        isValid = false;
    }

    if (isValid) {
        document.getElementById("success-message").textContent = "Successfully signed up!";
        document.getElementById("success-message").style.display = "block";
    }
});
