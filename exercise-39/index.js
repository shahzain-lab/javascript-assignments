


function city_country(city, country = 'pakistan') {
    const cityName = city[0].toUpperCase() + city.slice(1);
    const countryName = country[0].toUpperCase() + country.slice(1);
    console.log(`\"${cityName}, ${countryName}\"`);
}


city_country('islamabad');
city_country('karachi');
city_country('berlin', 'germany');