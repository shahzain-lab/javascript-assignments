// assignment no.06 - Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

// person name
const person_name = ' \n \t \t shahzain \t \t';

// stripping the name
const strip_name = person_name.trim()

// printing to the console
console.log(person_name) // normal name
console.log(strip_name) // strip name