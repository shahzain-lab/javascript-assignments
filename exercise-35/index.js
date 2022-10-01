// assignment no.35 - Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

const animals = ['dogs', 'puppy', 'cats'];

animals.forEach(animal => {
    console.log(`A ${animal} would make a great pet`)
});

console.log(`
Child-friendly. If you have children, this one is quite obvious. ...
Affectionate. ...
Intelligent. ...
Loyal. ...
Energetic. ...
Easy to groom.
`)

console.log('You just saw common pet list')