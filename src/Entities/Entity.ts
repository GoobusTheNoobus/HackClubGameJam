import type { CanvasObject } from "../Base Classes/CanvasObject";

export class Entity implements CanvasObject{
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

    process(delta: number): void { // executed every frame
        
    }

    draw(ctx:CanvasRenderingContext2D): void { // draw call
        
    }
}
