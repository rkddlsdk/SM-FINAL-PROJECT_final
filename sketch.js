let img1;
let img2; //오른쪽 응원방망이
let img3; //왼쪽 응원 방망이

function preload() {
  img1 = loadImage('f1.png'); 
  img2 = loadImage('f2.png');
  img3 = loadImage('f3.png');
}

function setup() {
// (캔버스크기640x640 + 아래 추가 640)
  createCanvas(640, 1280);
}

function draw() {
  background(220);
  image(img1, 0, 0, 640, 640);
  
  let img2Width = 300;
  let img2Height = 200; 
  let img2X = 297; 
  let img2Y = 400; 
  image(img2, img2X, img2Y, img2Width, img2Height);
  
  let img3Width = 300;
  let img3Height = 200; 
  let img3X = 36; 
  let img3Y = 400; 
  image(img3, img3X, img3Y, img3Width, img3Height);
  
  

  fill(255);
  rect(0, 640, 640, 640); 
  fill(252, 86, 3);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("𝐑𝐈𝐃𝐄 𝐓𝐇𝐄 𝐒𝐓𝐎𝐑𝐌", width / 2, 640 + 640 / 2); 
  //한화이글스의 2025년 슬로건을 중앙에 배치
}





