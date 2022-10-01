// assignment no.42 - Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

const magicians = ["magicular", 'Ar magics', 'magic move'];

function show_magicians(magicians) {
    for(let i = 0; i < magicians.length; i++){
        console.log(`I'm ${magicians[i]}`);
    }
}

show_magicians(magicians);

function make_great(magicians) {
    for(let i = 0; i < magicians.length; i++){
        console.log(`Great to the ${magicians[i]}`);
    }
}

make_great(magicians)