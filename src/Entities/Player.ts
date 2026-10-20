import { Entity } from './Entity';

export class Player extends Entity {
    public name: string;

    constructor(name: string) {
        super(200, 200, 100);
        this.name = name;
    }

    onInitialize(engine: ex.Engine): void {
        this.graphics.use(new ex.Rectangle({width: 64, height: 64, color: ex.Color.fromHex('#ffff00')}))
    }
}
