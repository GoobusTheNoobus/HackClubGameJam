import { Entity } from './Entity';

export class Player extends Entity {
    public name: string;

    constructor(name: string) {
        super(0, 0, 100);
        this.name = name;
    }
}
