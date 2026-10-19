import type { GameObject } from "./Object";


export interface CanvasObject extends GameObject {
    draw(ctx: CanvasRenderingContext2D): void;
}