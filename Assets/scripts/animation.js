class Animation{
    constructor(array, image, x, sizeX, sizeY, spriteX, spriteY){
      this.matriz = matriz;
      this.image = image;
      this.sizeX = sizeX;
      this.sizeY = sizeY;
      this.x = x;
      this.y = height - this.sizeY;
      this.spriteX = spriteX;
      this.spriteY = spriteY;
      
      this.i = 0
    }
    
    show(){
      image(this.image, this.x, this.y, this.sizeX, this.sizeY, this.array[this.i][0], this.array[this.i][1], this.spriteX, this.spriteY);
      
      this.anim();
    }
  }