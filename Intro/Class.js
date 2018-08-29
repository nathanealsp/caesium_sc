function Dog(name, type) {
  this.name = name;
  this.type = type;
}

const snickers = new Dog('snickers', 'Husky');
console.log(snickers);

class Bird {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  scream() {
    console.log(`SCREEEEEEEAM ${this.name}`);
  }
}
Bird.prototype.logger = function() {
  console.log(this.name);
};
const baldEagle = new Bird('Bald Eagle', 'Sea eagle');
const eagle = new Bird('Dove Eagle', 'Sea eagle');
console.log(baldEagle);
baldEagle.logger();
eagle.scream();
