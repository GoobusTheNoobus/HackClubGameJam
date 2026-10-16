function main() {
  const canvas = document.getElementById('game-canvas') as HTMLCanvasElement;

  if (canvas === null) {
    throw new Error("Canvas not found!");
  }

  const ctx = canvas.getContext('2d');

  if (ctx === null) {
    throw new Error("Failed to fetch canvas context");
  }
}
