export default class Pokemon {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Mi pokemon ${this.name} te saluda`);
  }

  // método
  sayMessage(message) {
    console.log(`Mi pokemon ${this.name} te dice: ${message}`);
  }
}
