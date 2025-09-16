// ===============================
// EVENT HANDLING & VALIDATION
// ===============================

// Custom form validation
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form from submitting immediately

  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let message = "";

  // Validation rules
  if (username === "") {
    message = "Username cannot be empty.";
  } else if (!email.includes("@") || !email.includes(".")) {
    message = "Please enter a valid email.";
  } else if (password.length < 6) {
    message = "Password must be at least 6 characters.";
  } else {
    message = "Form submitted successfully!";
  }

  document.getElementById("formMessage").innerText = message;
});

// ===============================
// INTERACTIVE FEATURE 1: Toggle Password Visibility
// ===============================
document.getElementById("toggleBtn").addEventListener("click", function() {
  let field = document.getElementById("togglePass");
  if (field.type === "password") {
    field.type = "text";
  } else {
    field.type = "password";
  }
});

// ===============================
// INTERACTIVE FEATURE 2: Counter Button
// ===============================
let counter = 0; // variable to track clicks
document.getElementById("counterBtn").addEventListener("click", function() {
  counter++;
  document.getElementById("counterDisplay").innerText =
    "You have clicked " + counter + " times.";
});
