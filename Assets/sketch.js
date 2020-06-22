let backgroundImage;
let playerImage;

let backgroundImage;
let playerImage;

let scenario;
let player;
let music;

function preload(){
  backgroundImage = loadImage("images/scenario/forest.png");
  playerImage = loadImage("images/player/running.png");
  music = loadSound("sounds/music_back.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(backgroundImage, 2);
  player = new Player(playerImage);
  frameRate(40);
  music.loop();
}

function draw() {
  scenario.show();
  scenario.move();
  player.show();
}