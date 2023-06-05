let colony = [];

class Ant {
  constructor(posX, posY) {
    this.x = posX;
    this.y = posY;
  }

  move() {
    utara = int(north.value());
    selatan = int(south.value());
    timur = int(east.value());
    barat = int(west.value());
    noStroke();
    fill(255);
    var choice = int(random(100));
    if (choice >= 0 && choice < utara) {
      this.y -= 10;
      image(up, this.x, this.y, 30, 30);
    } else if (choice >= utara && choice < utara + selatan) {
      this.y += 10;
      image(down, this.x, this.y, 30, 30);
    } else if (choice >= utara + selatan && choice < utara + selatan + barat) {
      this.x += 10;
      image(right, this.x, this.y, 30, 30);
    } else if (
      choice >= utara + selatan + barat &&
      choice < utara + selatan + barat + timur
    ) {
      this.x -= 10;
      image(left, this.x, this.y, 30, 30);
    }
    if (
      this.x <= width / 2 - 155 ||
      this.x >= width - 125 ||
      this.y <= 145 ||
      this.y >= height - 200
    ) {
      this.x = (3 * width) / 4 - 125;
      this.y = (height - 25) / 2;
    }
  }
}

function preload() {
  up = loadImage("ant up.png");
  right = loadImage("ant right.png");
  left = loadImage("ant left.png");
  down = loadImage("ant down.png");
  bg = loadImage("grass field.png");
  maze1 = loadImage("maze1.png");
  maze2 = loadImage("maze2.png");
  LMath = loadImage("Logo_Prodi.png");
  LITERA = loadImage("Logo_ITERA.png");
}

function setup() {
  createCanvas(1360, 695);
  frameRate(6);

  test = createInput();
  test.position(width / 4 - 275, height / 2 - 140);

  steps = createInput();
  steps.position(width / 4 - 275, height / 2 - 85);

  north = createInput();
  north.position(width / 4 - 275, height / 2 - 30);

  south = createInput();
  south.position(width / 4 - 275, height / 2 + 25);

  east = createInput();
  east.position(width / 4 - 275, height / 2 + 80);

  west = createInput();
  west.position(width / 4 - 275, height / 2 + 135);

  let play = createButton("Continue");
  play.position(width / 2 + 315, height - 165);
  play.mousePressed(CL);

  let pause = createButton("Pause");
  pause.position(width / 2 + 395, height - 165);
  pause.mousePressed(PL);

  let res = createButton("Reset");
  res.position(width / 2 + 460, height - 165);
  res.mousePressed(Res);
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

function draw() {
  background("#000000");

  image(bg, width / 2 - 125, 175, width / 2, height - 375);
  head();

  Member();

  cust();

  fill("#B8621B");
  rect(width / 2 - 100, height - 175, width / 2 - 50, 43.75);
  textAlign(LEFT);
  fill("white");
  text("Rata-rata jarak tempuh: ", width / 2 - 85, height - 150);
  check();
}

function head() {
  fill("#262A56");
  noStroke();
  rect(0, 0, width, 100);

  image(maze1, 0, 0, width / 2 - 230, 100);
  image(maze2, width / 2 + 235, 0, width / 2 - 150, 100);
  image(LITERA, width / 2 - 225, 12.5, 75, 75);
  image(LMath, width / 2 + 150, 12.5, 75, 75);

  textSize(25);
  textAlign(CENTER);
  fill("white");
  textStyle(BOLD);
  text("R A N D O M   W A L K", width / 2, 35);
  textStyle(NORMAL);
  textSize(20);
  text("Visualisasi Dalam Sains", width / 2, 65);
  text("MA2213", width / 2, 90);
}

function Member() {
  fill("#262A56");
  noStroke();
  rect(0, height - 75, width, 75);

  textSize(18);
  fill("white");
  let a = width / 2;
  let b = height - 40;
  textAlign(CENTER);
  text("Erisva Septentia H.", a - 550, b);
  text("120160001", a - 550, b + 25);

  text("Putri Sari", a - 360, b);
  text("121160003", a - 360, b + 25);

  text("Yolanda Sari S.", a - 175, b);
  text("121160028", a - 175, b + 25);

  text("Tonny Putra Yoga", a, b);
  text("121160048", a, b + 25);

  text("Nadia Marchela L.T.", a + 175, b);
  text("121160071", a + 175, b + 25);

  text("Dwi Wulandari", a + 360, b);
  text("121160080", a + 360, b + 25);

  text("Banua Asi Pardamean T.", a + 550, b);
  text("121160071", a + 550, b + 25);
}

function cust() {
  fill("#B8621B");
  rect(50, height / 2 - 200, width / 4 + 50, 420);

  a = width / 4;
  b = height / 2;

  textSize(18);
  fill("white");
  textStyle(NORMAL);
  textAlign(LEFT);
  text("Jumlah ", a - 275, b - 150);
  textStyle(ITALIC);
  text("agent ", a - 210, b - 150);
  textStyle(NORMAL);
  text("yang diinginkan:", a - 157, b - 150);
  text("Jumlah langkah yang ingin ditempuh: ", a - 275, b - 95);
  text("Peluang(%) gerak ke arah Utara: ", a - 275, b - 40);
  text("Peluang(%) gerak ke arah Selatan: ", a - 275, b + 15);
  text("Peluang(%) gerak ke arah Timur: ", a - 275, b + 70);
  text("Peluang(%) gerak ke arah Barat: ", a - 275, b + 125);
}

function distance() {
  numTest = int(test.value());
  step = int(steps.value());

  utara = int(north.value());
  selatan = int(south.value());
  timur = int(east.value());
  barat = int(west.value());
  x0 = 0;
  y0 = 0;
  sumDist = 0;
  for (let i = 0; i < numTest; i++) {
    x = x0;
    y = y0;
    for (let j = 0; j < step; j++) {
      var choice = int(random(100));
      if (choice >= 0 && choice < utara) {
        this.y += 1;
      } else if (choice >= utara && choice < utara + selatan) {
        this.y -= 1;
      } else if (
        choice >= utara + selatan &&
        choice < utara + selatan + timur
      ) {
        this.x -= 1;
      } else if (
        choice >= utara + selatan + timur &&
        choice < utara + selatan + timur + barat
      ) {
        this.x += 1;
      }
    }
    sumDist = sumDist + Math.sqrt((x - x0) ** 2 + (y - y0) ** 2);
  }
  avgDist = sumDist / numTest;
  textSize(18);
  fill("white");
  textStyle(NORMAL);
  textAlign(LEFT);
  text("" + avgDist, width / 2 + 115, height - 150);
}

function check() {
  numTest = int(test.value());
  utara = int(north.value());
  selatan = int(south.value());
  timur = int(east.value());
  barat = int(west.value());
  prob = utara + selatan + timur + barat;
  if (prob == 100) {
    textAlign(CENTER);
    text("Access granted", (3 * width) / 8 - 275, height / 2 + 190);

    distance();
    for (let i = 0; i < numTest; i++) {
      colony.push(new Ant((3 * width) / 4 - 125, (height - 25) / 2));
      colony[i].move();
    }
  } else {
    textAlign(CENTER);
    text("Total peluang harus 100%", (3 * width) / 8 - 275, height / 2 + 190);
  }
}

function Res() {
  for (let i = 0; i < numTest; i++) {
    colony[i].x = (3 * width) / 4 - 125;
    colony[i].y = (height - 25) / 2;
  }
}

function PL() {
  noLoop();
}

function CL() {
  loop();
}
