

// usernames
const usernames = ['admin', 'mike', 'michel', 'john', 'rose'];

usernames.forEach(name => {
    if(name === 'admin'){
        console.log('Hello admin, would you like to see a status report?')
    }else {
        console.log('Hello ' + name + ', Thankyou for logging in.')
    }
})