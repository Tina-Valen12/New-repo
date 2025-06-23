const car1 = {
    brand: "Ford",
    model: "Mustang",
    year: 2021
};

car2 = {
    brand: "BMW",
    model: "X5",
    owner: "Jack Jons"
};

car3 = {
    ...car1,
    ...car2
};

console.log(car3);