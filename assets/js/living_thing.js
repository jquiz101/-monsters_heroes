class LivingThing {

    constructor(name, health) {
        this.name = name;
        this.health = health;
    }

    isAlive() {
        if(this.health > 0) {
            return true;
        }

        return false;
    }
}