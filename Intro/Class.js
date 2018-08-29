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
}

const baldEagle = new Bird('Bald Eagle', 'Sea eagle');
console.log(baldEagle);
