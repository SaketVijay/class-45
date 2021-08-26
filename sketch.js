var bImg, bcg
var bird, birdImg
function preload(){
    bImg = loadImage("flappyBirdBackground.png");
    birdImg = loadImage("images/flappy bird.png")

}
function setup(){
    createCanvas(1100, 750);
    bcg = createSprite(575, 400);
    bcg.addImage(bImg);
    bcg.scale = 0.8

    bird = createSprite(250, 300, 20, 20);
    bird.addImage(birdImg);
    bird.scale = 0.1;
    bird.velocityX = 3;

    
}

function draw(){
    background('black');
    mousePressed();
    bird.y = bird.y + 5;
    bcg.velocityX = -3;
    if(bcg.x < 0){
        bcg.x = 400;
    }
    drawSprites();
}
function mousePressed(){
    bird.y = bird.y - 10;
}