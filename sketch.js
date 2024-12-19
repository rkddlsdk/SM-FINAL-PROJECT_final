let img;

function preload() {
  img = loadImage('f1.png'); 
}

function setup() {
// (캔버스크기640x640 + 아래 추가 640)
  createCanvas(640, 1280);
}

function draw() {
  background(220);
  image(img, 0, 0, 640, 640);
  fill(0);
  rect(0, 640, 640, 640); 
  fill(252, 86, 3);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("𝐑𝐈𝐃𝐄 𝐓𝐇𝐄 𝐒𝐓𝐎𝐑𝐌", width / 2, 640 + 640 / 2); 
  //한화이글스의 2025년 슬로건을 중앙에 배치
}
