var canvas;
var sound1 , sound2 , sound3;
var sur1 , sur2, sur3, sur4;
var box;
var topEdge , leftEdge , rightEdge; 
function preload()
{
    sound1 = loadSound("music.mp3");
    sound2 = loadSound("music.ogg");
    sound3 = loadSound("music2.ogg");
}
function setup()
{
    canvas = createCanvas(400,500);
    sur1 = createSprite(50,487,90,20);
    sur2 = createSprite(150,487,90,20);
    sur3 = createSprite(250,487,90,20);
    sur4 = createSprite(350,487,90,20);
    sur1.shapeColor = "orange"
    sur2.shapeColor = "skyblue"
    sur3.shapeColor = "maroon"
    sur4.shapeColor = "green"
    box = createSprite(random(50,350),250,20,20)

    box.velocityX = 6;
    box.velocityY = 4;
    box.shapeColor = "white"
    topEdge = createSprite(50,0,900,1);
    rightEdge = createSprite(0,225,1,600);
    leftEdge = createSprite(400,225,1,600);

}

function draw() 
{
    background("rgb(169,169,169)");
    createEdgeSprites();
    box.bounceOff(topEdge);
    box.bounceOff(rightEdge);
    box.bounceOff(leftEdge);
    if(box.isTouching(sur1) && box.bounceOff(sur1)){
        box.shapeColor = "orange";
        sound1.play();
    }
     if((box.isTouching(sur2)) && box.bounceOff(sur2)){
        box.shapeColor = "skyblue";
        sound2.play();
    }
    if((box.isTouching(sur3)) && box.bounceOff(sur3)){
        box.shapeColor = "maroon";
        sound3.play();

    }
    if((box.isTouching(sur4)) && box.bounceOff(sur4)){
        box.shapeColor = "green";
        box.velocityX=0;
        box.velocityY = 0;
    }
        drawSprites();
}