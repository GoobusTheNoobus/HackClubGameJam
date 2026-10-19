const canvas = document.getElementById('game-canvas');

// If for some strange reason #game-canvas doesn't exist, throw error so we can
// debug easier.
if (!(canvas instanceof HTMLCanvasElement)) {
    throw new Error('Canvas not found!');
}

const ctx = canvas.getContext('2d');

if (ctx === null) {
    throw new Error('Failed to fetch canvas context');
}
// I think the function is unneeded overhead because we don't need to get this every frame.


let start:number

function process(timestamp:number){
    if (start === undefined){
        start = timestamp
    }
    const deltaTime = (timestamp - start) * 0.001
    start = timestamp
    

    
    requestAnimationFrame(process)
}

requestAnimationFrame(process)
