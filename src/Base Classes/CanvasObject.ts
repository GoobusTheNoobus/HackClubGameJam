import type { Object } from "./Object";


export interface CanvasObject extends Object{
    draw(ctx:CanvasRenderingContext2D):void;
}