class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicleDetails) {
    super(name, rating);
    this.vehicleDetails = vehicleDetails;
  }
}

class Trip {
  constructor(fromLocation, toLocation, distance, driver = null) {
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distance = distance;
    this.driver = driver;
  }

  // Validate distance and compute fare
  calculateFare() {
    if (
      this.distance === undefined ||
      this.distance === null ||
      typeof this.distance !== "number" ||
      Number.isNaN(this.distance)
    ) {
      throw new Error("Distance must be provided as a valid number.");
    }
    if (this.distance < 0) {
      throw new Error("Distance cannot be negative.");
    }
    return 30 + this.distance * 12;
  }
}

const driver1 = new Driver("Suresh", 4.9, "Swift Dzire - UP85 AB 1234");
const trips = [
  new Trip("Mathura Junction", "GLA University", 14, driver1),
  new Trip("Kasganj", "Dholna", -5, driver1),
  new Trip("Agra", "Mathura")
];

trips.forEach((trip) => {
  try {
    const fare = trip.calculateFare();
    console.log(`Trip (${trip.fromLocation} -> ${trip.toLocation}): Fare = Rs. ${fare}`);
  } catch (error) {
    console.error(`Trip (${trip.fromLocation} -> ${trip.toLocation}) Error: ${error.message}`);
  }
});
