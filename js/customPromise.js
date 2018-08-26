const iceCream = false;

const citiesPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (iceCream) {
      resolve('Yes we get to eat Ice Cream');
    } else {
      reject('Aww no, Ice Cream today');
    }
  }, 5000);
});

citiesPromise.then(data => console.log(data)).catch(err => {
  console.error(Error(err));
});
