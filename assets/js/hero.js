class Hero extends LivingThing {

    constructor(name, health, secretIdentity) {
        super(name, health);

        this.secretIdentity = secretIdentity;
    }

    attack(monster) {
        let monsterDamage = generateDamage(1, 10);
        let heroDamage = generateDamage(1, 10);

        monster.health -= monsterDamage;
        this.health -= heroDamage;
    }

    fight(arrayOfMonsters) {
        for (let i = 0; i < arrayOfMonsters.length; i++) {
            let monster = arrayOfMonsters[i];
            while (monster.isAlive() && this.isAlive()) {
                this.attack(monster);
            }
            if (!this.isAlive()) {
                break;
            }
            console.log(`Monster: ${monster.name}`);
            console.log(`Hero health: ${this.health}`);
        }
    }
}

function generateDamage(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let myHero = new Hero("Superman", 1110, "Clark Kent");

console.log(myHero);

console.log(frankenstein.health);

myHero.attack(frankenstein);

console.log(frankenstein.health);

