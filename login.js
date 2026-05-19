 <script>

            function validateForm() {

                // GET VALUES

                var email = document.getElementById("email").value;
                var phone = document.getElementById("phone").value;
                var password = document.getElementById("password").value;

                // ERROR DIVS

                var emailError = document.getElementById("emailError");
                var phoneError = document.getElementById("phoneError");
                var passwordError = document.getElementById("passwordError");

                // CLEAR OLD ERRORS

                emailError.innerHTML = "";
                phoneError.innerHTML = "";
                passwordError.innerHTML = "";

                // EMAIL VALIDATION

                if (email.indexOf("@") == -1) {
                    emailError.innerHTML = "Email must contain @ symbol";
                    return false;
                }

                // PHONE VALIDATION

                if (phone.length != 10 || isNaN(phone)) {
                    phoneError.innerHTML = "Phone number must be exactly 10 digits";
                    return false;
                }

                // PASSWORD VALIDATION

                var specialChar = /[!@#$%^&*(),.?":{}|<>]/;

                if (password.length < 6) {
                    passwordError.innerHTML = "Password must contain minimum 6 characters";
                    return false;
                }

                if (!specialChar.test(password)) {
                    passwordError.innerHTML = "Password must contain special symbol";
                    return false;
                }

                alert("Login Successful");

                return true;

            }

        </script>
