// assignment no.39 - City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"


function city_country(city, country = 'pakistan') {
    const cityName = city[0].toUpperCase() + city.slice(1);
    const countryName = country[0].toUpperCase() + country.slice(1);
    console.log(`\"${cityName}, ${countryName}\"`);
}


city_country('islamabad');
city_country('karachi');
city_country('berlin', 'germany');