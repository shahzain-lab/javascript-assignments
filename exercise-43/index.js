
const magicians = ["magicular", 'Ar magics', 'magic move'];

const greatMagicians = magicians.map(mag => `Great to the ${mag}`);

function show_magicians(magicians) {
    for(let i = 0; i < magicians.length; i++){
        console.log(magicians[i])
    }
}


//Magicians
show_magicians(magicians)
//greatMagicians
show_magicians(greatMagicians)