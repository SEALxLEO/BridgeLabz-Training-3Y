class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  work() {
    console.log(`${this.name} is working in ${this.department}.`);
  }
}

class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department);
    this.teamSize = teamSize;
  }

  // Override work()
  work() {
    console.log(`${this.name} is managing ${this.teamSize} members in ${this.department}.`);
  }
}

// Runtime polymorphism
const staff = [
  new Employee("Neha", "Engineering"),
  new Manager("Vikram", "Engineering", 8),
  new Employee("Kabir", "Marketing")
];

staff.forEach((person) => person.work());
