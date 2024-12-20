let mm; // 행복송
let mm2; // 내사랑 한화 내사랑 이글스
let button;
let buttonPause;
let vol;
let slider;
let slidePan;
let sliderRate;
let amp;

let img1; // 노동요 버전(배속) 배경
let img2; // 일반 배경

function preload() {
  soundFormats("mp3", "ogg");
  mm = loadSound("f1.mp3");
  mm2 = loadSound("f2.mp3"); 
  
  img1 = loadImage("f111.png");
  img2 = loadImage("f222.png");
}

function setup() {
  createCanvas(640, 1280); //(캔버스 크기 640x640 + 아래 추가 640)
  amp = new p5.Amplitude();
  vol = 0.5;

  // PLAY 버튼
  button = createButton("PLAY");
  button.position(20, 20);
  button.mousePressed(playMusic);

  // STOP 버튼
  buttonPause = createButton("STOP");
  buttonPause.position(100, 20);
  buttonPause.mousePressed(pauseMusic);

  // 슬라이더 설정
  slider = createSlider(0, 1, 0.5, 0.01); // 볼륨 조절
  slider.position(20, 100);
  
  slidePan = createSlider(-1, 1, 0, 0.1); // 팬 조절
  slidePan.position(20, 140);

  sliderRate = createSlider(0.5, 2, 1, 0.1); // 속도 조절
  sliderRate.position(20, 180);
}

function draw() {
  background(220);

  // 배경 이미지
  image(img1, 0, 0, 640, 640);
  image(img2, 0, 0, 640, 640);

  fill(253, 159, 40); // 오렌지색 하단 배경
  rect(0, 640, 640, 640); // 640*640 하단 공간 추가

  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("𝐑𝐈𝐃𝐄 𝐓𝐇𝐄 𝐒𝐓𝐎𝐑𝐌", width / 2, 640 + 640 / 2); // 한화이글스의 2025년 슬로건

  
  let vol = amp.getLevel();
  let diameter = map(vol, 0, 1, 50, 150);
  fill(0);
 ellipse(322, 380, 10+amp.getLevel()*100, 10+amp.getLevel()*100);
 ellipse(495, 390, 10+amp.getLevel()*100, 10+amp.getLevel()*100);
} //눈알로 변경

function playMusic() {
  if (!mm.isPlaying() && !mm2.isPlaying()) {
    mm.play();
    button.html("STOP");
  } else {
    mm.stop();
    mm2.stop();
    button.html("PLAY");
  }
}

function pauseMusic() {
  if (mm.isPlaying()) {
    mm.pause();
    button.html("PLAY");
  } else if (mm2.isPlaying()) {
    mm2.pause();
    button.html("PLAY");
  }
}
