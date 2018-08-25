window.onload = function() {
  // CREATE A NEW XMLHttpRequest OBJECT
  const url = 'http://api.citybik.es/v2/networks';
  const http = new XMLHttpRequest();

  // THIS FUNCTION WILL FIRE EVERYTIME WE HAVE A CHANGE
  http.onreadystatechange = function() {
    const { readyState, status, response } = http;
    if (readyState === 4 && status === 200) {
      const results = JSON.parse(response);
      console.log(results);
      return results;
    }
  };
  // TYPE OF REQUEST, URL, TRUE OR FALSE IF YOU WANT TO BE ASYNCHRONOUS OR SYNCHRONOUS
  http.open('GET', url, true);
  // SEND THE REQUEST
  http.send();
};
