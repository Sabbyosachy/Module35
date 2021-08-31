const student = { name: 'sakib', job: 'cricketer' };
// console.log(student);

//constructor
/* const person = new Object();
console.log(person); */

//Inheritance

const human = Object.create(student);
console.log(human.job);