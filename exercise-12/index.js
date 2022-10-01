// assignment no.12 - Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

// My Few New Friends
const names = ['Shahzain', 'Daniyal', "Naseem", "Ali", 'Zia', 'Ziad'];

// accessing single property
names.forEach(function(name) {
    // message
    const message = 'Greeting'
    // printing to the console
    console.log(message + ' ' + name)
})

