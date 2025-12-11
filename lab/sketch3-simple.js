// Colored rectangles with noise movement
new p5(function(p) {
  let x, y;
  let px, py;
  let ellipseWidth;
  let velocidad;
  let c1;

  let cr, cg, cb, cy;
  let colors = [];

  p.setup = function() {
    let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    canvas.parent('labContainer');

    // Store as global for cleanup
    window.currentP5Instance = p;

    p.noStroke();
    p.background(255, 255, 255);

    // Define colors
    cr = p.color(255, 0, 0);      // RED
    cg = p.color(0, 255, 0);      // GREEN
    cb = p.color(0, 0, 255);      // BLUE
    cy = p.color(255, 255, 0);    // YELLOW
    colors = [cr, cg, cb, cy];

    x = p.width / 2;
    y = p.height / 2;
    px = x;
    py = y;
    ellipseWidth = 20;
    velocidad = 20;

    // Random initial color
    c1 = colors[p.floor(p.random(0, 4))];
    p.fill(c1);
  };

  p.draw = function() {
    if (p.mouseIsPressed) {
      // Draw black rectangles when mouse is pressed
      velocidad = 0;
      p.fill(0);
      p.rect(p.mouseX, p.mouseY, ellipseWidth, ellipseWidth);
      p.ellipseMode(p.CENTER);
      p.strokeWeight(1.3);
    } else {
      // Automatic movement with noise
      velocidad = 20;
      x += (p.noise(p.frameCount * 0.01) - 0.5) * velocidad;
      y += (p.noise(p.frameCount * 0.02) - 0.5) * velocidad;

      // Boundary checks - reset to center and change color
      if (x > p.width - ellipseWidth * 2) {
        px = x = p.width / 2;
        c1 = colors[p.floor(p.random(0, 4))];
        p.fill(c1);
      }
      if (x < ellipseWidth) {
        px = x = p.width / 2;
        c1 = colors[p.floor(p.random(0, 4))];
        p.fill(c1);
      }
      if (y > p.height - ellipseWidth * 2) {
        py = y = p.height / 2;
        c1 = colors[p.floor(p.random(0, 4))];
        p.fill(c1);
      }
      if (y < ellipseWidth) {
        py = y = p.height / 2;
        c1 = colors[p.floor(p.random(0, 4))];
        p.fill(c1);
      }

      p.rect(x, y, ellipseWidth, ellipseWidth);
      p.ellipseMode(p.CENTER);
      p.strokeWeight(1.3);

      px = x;
      py = y;
    }
  };

  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    p.background(255, 255, 255);
    x = p.width / 2;
    y = p.height / 2;
    px = x;
    py = y;
  };
});
