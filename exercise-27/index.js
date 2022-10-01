// assignment no.27 - Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.



const alien_color = 'yellow';
const POINTS = 5

if(alien_color === 'green'){
    console.log('You just earned ' + POINTS + ' number of points');
} else if(alien_color === 'yellow') {
    console.log('You just earned ' + (POINTS + 5) + ' number of points')
} else if(alien_color === 'blue') {
    console.log('You just earned ' + (POINTS + 10) + ' number of points')
}else if(alien_color === 'pink') {
    console.log('You just earned ' + (POINTS + 15) + ' number of points')
}else {
    console.log('You got nothing')
}