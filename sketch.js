var bg,boy1,boy2,boy3;
var boy;
var invisibleGround,invisibleGround2;
var gameState = "serve"; 

function preload(){
    bg = loadImage("bg2.jpg");

    boy1 = loadAnimation("boy1.png");
    boy2 = loadAnimation("boy4..png","boy5.png");
    boy3 = loadAnimation("boy2.png");
    boy4 = loadAnimation("boy3.png");
}

function setup(){
    
    var canvas = createCanvas(windowWidth,windowHeight);
   

    bgi = createSprite(windowWidth/2,windowHeight/2,10,10);
    bgi.addImage(bg);
 
    boy = createSprite(275,335,10,10);
    boy.addAnimation("initialboy",boy1);
    boy.addAnimation("boyrunning",boy2);
    boy.scale=1;


    invisibleGround = createSprite(300,500,250,10);
    invisibleGround.visible=true; 

    invisibleGround2 = createSprite(800,518,270,10);
    invisibleGround2.visible=true; 

}

function draw(){
    background(0);

    if(keyDown("space")){
        gameState = "play";      
    }

    if(gameState === "play"){

        if(keyDown(UP_ARROW)){
            boy.velocityY=-10;
        }    

        bgi.velocityX= -4;
        invisibleGround.velocityX=-4    
        invisibleGround2.velocityX=-4    

        boy.collide(invisibleGround);
        boy.collide(invisibleGround2);

        boy.velocityY+=0.8;

        boy.changeAnimation("boyrunning",boy2);

        if (bgi.x < 440){
            bgi.x = bgi.width/2;
        }

    }  

invisibleGround.debug=true;
boy.debug=true;

    drawSprites();
}
