
var canvas,database;
var gameState=0
var form,game,player,playerCount;



function setup(){
    database=firebase.database()
        canvas = createCanvas(1000,500);
   game=new Game();
   game.getState();
   game.start();
   
}

function draw(){
    background("white");
    
  
}

