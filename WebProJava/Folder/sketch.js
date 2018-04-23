function setup() {
  createCanvas(700, 400, WEBGL);
  noStroke();
}

function draw() {
  background(255,255,255);
    
  // Light green point light on the right
  pointLight(9, 255, 89, 0, 200);

  // Red directional light from the left
  directionalLight(255, 0, 0, -1, 0, 0);

  // blue spotlight from the front
  pointLight(9, 0, 255, 255, 0, 300);

  rotateY(map(mouseX, 0, width, 0, PI));
  rotateX(map(mouseY, 0, height, 0, PI));
  box(150);
}
