// class animals > cat extends animals > (sound, canJump)
// class animal > bird extends animals

class Animal {
    constructor(color = 'Brown', paws = true, speaks = true, energy = 100) {
        this.color = color;
        this.paws = paws;
        this.speaks = speaks;
        this.energy = energy;
    }
    isActive() {
        if(this.energy > 0) {
            this.energy -= 10;
            console.log("Your animal's energy is decreasing, currently at:", this.energy); 
        } else if(this.energy == 0) {
            hasToSleep();
            console.log('Your cat has to have some rest :(');
        }
    }
    hasToSleep() {
        this.energy += 10;
        console.log("Your animal's energy is increasing, currently at:", this.energy);
    }
    makeSound() {
        console.log(this.speaks);
    }
}

class Cat extends Animal {
    constructor(canJump = true, color, speaks, paws, energy) {
        super(color, paws, speaks, energy);
        this.canJump = canJump;
    }
    makeSound() {
        console.log(this.speaks);
    }
}

class Bird extends Animal {
    constructor(canJump = false, color, speaks = true, paws, energy, hasWings) {
        super(color, speaks, paws, energy);
        this.canJump = canJump;
        this.hasWings = hasWings;
    }
    makeSound() {
        if(this.speaks) {
            console.log('Omg, you have a talking bird!');
        } else {
            console.log('Your bird cannot talk :(');
        }
    }
}

class Dolphin extends Animal {
    constructor(color, speaks, paws = false, energy) {
        super(color, speaks, energy);
        this.paws = paws;
    }
    makeSound() {
        console.log('Brrrr');
    }
}

class Tiger extends Cat {
    constructor(canJump, color = 'Black and orange', energy, roar = true, paws, speaks) {
        super(canJump, energy, paws, speaks);
        this.color = color;
        this.roar = roar;
    }
    makeSound() {
        if(this.roar) {
            console.log('Your cat might be the Tiger...');
        } else {
            console.log('Actually, it is not a Tiger');
        }
    }
}

let dolphin1 = new Dolphin();