// assignment no.22 - Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

// my beautiful lists 
const places = [45, 'Honda Civic', 'Daman-e-Koh', 'rolls roys'];

places.forEach(place => {
    if(typeof place === 'number') {
        console.log(place + " is not a known thing")
    }else {
        console.log(place)
    }
})
