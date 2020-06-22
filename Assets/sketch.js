let backgroundImage;
let characterImage;

function preload(){
  backgroundImage = loadImage("images/cenario/floresta.png");
  characterImage = loadImage("images/personagem/correndo.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(backgroundImage);
  image(characterImage, 0, 0);
}