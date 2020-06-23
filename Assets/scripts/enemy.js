class Enemy extends Animation{
    constructor(array, image, x, sizeX, sizeY, spriteX, spriteY){
      super(array, image, x, sizeX, sizeY, spriteX, spriteY);
      
      this.speed = 5;
    }
    
    move(){
      this.x = this.x - this.speed;
      
      if(this.x < -this.sizeX)
        this.x = width;
    }
  }