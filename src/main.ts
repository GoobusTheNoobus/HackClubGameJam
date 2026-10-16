function main() {
  const canvas = document.getElementById('game-canvas');

  // If for some strange reason #game-canvas doesn't exist, throw error so we can
  // debug easier.
  if (!(canvas instanceof HTMLCanvasElement)) {
    throw new Error("Canvas not found!");
  }

  const ctx = canvas.getContext('2d');

  if (ctx === null) {
    throw new Error("Failed to fetch canvas context");
  }
}

main();
