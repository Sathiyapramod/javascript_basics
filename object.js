const person = {
    name: 'jeeva',
    job: 'developer',
    age: 30
};
// default parameters 
// 
let { name, job, age, status = 'active' } = person;

// what will happen if destructuring done with a key called 'status'
console.log(name); //steve
console.log(job); //developer
console.log(age); //30

console.log(name, 'is', status);
