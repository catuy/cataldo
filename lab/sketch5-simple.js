// Interactive circles that follow mouse movement
new p5(function(p) {

  p.setup = function() {
    let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    canvas.parent('labContainer');

    // Store as global for cleanup
    window.currentP5Instance = p;

    p.background(255);
    p.noStroke();
    p.frameRate(60);

    // Show cursor
    p.cursor(p.ARROW);
  };

  p.draw = function() {
    // Draw circles when mouse moves (no need to click)
    if (p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height) {
      p.ellipseMode(p.CENTER);
      p.stroke(180, 180, 180);
      p.strokeWeight(1.3);
      p.fill(0);
      p.ellipse(p.mouseX, p.mouseY, 250, 250);
    }
  };

  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    p.background(255);
  };
});
