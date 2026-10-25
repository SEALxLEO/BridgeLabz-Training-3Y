// Movie Ticket Booking
const form = document.createElement("form");
form.innerHTML = `
  <h2>Movie Ticket Booking</h2>
  <label>Name <input id="name" type="text"></label><br>
  <label>Email <input id="email" type="text"></label><br>
  <label>Seats <input id="seats" type="number" min="1" max="10"></label><br>
  <button type="submit">Book Ticket</button>
  <p id="message"></p>
  <pre id="ticket"></pre>
`;
document.body.appendChild(form);

const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", event => {
  event.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const seats = Number(form.seats.value);

  const valid = nameRegex.test(name) && emailRegex.test(email) && seats >= 1 && seats <= 10;
  const message = document.getElementById("message");
  const ticket = document.getElementById("ticket");

  if (!valid) {
    message.textContent = "Invalid booking details.";
    message.style.color = "red";
    ticket.textContent = "";
    return;
  }

  const booking = { name, email, seats };
  message.textContent = "Booking successful.";
  message.style.color = "green";
  ticket.textContent = `Name: ${booking.name}\nEmail: ${booking.email}\nSeats: ${booking.seats}`;
});
