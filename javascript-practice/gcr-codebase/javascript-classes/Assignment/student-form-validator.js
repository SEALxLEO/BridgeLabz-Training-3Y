// Student Form Validator
const form = document.createElement("form");
form.innerHTML = `
  <h2>Student Registration</h2>
  <label>Name <input id="name" type="text"></label><br>
  <label>Email <input id="email" type="text"></label><br>
  <label>Phone <input id="phone" type="text"></label><br>
  <label>Password <input id="password" type="password"></label><br>
  <button type="submit">Register</button>
  <p id="message"></p>
`;
document.body.appendChild(form);

const rules = {
  name: /^[A-Za-z]+$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\d{10}$/,
  password: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
};

function validateField(input, regex, message) {
  const valid = regex.test(input.value.trim());
  input.style.border = valid ? "2px solid green" : "2px solid red";
  input.title = valid ? "" : message;
  return valid;
}

form.addEventListener("submit", event => {
  event.preventDefault();

  const validName = validateField(form.name, rules.name, "Name must contain alphabets only.");
  const validEmail = validateField(form.email, rules.email, "Enter a valid email.");
  const validPhone = validateField(form.phone, rules.phone, "Phone must contain 10 digits.");
  const validPassword = validateField(
    form.password,
    rules.password,
    "Password needs uppercase, number and special character."
  );

  const message = document.getElementById("message");
  message.textContent = validName && validEmail && validPhone && validPassword
    ? "Registration successful."
    : "Please fix the invalid fields.";
  message.style.color = validName && validEmail && validPhone && validPassword ? "green" : "red";
});
