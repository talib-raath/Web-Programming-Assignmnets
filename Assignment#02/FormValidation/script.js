    const username_input = document.getElementById("username");
    const password_input = document.getElementById("password");
    const loginForm = document.getElementById("login-form");

    function isValidEmail(email) {
      var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return emailRegex.test(email);
    }
    
    function isValidPassword(password) {
      var passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*]).*$/;
      return passwordRegex.test(password);
    }

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = username_input.value.trim();
        const password = password_input.value.trim();


        if (!isValidEmail(username)) {
            alert("Invalid username. Username must be 3-16 characters long and can only contain letters, numbers, and underscores.");
            return false;
        }

        if (!isValidPassword(password)) {
            alert("Invalid password. Password must be at least 8 characters long, contain at least one lowercase letter, one uppercase letter, and one number.");
            return false;
        }

        window.location.href = "home.html";
    });
  

   