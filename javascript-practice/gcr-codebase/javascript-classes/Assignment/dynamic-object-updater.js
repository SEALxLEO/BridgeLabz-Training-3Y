// Dynamic Object Updater
const user = {
  name: "John",
  email: "john@mail.com",
  age: 21
};

const form = document.createElement("form");
form.innerHTML = `
  <h2>Edit User</h2>
  <label>Name <input id="name" value="${user.name}"></label><br>
  <label>Email <input id="email" type="email" value="${user.email}"></label><br>
  <label>Age <input id="age" type="number" value="${user.age}"></label><br>
  <button type="submit">Update</button>
`;
document.body.appendChild(form);

const output = document.createElement("pre");
document.body.appendChild(output);

function showUser() {
  output.textContent = JSON.stringify(user, null, 2);
}

form.addEventListener("submit", event => {
  event.preventDefault();
  user.name = form.name.value.trim();
  user.email = form.email.value.trim();
  user.age = Number(form.age.value);
  showUser();
});

showUser();
