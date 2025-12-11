// Interactive gradient rectangles
new p5(function(p) {
  let x, y, w, h;
  let c1, c2, c3;
  let hasInteracted = false;

  p.setup = function() {
    let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    canvas.parent('labContainer');

    // Store as global for cleanup
    window.currentP5Instance = p;

    p.background(255);
    p.strokeWeight(0);

    // Initialize variables
    x = 0;
    y = 0;
    w = 0;
    h = 0;
    c1 = p.color(255, 0, 0);
    c2 = p.color(0, 255, 0);
    c3 = p.color(0, 0, 255);
  };

  p.draw = function() {
    // Only draw instructions if no interaction yet
    if (!hasInteracted) {
      // Clear previous text by redrawing a small area
      p.fill(255);
      p.noStroke();
      p.rectMode(p.CENTER);
      p.rect(p.width / 2, p.height / 2, 200, 30);

      // Draw blinking text
      let alpha = p.map(p.sin(p.frameCount * 0.1), -1, 1, 50, 255);
      p.fill(0, alpha);
      p.textSize(12);
      p.textAlign(p.CENTER, p.CENTER);
      p.text('click and drag', p.width / 2, p.height / 2);
    }

    if (p.mouseIsPressed) {
      updateGradient();
    }
  };

  p.mousePressed = function() {
    // Clear text on first interaction
    if (!hasInteracted) {
      p.fill(255);
      p.noStroke();
      p.rectMode(p.CENTER);
      p.rect(p.width / 2, p.height / 2, 200, 30);
      hasInteracted = true;
    }

    x = p.mouseX;
    y = p.mouseY;
    w = 0;
    h = 0;
    c1 = p.color(p.random(255), p.random(255), p.random(255));
    c2 = p.color(p.random(255), p.random(255), p.random(255));
    c3 = p.color(p.random(255), p.random(255), p.random(255));
  };

  p.mouseDragged = function() {
    w = p.mouseX - x;
    h = p.mouseY - y;
  };

  p.mouseReleased = function() {
    updateGradient();
  };

  function updateGradient() {
    for (let i = 0; i < p.abs(w); i++) {
      for (let j = 0; j < p.abs(h); j++) {
        let xProp = p.map(i, 0, p.abs(w), 0, 1);
        let yProp = p.map(j, 0, p.abs(h), 0, 1);
        let c;
        if (xProp < 0.5) {
          c = p.lerpColor(c1, c2, p.map(xProp, 0, 0.5, 0, 1));
        } else {
          c = p.lerpColor(c2, c3, p.map(xProp, 0.5, 1, 0, 1));
        }
        p.fill(c);
        p.noStroke();
        p.rect(x + (w < 0 ? w : 0) + i, y + (h < 0 ? h : 0) + j, 1, 1);
      }
    }
  }

  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    p.background(255);
  };
});
