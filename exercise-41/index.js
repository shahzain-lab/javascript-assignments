// assignment no.41 - Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


const magicians = ["magicular", 'Ar magics', 'magic move'];


function show_magicians(magicians) {
    for(let i = 0; i < magicians.length; i++){
        console.log(`I'm ${magicians[i]}`);
    }
}

show_magicians(magicians)