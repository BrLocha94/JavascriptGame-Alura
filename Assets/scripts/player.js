class Player extends Animation{
  constructor(array, image, x, sizeX, sizeY, spriteX, spriteY){
    super(array, image, x, sizeX, sizeY, spriteX, spriteY);
    
    this.initialY = height - this.sizeY;
    this.y = this.initialY;
    
    this.speed = 0;
    this.gravity = 3;
  }
  
  jump(){
    this.speed = this.speed - 30;
  }
  
  applyGravity(){
    this.y = this.y + this.speed;
    this.speed = this.speed + this.gravity;
    
    if(this.y > this.initialY){
      this.y = this.initialY;
      this.speed = 0;
    }
  }
  
  isColliding(enemy){
    const precision = .7;
    const collision = collideRectRect(this.x, this.y, this.sizeX * precision, this.sizeY * precision, enemy.x, enemy.y, enemy.sizeX * precision, enemy.sizeY * precision);
    
    return collision;
  }
}