class Division extends Ground {
  display() {
    
    var pos = this.body.position;
    rectMode(CENTER);
    fill("white");
    rect(pos.x, pos.y, this.width, this.height);
  }
}
