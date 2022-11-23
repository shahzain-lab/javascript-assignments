
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