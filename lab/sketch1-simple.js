// Noise-based image manipulation sketch
new p5(function(p) {
  let x, y;
  let px, py;
  let ellipseWidth;

  p.setup = function() {
    let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    canvas.parent('labContainer');

    // Store as global for cleanup
    window.currentP5Instance = p;

    p.noStroke();
    p.background(200);

    x = p.width / 2;
    y = p.height / 2;
    px = x;
    py = y;
    ellipseWidth = 60;
  };

  p.draw = function() {
    x += (p.noise(p.frameCount * 0.01) - 0.5) * 30;
    y += (p.noise(p.frameCount * 0.02) - 0.5) * 30;

    // Boundary checks - reset to center if out of bounds
    if (x > p.width - ellipseWidth) {
      px = x = p.width / 2;
    }
    if (x < ellipseWidth) {
      px = x = p.width / 2;
    }
    if (y > p.height - ellipseWidth) {
      py = y = p.height / 2;
    }
    if (y < ellipseWidth) {
      py = y = p.height / 2;
    }

    // Capture a section of the canvas
    let img = p.get(100, 100, 100, 100);
    img.filter(p.INVERT);

    p.imageMode(p.CENTER);
    p.image(img, x, y, ellipseWidth, ellipseWidth);

    px = x;
    py = y;
  };

  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    p.background(200);
    x = p.width / 2;
    y = p.height / 2;
    px = x;
    py = y;
  };
});
