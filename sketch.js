var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var player1score =0;
var player2score =0;

function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);

  // Add conditions for gameStates and playerCount
  if(playerCount ==2){
    game.update(1)
  }
  if(gameState === 1){
    clear ()
    game.play();
    fruit();
  }
  if(gameState === 2){
    game.end();
  }

}

function fruit(){
  if(frameCount % 20 ===0){
    fruits = createSprite(random(100,990),-5,100,100)
    fruits.velocityY = 6;

    var Ran = Math.round(random(1,5));
    switch(Ran){
      case 1:fruits.addImage("abc",fruit1_img)
      break;
      case 2:fruits.addImage("d",fruit2_img)
      break;
      case 3:fruits.addImage("e",fruit3_img)
      break;
      case 4:fruits.addImage("f",fruit4_img)
      break;
      case 5:fruits.addImage("g",fruit5_img)
      break;

    }
    fruitGroup.add(fruits);
  }
}