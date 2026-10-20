import * as ex from 'excalibur'

export class Entity extends ex.Actor {
    public maxHealth: number;
    public health: number;

    constructor(x: number, y: number, maxHealth: number) {
        
        super({
            pos: ex.vec(x, y),
            width: 64,
            height: 64
        });

        this.maxHealth = maxHealth;
        this.health = maxHealth;
    }
}
