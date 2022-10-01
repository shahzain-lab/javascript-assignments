// assignment no.17 - Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// my guest invitations
const names = ['M. Ali', 'john david', 'corner luis', 'ziad ali'];

// my list 
console.log(`Hi, ${names[0]} first dinner invitation to you.`)
console.log(`Hello ${names[1]}, come on to have dinner together.`)
console.log(`Hi ${names[2]}, feel free to us tonight`)
console.log(`yes ${names[3]}, you're welcome tonight.`)

// OOPS, corner luis was not there
console.log(`Sorry ${names[2]} will not be there tonight`);

// new invitation
names[2] = 'jackie chen';


// my list 
console.log(`Hi, ${names[0]} first dinner invitation to you.`)
console.log(`Hello ${names[1]}, come on to have dinner together.`)
console.log(`Hi ${names[2]}, feel free to us tonight`)
console.log(`yes ${names[3]}, you're welcome tonight.`)

// informing guests
console.log('I just found a big dinner table and more space is available. New invitations are below');

// in start of the array
names.unshift("barak obama")

// in middle of the array
names.slice(2, 0, "fem michile")

// in end of the array
names.push("kali kai")

// my list 
console.log(`Hi, ${names[0]} first dinner invitation to you.`)
console.log(`Hello ${names[1]}, come on to have dinner together.`)
console.log(`Hi ${names[2]}, feel free to us tonight`)
console.log(`yes ${names[3]}, you're welcome tonight.`)
console.log(`${names[4]} you invited to dinner.`)
console.log(`${names[5]} nice to meet you tonight.`)

// only TWO member
console.log('Sorry, we can only invite two for dinner.')

// remove guests from the list
console.log(`Sorry ${names[5]}, you're out from the list.`)
names.pop()
console.log(`Sorry ${names[4]}, you're out from the list.`)
names.pop()
console.log(`Sorry ${names[3]}, you're out from the list.`)
names.pop()
console.log(`Sorry ${names[2]}, you're out from the list.`)
names.pop()

// invite the remaining two
console.log(`Hi, ${names[0]} you're still invited.`)
console.log(`Hello ${names[1]}, you're still invited.`)

// remove other two
names.pop()
names.pop()

// print the list
console.log(names)