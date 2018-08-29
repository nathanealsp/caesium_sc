class Griffins {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  job(item) {
    console.log(`${this.name} is a ${item}`);
  }
}

const stewie = new Griffins('Stewie', 'Quahog');
stewie.job('son');
console.log(stewie);

class Dad extends Griffins {
  constructor(name, location, size) {
    super(name, location);
    this.size = size;
  }
  iq(ids) {
    console.log(`${this.name}'s IQ is ${ids}`);
  }
}

const peter = new Dad('Peter', 'Springfield', 12);
peter.iq(10);
console.log(peter);
