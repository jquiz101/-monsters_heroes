myHero.fight(monstersArray);

if (myHero.isAlive()) {
    console.log(`${myHero.name} bested the monsters! We will live another day`)
} else {
    console.log(`The Monsters bested ${myHero.name} and we are all doomed`)
}