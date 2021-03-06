let backgroundImage;
let playerImage;
let enemyImage;

let scenario;
let player;
let enemy;
let music;

const enemyArray = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
];

const playerArray = [
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
      [660, 810],
    ];

function preload(){
  backgroundImage = loadImage("images/scenario/forest.png");
  playerImage = loadImage("images/player/running.png");
  enemyImage = loadImage("images/enemies/tear.png");
  music = loadSound("sounds/music_back.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(backgroundImage, 2);
  player = new Player(playerArray, playerImage,0, 110, 135, 220, 270);
  enemy = new Enemy(enemyArray, enemyImage, width - 52, 52, 52, 104, 104);
  frameRate(40);
  music.loop();
}

function keyPressed(){
  if(key === 'ArrowUp'){
    player.jump();
  }
}

function draw() {
  scenario.show();
  scenario.move();
  
  player.show();
  player.applyGravity();
  
  enemy.show();
  enemy.move();
  
  if(player.isColliding(enemy)){
    console.log("a")
  }
}
