

// describe john
const john = {
    name: 'john',
    age: 43,
    isMaried: true
}

// one time conditions
if(john.age > 35 && !john.isMaried) {
    console.log("john is still unmaried")
}
else if(john.age > 35 && john.isMaried) {
    console.log("John is too old.")
}else if(john.age < 20 && !john.isMaried) {
    console.log("John is ready to marry")
}else {
    console.log("John is normal guy")
}


const falsy = 'false';
console.log(typeof falsy === 'boolean');

const num_1 = 3 - 5;
const num_2 = 5 - 3;
console.log(num_1 === num_2);

const mLetter = ['marron', 'michel', 'brown', 'Mature', 'modern', 'crown'];

mLetter.forEach(m => {
    if(m[0] === 'm'){
        console.log(m)
    }else if(m[0] === 'M') {
        console.log('words should be lower case')
    }else {
        console.log('words must start from m letter.')
    }
})