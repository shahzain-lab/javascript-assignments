// assignment no.30 - Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. 


// usernames
const usernames = ['admin', 'mike', 'michel', 'john', 'rose'];

usernames.forEach(name => {
    if(name === 'admin'){
        console.log('Hello admin, would you like to see a status report?')
    }else {
        console.log('Hello ' + name + ', Thankyou for logging in.')
    }
})