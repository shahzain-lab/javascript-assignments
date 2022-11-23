
// storing name in a variable
const shahzain = 'I\'m shahzain';

// printing to the console - lowercase
console.log(shahzain.toLowerCase()); // i'm shahzain

// printing to the console - uppercase
console.log(shahzain.toUpperCase()); // I'M SHAHZAIN

// by default, there is no javascript built-in method to convert a string into titlecase.
// but we can convert string in titlecase for that we'll loop over the string.

function toTitleCase(str) {
    str = str.toLowerCase();
    str = str.split(' ');
    for(let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ')
}

// printing to the console - titlecase
console.log(toTitleCase(shahzain)) // I'm Shahzain

