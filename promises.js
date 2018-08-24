const url = 'http://api.citybik.es/v2/networks';
const cities = fetch(url);
cities
  .then(response => response)
  .then(res => res.json())
  .then(res => console.table(res.networks.map(item => item.name)));
