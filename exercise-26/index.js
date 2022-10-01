// assignment no.26 - Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

const alien_color = 'yellow';
const POINTS = 5

if(alien_color === 'green'){
    console.log('You just earned ' + POINTS + ' number of points');
} else {
    console.log('You just earned ' + (POINTS + 5) + ' number of points')
}