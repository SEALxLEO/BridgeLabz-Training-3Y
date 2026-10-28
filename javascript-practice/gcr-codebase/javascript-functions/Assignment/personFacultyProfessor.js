// Q6
function Person(name) {
    this.name = name;
}
Person.prototype.showName = function () {
    console.log(`Name: ${this.name}`);
};
function Faculty(name, subject) {
    Person.call(this, name);
    this.subject = subject;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.showSubject = function () {
    console.log(`Subject: ${this.subject}`);
};
function Professor(name, subject, researchArea) {
    Faculty.call(this, name, subject);
    this.researchArea = researchArea;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.showResearch = function () {
    console.log(`Research: ${this.researchArea}`);
};
const professor = new Professor("Dr. Sharma", "JavaScript", "Web Development");
professor.showName();
professor.showSubject();
professor.showResearch();
