/*
 assignment no.28 
 Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder.
*/

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