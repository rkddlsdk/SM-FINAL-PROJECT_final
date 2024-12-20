let img1; // 노동요 버전(배속) 배경
let img2; // 일반 배경

function preload() {
  img1 = loadImage("f111.png");
  img2 = loadImage("f222.png");
}

function setup() {
  createCanvas(640, 1280);//(캔버스 크기 640x640 + 아래 추가 640)
}

function draw() {
  background(220);
  image(img1, 0, 0, 640, 640);
  image(img2, 0, 0, 640, 640);
  fill(253, 159, 40); // 오렌지색 하단 배경
  rect(0, 640, 640, 640); //640*640 하단 공간 추가
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("𝐑𝐈𝐃𝐄 𝐓𝐇𝐄 𝐒𝐓𝐎𝐑𝐌", width / 2, 640 + 640 / 2); // 한화이글스의 2025년 슬로건
 stroke(0); // 검정색 테두리
  strokeWeight(3); // 테두리 두께
  fill(255); // 흰색
  ellipse(230, 410, 50, 50);//야구공
  
}


