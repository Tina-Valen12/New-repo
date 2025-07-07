const person = {
	firstName: 'Ann',
	lastName: 'Smith',
	age: 30,
};

person.email = 'ann@gmail.com';

delete person.age;

console.log(person);
