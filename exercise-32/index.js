// assignment no.32 - Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

// current_users
const current_users = ['john', 'mike', 'jasmine', 'alice', 'robbin', 'alex'];

// new_users
const new_users = ['michel', 'jasmine', 'rose', 'alex', 'john', 'laas'];


new_users.forEach(user => {
    if(current_users.includes(user)){
        console.log('This username is already in use.')
    }
    if(!current_users.includes(user)){
        console.log('This username is available.')
    }
})
