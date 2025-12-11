// Interactive image manipulation with gradient background
new p5(function(p) {

  p.setup = function() {
    let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    canvas.parent('labContainer');

    // Store as global for cleanup
    window.currentP5Instance = p;

    // Draw gradient background (red base)
    p.background(255, 0, 0);

    let randomFactor = p.random(0, 2);
    let red = 0;
    let blue = 255.0;

    for (let i = 340; i < p.height / randomFactor; i++) {
      p.stroke(red, 0, blue, 200);
      p.line(0, i, p.width / 2, i);
      blue = blue - (25 / 500.0);
      red = red + (255 / 500.0);
    }

    p.noStroke();
  };

  p.draw = function() {
    // Capture a section of the canvas
    let img = p.get(200, 200, 400, 400);
    img.filter(p.INVERT);
    p.image(img, p.mouseX, p.mouseY, 140, 130);
  };

  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);

    // Redraw gradient background
    p.background(255, 0, 0);

    let randomFactor = p.random(0, 2);
    let red = 0;
    let blue = 255.0;

    for (let i = 340; i < p.height / randomFactor; i++) {
      p.stroke(red, 0, blue, 200);
      p.line(0, i, p.width / 2, i);
      blue = blue - (25 / 500.0);
      red = red + (255 / 500.0);
    }

    p.noStroke();
  };
});
