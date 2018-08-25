const url = 'http://api.citybik.es/v2/networks';
const cities = fetch(url);
cities.then(res => res.json()).then(res => console.log(res.networks.map(item => item.name).sort()));
