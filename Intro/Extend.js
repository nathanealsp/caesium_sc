class Griffins {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  job(item) {
    console.log(`${this.name} is a ${item}`);
  }
  get description() {
    console.log(`${this.name} is funny`);
  }
  set character(who) {
    this.who = who;
  }
  get characterInShow() {
    console.log(`${this.name} is the ${this.who} in family Guy`);
  }
}

const stewie = new Griffins('Stewie', 'Quahog');
stewie.job('son');
stewie.description;
stewie.character = 'Brains Friend';
stewie.characterInShow;
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
peter.job('Bartender and Dad');
console.log(peter);
