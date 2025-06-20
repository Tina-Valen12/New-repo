const numbersList = [1,10,14,2,4,5,43,34];
const numbersListcopy = [...numbersList];
const sortNumbers = [...numbersList].sort((a, b) => a - b);

console.log(numbersListcopy);
console.log(sortNumbers);
