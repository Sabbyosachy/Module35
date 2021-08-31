/* const student = {
    name: 'sunsan chakraborty',
    age: 21,
    Major: 'math',
    Money: 5000,
    Subject: ['english', 'economics', 'bangla'],
    Bestfriend: {
        name: 'kabila',
        major: 'math'
    },
    takeExam: function() {
        console.log(this.name, 'Taking Exam');
    },
    Treat: function(Expense) {
        this.Money = this.Money - Expense;
        return this.Money;
    }
}
student.takeExam();
const remain = student.Treat(1000);
console.log(remain);
// console.log(student); */


const student = {
    name: 'susan',
    age: 12,
    money: 1200,
    Treat: function(expense) {
        this.money = this.money - expense;
        return this.money;
    }
}
const Nowbal = student.Treat(200);
console.log(Nowbal);