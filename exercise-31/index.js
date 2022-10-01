// assignment no.31 - No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.


// usernames
const usernames = ['admin', 'mike', 'michel', 'john', 'rose'];

usernames.pop()
usernames.pop()
usernames.pop()
usernames.pop()
usernames.pop()

if(usernames.length < 1) {
    console.log('We need to find some users.');
}