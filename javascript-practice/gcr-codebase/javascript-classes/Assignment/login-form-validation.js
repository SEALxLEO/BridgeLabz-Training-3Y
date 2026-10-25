// Login Form Validation
const form = document.createElement("form");
form.innerHTML = `
  <h2>Login</h2>
  <label>Username <input id="username" type="text"></label><br>
  <label>Password <input id="password" type="password"></label><br>
  <button type="submit">Login</button>
  <p id="message"></p>
`;
document.body.appendChild(form);

const usernameRegex = /^.{5,}$/;
const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).{8,}$/;

form.addEventListener("submit", event => {
  event.preventDefault();

  const username = form.username.value;
  const password = form.password.value;
  const errors = [];

  if (!usernameRegex.test(username)) errors.push("Username must have at least 5 characters.");
  if (!passwordRegex.test(password)) {
    errors.push("Password needs 8+ chars, number, uppercase, lowercase and special character.");
  }

  const message = document.getElementById("message");
  message.textContent = errors.length ? errors.join(" ") : "Login validation successful.";
  message.style.color = errors.length ? "red" : "green";
});
