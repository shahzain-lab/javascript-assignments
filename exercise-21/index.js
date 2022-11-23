
// storing in simple object
const person = {
    name: 'shahzain', 
    grade: 'A+',
    isMaried: false
}

// printing ways
console.log(person)
console.log(person.name)
console.log(person.grade)
console.log(person.isMaried)

// storing with constructor
function Person(name, grade, isMaried) {
    this.name = name;
    this.grade = grade;
    this.isMaried = isMaried;
}

// someting called - blue prints
const ali = new Person('Ali', 'B+', true);
const wahab = new Person('Wahab', 'A+', false);
const razaq = new Person('Razaq', 'B', true);

console.log(ali)
console.log(wahab)
console.log(razaq)