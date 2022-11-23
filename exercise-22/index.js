
// my beautiful lists 
const places = [45, 'Honda Civic', 'Daman-e-Koh', 'rolls roys'];

places.forEach(place => {
    if(typeof place === 'number') {
        console.log(place + " is not a known thing")
    }else {
        console.log(place)
    }
})
