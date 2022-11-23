// LivingThing is known because the connection is made in the index.html file

class Monster extends LivingThing {

    constructor(name, health, classification) {
        super(name, health);

        this.classification = classification;
    }
}

let frankenstein = new Monster("Frank", 100, "Universal Monster");
let ogre = new Monster("Bob", 100, "Ogre");
let goblin = new Monster("Stu", 85, "Goblin");

const monstersArray = [frankenstein, ogre, goblin];

monstersArray.forEach(function(monster){
    console.log(`${monster.name} is ${monster.isAlive() ? "alive" : "dead"}`)
});
