// Employee Management System
class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  applyBonus(percent) {
    this.salary += this.salary * percent / 100;
  }
}

const employees = [
  new Employee(1, "Aman", "IT", 50000),
  new Employee(2, "Riya", "HR", 45000),
  new Employee(3, "Karan", "Finance", 60000),
  new Employee(4, "Neha", "IT", 55000),
  new Employee(5, "Rahul", "Sales", 40000)
];

employees[0].applyBonus(10);

employees.forEach(employee => {
  console.log(`${employee.name}: ₹${employee.getAnnualSalary().toFixed(2)} annual salary`);
});

const totalAnnualPayout = employees.reduce(
  (total, employee) => total + employee.getAnnualSalary(),
  0
);

console.log(`Total annual payout: ₹${totalAnnualPayout.toFixed(2)}`);
