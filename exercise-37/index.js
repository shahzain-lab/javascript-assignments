

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
