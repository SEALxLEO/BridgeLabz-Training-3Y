// Q4
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}
Car.prototype.getDetails = function () {
    console.log(`${this.brand} ${this.model}`);
};
const car1 = new Car("Toyota", "Camry");
const car2 = new Car("Honda", "City");
car1.getDetails();
car2.getDetails();
