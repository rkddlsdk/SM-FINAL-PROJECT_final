let mm; // 행복송
let mm2; // 내사랑 한화 내사랑 이글스
let mm3; // 내고향 충청도
let mm4; // 안타송
let button;
let buttonPause;
let vol;
let slider;
let slidePan;
let sliderRate;
let amp;
let img1; // 노동요 버전(배속) 배경
let img2; // 일반 배경
let img3; // 캐릭터
let img3X = 130; // img3의 x값 고정
let img3Y = 470; // img3의 초기 y값
let jumpV1 = 0; // 행복송 점프 위치
let jumpV2 = 0; // 내사랑 한화 점프 위치
let jumpV3 = 0; // 내고향 점프 위치
let jumpV4 = 0; // 안타송 점프 위치

function preload() {
  soundFormats("mp3", "ogg");
  mm = loadSound("f1.mp3");
  mm2 = loadSound("f2.mp3");
  mm3 = loadSound("f3.mp3");
  mm4 = loadSound("f4.mp3"); 
  
  img1 = loadImage("f111.png");
  img2 = loadImage("f222.png");
  img3 = loadImage("f3.png");
}

function setup() {
  createCanvas(640, 1280); //(캔버스 크기 640x640 + 아래 추가 640)
  amp = new p5.Amplitude();
  vol = 0.5;

  // PLAY 버튼 (행복송)
  let buttonPlay1 = createButton("PLAY 행복송");  buttonPlay1.position(20, 680);
  buttonPlay1.mousePressed(() => playMusic(mm));

  // PLAY 버튼 (내고향 충청도)
  let buttonPlay3 = createButton("PLAY 내고향 충청도");  buttonPlay3.position(130, 650);
  buttonPlay3.mousePressed(() => playMusic(mm3));

  // PLAY 버튼 (안타송)
  let buttonPlay4 = createButton("PLAY 안타송");
  buttonPlay4.position(130, 680);
  buttonPlay4.mousePressed(() => playMusic(mm4));
  
   // PLAY 버튼 (내사랑 한화 내사랑 이글스)
  let buttonPlay2 = createButton("PLAY 내사랑 한화");
  buttonPlay2.position(20, 650);
  buttonPlay2.mousePressed(() => playMusic(mm2));

  // STOP 버튼
  buttonPause = createButton("STOP");
  buttonPause.position(513, 650);
  buttonPause.mousePressed(pauseMusic);

  // 슬라이더 설정
  slider = createSlider(0, 1, 0.5, 0.01); // 볼륨 조절
  slider.position(470, 680);
  
  slidePan = createSlider(-1, 1, 0, 0.1); // 팬 조절
  slidePan.position(470, 710);

  sliderRate = createSlider(0.5, 2, 1, 0.1); // 속도 조절
  sliderRate.position(470, 740);

  // JUMP << 버튼
  let buttonJump = createButton("<<");
  buttonJump.position(470, 650);
  buttonJump.mousePressed(jumpSong2);

  // JUMP >> 버튼
  let buttonJump2 = createButton(">>");
  buttonJump2.position(570, 650);
  buttonJump2.mousePressed(jumpSong);
}

function draw() {
  background(220);

  // 배경 이미지
  image(img1, 0, 0, 640, 640);
  image(img2, 0, 0, 640, 640);
  
   // 속도에 따라 배경 이미지 변경 (1.5배속부터는 노동요 배경으로 변경)
  let sped = sliderRate.value();
  if (sped > 1.5) {
    image(img1, 0, 0, 640, 640);
  } else {
    image(img2, 0, 0, 640, 640);
  }

  // 볼륨 값 가져오기
  let vol = amp.getLevel();

  // 캐릭터 움직임 추가 (볼륨, 속도에 맞춰서 위아래로 튕기기)
  img3Y = 240 + sin(frameCount * sped * 0.5) * map(vol, 0, 1, 0, 50);

  image(img3, img3X, img3Y, 400, 400);

  fill(253, 159, 40); // 오렌지색 하단 배경
  rect(0, 640, 640, 640); // 640*640 하단 공간 추가

  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("𝐑𝐈𝐃𝐄 𝐓𝐇𝐄 𝐒𝐓𝐎𝐑𝐌", width / 2, 640 + 640 / 2); 
  // 한화이글스의 2025년 슬로건

  updateSoundProperties();
}

function updateSoundProperties() {
  if (mm.isPlaying()) {
    mm.setVolume(slider.value());
    mm.pan(slidePan.value());
    mm.rate(sliderRate.value());
  } else if (mm2.isPlaying()) {
    mm2.setVolume(slider.value());
    mm2.pan(slidePan.value());
    mm2.rate(sliderRate.value());
  } else if (mm3.isPlaying()) {
    mm3.setVolume(slider.value());
    mm3.pan(slidePan.value());
    mm3.rate(sliderRate.value());
  } else if (mm4.isPlaying()) {
    mm4.setVolume(slider.value());
    mm4.pan(slidePan.value());
    mm4.rate(sliderRate.value());
  }
}

function playMusic(track) {
  if (!track.isPlaying()) {
    stopAllMusic();
    track.play();
  } else {
    track.stop();
  }
}

function stopAllMusic() {
  mm.stop();
  mm2.stop();
  mm3.stop();
  mm4.stop();
}

function pauseMusic() {
  if (mm.isPlaying()) {
    mm.pause();
  } else if (mm2.isPlaying()) {
    mm2.pause();
  } else if (mm3.isPlaying()) {
    mm3.pause();
  } else if (mm4.isPlaying()) {
    mm4.pause();
  }
}

function jumpSong() {
  if (mm.isPlaying()) {
    jumpV1 += 105 / 5; // 행복송은 1분 45초 (=105초)를 5로 나눔
    if (jumpV1 >= 105) {
      jumpV1 = 105;
    }
    mm.jump(jumpV1);
  } else if (mm2.isPlaying()) {
    jumpV2 += 102 / 5; // 내사랑 한화는 1분 42초 (=102초)를 5로 나눔
    if (jumpV2 >= 102) {
      jumpV2 = 102; 
    }
    mm2.jump(jumpV2);
  } else if (mm3.isPlaying()) {
    jumpV3 += 145 / 5; // 내고향 충청도는 2분 25초 (=145초)를 5로 나눔
    if (jumpV3 >= 145) {
      jumpV3 = 145; 
    }
    mm3.jump(jumpV3);
  } else if (mm4.isPlaying()) {
    jumpV4 += 32 / 5; // 안타송은 32초를 5로 나눔
    if (jumpV4 >= 32) {
      jumpV4 = 32;
    }
    mm4.jump(jumpV4);
  }
}

function jumpSong2() {
  if (mm.isPlaying()) {
    jumpV1 -= 105 / 5; 
    if (jumpV1 <= 0) {
      jumpV1 = 0; 
    }
    mm.jump(jumpV1);
  } else if (mm2.isPlaying()) {
    jumpV2 -= 102 / 5; 
    if (jumpV2 <= 0) {
      jumpV2 = 0; 
    }
    mm2.jump(jumpV2);
  } else if (mm3.isPlaying()) {
    jumpV3 -= 145 / 5; 
    if (jumpV3 <= 0) {
      jumpV3 = 0; 
    }
    mm3.jump(jumpV3);
  } else if (mm4.isPlaying()) {
    jumpV4 -= 32 / 5; 
    if (jumpV4 <= 0) {
      jumpV4 = 0; 
    }
    mm4.jump(jumpV4);
  }
}
