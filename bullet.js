class Bullet {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.exploded = false;
    this.isLost = false;
  }

  show = () => {
    noStroke();
    fill(0, 0, 255);
    ellipse(this.x, this.y, this.r, this.r);
  }

  move = () => {
    this.y -= 5;
  }

  hitting = (target) => {
    const d = dist(this.x, this.y, target.x, target.y);
    const range = this.r + target.r;
    return d < range;
  }

  explode = () => {
    this.exploded = true;
  }

  lost = () => {
    this.isLost = true;
  }

}
