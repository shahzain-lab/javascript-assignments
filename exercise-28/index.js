

// describe mike
const mike = {
    name: 'mike',
    age: 15
};

if(mike.age < 2) {
    console.log(mike.name + ' is a baby.')
}
else if(mike.age >= 2 && mike.age < 4) {
    console.log(mike.name + ' is a toddler.')
}
else if(mike.age >= 4 && mike.age < 13) {
    console.log(mike.name + ' is a kid.')
}
else if(mike.age >= 13 && mike.age < 20) {
    console.log(mike.name + ' is a teenager.')
}
else if(mike.age >= 20 && mike.age < 65) {
    console.log(mike.name + ' is a adult.')
}
else if(mike.age >= 65) {
    console.log(mike.name + ' is a elder.')
}else {
    console.log(mike.name + ' is a alien.')
}