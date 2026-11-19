class MovieTicket {
  constructor(movieName, seatNo, price) {
    this.movieName = movieName;
    this.seatNo = seatNo;
    this.price = price;
  }
}

// Prototype method
MovieTicket.prototype.printTicket = function () {
  console.log(`Movie: ${this.movieName} | Seat: ${this.seatNo} | Base Price: Rs. ${this.price}`);
};

class OnlineTicket extends MovieTicket {
  constructor(movieName, seatNo, price, convenienceFee) {
    super(movieName, seatNo, price);
    this.convenienceFee = convenienceFee;
  }

  getTotalAmount() {
    return this.price + this.convenienceFee;
  }
}

const ticket = new OnlineTicket("Interstellar", "F12", 350, 45);

// Calls MovieTicket.prototype.printTicket via prototype chain
ticket.printTicket();
console.log(`Total Payable: Rs. ${ticket.getTotalAmount()}`);
console.log(
  "Prototype chain intact:",
  Object.getPrototypeOf(OnlineTicket.prototype) === MovieTicket.prototype
);
