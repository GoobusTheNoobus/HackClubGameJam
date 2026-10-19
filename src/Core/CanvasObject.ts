import type { GameObject } from "./GameObject";


export interface CanvasObject extends GameObject {
    draw(ctx: CanvasRenderingContext2D): void;
}