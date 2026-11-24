$(document).ready(function () {
    var registeredEmails = [
        "alice@example.com",
        "bob.smith@example.com",
        "charlie@university.edu",
        "dev.kumar@techmail.com",
        "priya.sharma@portal.org"
    ];

    function setInvalid(field, errorEl, message) {
        field.css("border", "2px solid #dc2626");
        errorEl.text(message);
        return false;
    }

    function setValid(field, errorEl) {
        field.css("border", "2px solid #16a34a");
        errorEl.text("");
        return true;
    }

    function validateName() {
        var field = $("#fullName");
        var value = $.trim(field.val());
        if (value === "") {
            return setInvalid(field, $("#nameError"), "Name cannot be empty.");
        }
        return setValid(field, $("#nameError"));
    }

    function validateEmail() {
        var field = $("#email");
        var value = $.trim(field.val()).toLowerCase();
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value === "") {
            return setInvalid(field, $("#emailError"), "Email address is required.");
        }
        if (!emailPattern.test(value)) {
            return setInvalid(field, $("#emailError"), "Please enter a valid email format.");
        }
        if (registeredEmails.indexOf(value) !== -1) {
            return setInvalid(field, $("#emailError"), "This email is already registered.");
        }
        return setValid(field, $("#emailError"));
    }

    function validatePassword() {
        var field = $("#password");
        var value = field.val();
        if (value.length < 8) {
            return setInvalid(field, $("#passwordError"), "Password must be at least 8 characters long.");
        }
        return setValid(field, $("#passwordError"));
    }

    function validateConfirmPassword() {
        var field = $("#confirmPassword");
        var value = field.val();
        if (value === "" || value !== $("#password").val()) {
            return setInvalid(field, $("#confirmError"), "Passwords do not match.");
        }
        return setValid(field, $("#confirmError"));
    }

    function validatePhone() {
        var field = $("#phone");
        var value = $.trim(field.val());
        var phonePattern = /^\d{10}$/;
        if (!phonePattern.test(value)) {
            return setInvalid(field, $("#phoneError"), "Enter a valid 10-digit phone number.");
        }
        return setValid(field, $("#phoneError"));
    }

    $("#fullName").on("input blur", validateName);
    $("#email").on("input blur", validateEmail);
    $("#password").on("input blur", function () {
        validatePassword();
        if ($("#confirmPassword").val() !== "") {
            validateConfirmPassword();
        }
    });
    $("#confirmPassword").on("input blur", validateConfirmPassword);
    $("#phone").on("input blur", validatePhone);

    $("#registrationForm").on("submit", function (event) {
        event.preventDefault();
        var isNameOk = validateName();
        var isEmailOk = validateEmail();
        var isPassOk = validatePassword();
        var isConfirmOk = validateConfirmPassword();
        var isPhoneOk = validatePhone();

        if (isNameOk && isEmailOk && isPassOk && isConfirmOk && isPhoneOk) {
            var newEmail = $.trim($("#email").val()).toLowerCase();
            registeredEmails.push(newEmail);
            $("#registeredEmailsList").append($("<li></li>").text(newEmail));
            $("#successBox")
                .text("Registration successful! Account created for " + $.trim($("#fullName").val()) + " (" + newEmail + ").")
                .fadeIn(250);
            this.reset();
            $("#registrationForm input").css("border", "2px solid #cbd5e1");
        } else {
            $("#successBox").hide();
        }
    });
});
