

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