// assignment no.45 - Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


function describe_car(carName, model, speed, color, feature = "automatic",) {
    const car = {
        carName,
        model,
        speed,
        color,
        feature
    }
    return car;
}

const car1 = describe_car('Honda', '2020', 'xyz/km', 'silver');
const car2 = describe_car('Honda', '2020', 'xyz/km', 'silver', 'manual');

console.log(car1)
console.log(car2)