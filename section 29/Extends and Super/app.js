class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} is eating!`;
    }
}


class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        super(name, age);
        this.livesLeft = livesLeft;
    }

    meow() {
        return 'MEOWWWW!!';
    }
}


class Dog extends Pet {
    bark() {
        return 'WOOOF!!';
    }

    eat() {
        return `${this.name} scarfs his food!`;
    }
}


const monty = new Cat('Monty', 6);
const wyatt = new Dog('Wyatt', 10);

console.log(monty.eat());
console.log(wyatt.eat());
console.log(monty.meow());
console.log(wyatt.bark());