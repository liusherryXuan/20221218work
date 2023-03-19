let student = {
    name: 'David',
    age: 18,
    eat() {
        console.log('Eat!');
    },
    'like-food': 'water',
};

for (let field in student) {
    console.log(field, student[field]);
}

console.log(student.name);
console.log(student['like-food']);

// while (true) {
    // console.log('run');
// }