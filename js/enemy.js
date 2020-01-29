let enemy; // defining enemy here as global scope allows it to be accessed outside fn.

class Enemy {
    constructor(enemyType, health, mana, strength, agility, speed) {
        this.enemyType = enemyType;
        this.health = health;
        this.mana = mana;
        this.strength = strength;
        this.agility = agility;
        this.speed = speed;
    }
}
