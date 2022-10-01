// assignment no.37 - Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


// default parameter
function make_shirt(text, size = 'large') {
    console.log(text + ' is printed in ' + size + ' size shirt.');
}

make_shirt('I love javascript')

// expected parameter
function make_shirt2(text, size) {
    console.log(text + ' is printed in ' + size + ' size shirt.');
}

make_shirt2('I love javascript', 'medium')
