"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

for (const employee of employees) {
    try {
        if (employee.name === undefined || employee.salary === undefined || employee.years === undefined) {
            throw new Error("Missing employee property");
        }

        const salary = Number(employee.salary);
        const years = Number(employee.years);

        if (Number.isNaN(salary) || Number.isNaN(years)) {
            throw new Error("Invalid numeric value");
        }

        const bonus = years > 3 ? salary * 0.1 : salary * 0.05;

        console.log(`${employee.name}: Salary = ₹${salary}, Years = ${years}, Bonus = ₹${bonus}`);
    } catch (error) {
        console.log(`Error for ${employee.name ?? "Unknown"}: ${error.message}`);
    }
}
