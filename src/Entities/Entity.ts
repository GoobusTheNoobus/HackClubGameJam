export class Entity {
    public x: number;
    public y: number;
    public maxHealth: number;
    public health: number;

    constructor(x: number, y: number, maxHealth: number) {
        this.x = x;
        this.y = y;
        this.maxHealth = maxHealth;
        this.health = maxHealth;
    }
}
