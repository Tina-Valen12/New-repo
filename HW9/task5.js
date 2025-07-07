const users = [
	{ name: 'Ann', email: 'ann@gmail.com', status: 'Active', role: 'Admin' },
	{ name: 'Tom', email: 'tom@gmail.com', status: 'Active', role: 'Manager' },
	{ name: 'Natalie', email: 'natalie@gmail.com', status: 'Inactive', role: 'Admin' },
];

for (const { name, email, status, role } of users) {
	console.log(`Name: ${name}, Email: ${email}, Status: ${status}, Role: ${role}`);
}
