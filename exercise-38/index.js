

function describe_city(city, country = 'pakistan') {
    console.log(city + ' is in ' + country);
}

// default
describe_city('islamabad');
describe_city('karachi');
//expected
describe_city('berlin', 'germany');