// assignment no.15 - Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

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