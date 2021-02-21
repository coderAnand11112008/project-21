var canvas;
var music;
var block1, block2, block3, block4;
var ball, edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";
    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "black";
    block3 = createSprite(515,580,200,30);
    block3.shapeColor = "pink";
    block4 = createSprite(740,580,220,30);
    block4.shapeColor = "yellow";

    //create box sprite and give velocity
    ball = createSprite(random(20,750),100,60,60);
    ball.shapeColor = "brown";
    ball.velocityX = 4;
    ball.velocityY = 9;
}

function draw() {
    background = "white";
    //create edgeSprite
    createEdgeSprites();
    ball.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(block1.isTouching(ball)){
        ball.shapeColor = "blue";
        music.play();
    }
    if(block2.isTouching(ball)){
        ball.shapeColor = "black";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }
    if(block3.isTouching(ball)){
        ball.shapeColor = "pink";
    }
    if(block4.isTouching(ball)){
        ball.shapeColor = "yellow";
    }
    drawSprites();
}
