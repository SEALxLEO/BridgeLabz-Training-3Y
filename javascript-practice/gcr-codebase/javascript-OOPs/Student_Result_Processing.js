class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  // Average via reduce
  calculateAverage() {
    if (!this.marks.length) return 0;
    return this.marks.reduce((sum, mark) => sum + mark, 0) / this.marks.length;
  }

  // Grade from average
  getGrade() {
    const avg = this.calculateAverage();
    if (avg >= 80) return "A";
    if (avg >= 60) return "B";
    if (avg >= 40) return "C";
    return "F";
  }
}

// Test 3 students
const students = [
  new Student("Aarav", [85, 90, 88, 92]),
  new Student("Priya", [65, 70, 62, 68]),
  new Student("Rohan", [32, 38, 35, 30])
];

students.forEach((student) => {
  console.log(
    `${student.name} | Avg: ${student.calculateAverage().toFixed(2)} | Grade: ${student.getGrade()}`
  );
});
