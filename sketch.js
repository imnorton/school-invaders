var ship;
var enemies = [];
var ENEMIES_PER_ROW = 8;
var MAX_ROWS = 3;
var bullets = [];
const MAX_BULLETS = 5;

const width = 800;
const height = 600;

const shipHeight = 40;

function setup() {
  const canvas = createCanvas(width, height);
  canvas.parent('sketch-holder');
  bgImage = loadImage("images/classroom.jpg")
  ship = new Ship(width / 2, height - shipHeight + 10, 15, 70, width);
  for (r = 0; r < MAX_ROWS; r++) {
    for (var i = 0; i < ENEMIES_PER_ROW; i++) {
      enemies.push(new Enemy((i * 70) + 70, (r + 1) * 60, 25));
    }
  }
}

youWin = () => {
  fill(50, 255, 50);
  textSize(52);
  textFont("Arial");
  textAlign(CENTER, CENTER);
  text("YOU WIN! :D", width / 2, height / 2);
  noLoop();
}

youLose = () => {
  fill(255, 50, 50);
  textSize(52);
  textFont("Arial");
  textAlign(CENTER, CENTER);
  text("YOU LOSE! :C", width / 2, height / 2);
  noLoop();
}

function draw() {
  clear();
  imageMode(CORNER);
  image(bgImage, 0, 0)
  ship.move();
  ship.show();

  let hitEdge = false;
  let hitPlayer = false;

  enemies.forEach(enemy => {
    enemy.move();
    enemy.show();
    if (enemy.x > width || enemy.x < 0) {
      hitEdge = true;
    }
    if (enemy.y > height - 80) {
      hitPlayer = true;
    }
  });


  if (enemies.length < 1) {
    youWin();
  }

  if (hitPlayer) {
    youLose();
  }


  if (hitEdge) {
    enemies.forEach(enemy => {
      enemy.dropDown();
      enemy.changeDirection();
    })
  }

  bullets.forEach(bullet => {
    bullet.move();
    bullet.show();

    enemies.forEach(enemy => {
      if (bullet.hitting(enemy)) {
        bullet.explode();
        enemy.kill();
      }
    });

    if (bullet.y < 0) {
      bullet.lost();
    }
  });

  enemies = enemies.filter(enemy => {
    return !enemy.killed;
  });

  bullets = bullets.filter(bullet => {
    return !bullet.exploded && !bullet.isLost;
  });
}

function keyReleased() {
  switch (keyCode) {
    case RIGHT_ARROW:
      ship.setDir(0);
      break;
    case LEFT_ARROW:
      ship.setDir(0);
      break;
    default:
      break;
  }
}

function keyPressed() {
  if (key === ' ' && bullets.length < MAX_BULLETS) {
    var bullet = new Bullet(ship.x, height - shipHeight, 5);
    bullets.push(bullet);
  }

  switch (keyCode) {
    case RIGHT_ARROW:
      ship.setDir(1);
      break;
    case LEFT_ARROW:
      ship.setDir(-1);
      break;
    default:
      break;
  }
}