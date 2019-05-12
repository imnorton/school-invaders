class Enemy {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.xdir = 1;
    this.killed = false;
    this.img = loadImage("images/mr_unwin.gif")
  }

  show = () => {
    noStroke();
    fill(10, 200, 255);
    imageMode(CENTER);
    image(this.img, this.x, this.y, this.r * 2, this.r * 2);
  }

  move = () => {
    this.x += this.xdir * 2;
  }

  kill = () => {
    this.killed = true;
  }
  dropDown = () => {
    this.y += this.r * 2;
  }
  changeDirection = () => {
    this.xdir *= -1;
  }

}



