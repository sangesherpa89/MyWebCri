function setup() {
  createCanvas(700, 400, WEBGL);
  noStroke();
}

function draw() {
  background(255,255,255);
    
  // Light green point light on the right
  pointLight(1, 3, 1, 500, 0, 200);

  // Red directional light from the left
  directionalLight(222, 7,59, -1, 0, 0);

  // Light blue spotlight from the front
  pointLight(48, 210, 200, 255, 0, 300);

  rotateY(map(mouseX, 0, width, 0, PI));
  rotateX(map(mouseY, 0, height, 0, PI));
  box(150);
}