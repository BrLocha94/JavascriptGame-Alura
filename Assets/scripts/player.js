class Player{
    constructor(image){
      this.image = image;
      this.array = [
        [0, 0],
        [220, 0],
        [440, 0],
        [660, 0],
        [0, 270],
        [220, 270],
        [440, 270],
        [660, 270],
        [0, 540],
        [220, 540],
        [440, 540],
        [660, 540],
        [0, 810],
        [220, 810],
        [440, 810],
        [660, 810]
      ];
      this.i = 0;
    }
    
    show(){
      image(this.image, 0, height - 135, 110, 135, this.array[this.i][0], this.array[this.i][1], 220, 270);
      
      this.anim();
    }
    
    anim(){
      this.i ++;
      
      if(this.i >= this.array.length - 1){
        this.i = 0;
      }
        
    }
  }