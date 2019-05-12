class Ship {
  constructor(x, y, w, h, maxX) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.maxX = maxX;
    this.xdir = 0;
    this.img = loadImage("images/fountain_pen.gif")
  }

  show = () => {
    noStroke();
    imageMode(CENTER);
    image(this.img, this.x, this.y, this.w, this.h);

  }

  move = () => {
    this.x += this.xdir * 5;
    if (this.x > this.maxX) {
      this.x = this.maxX;
    }
    if (this.x < 0) {
      this.x = 0;
    }
  }

  setDir = (dir) => {
    this.xdir = dir;
  }
}



