var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 

  
var detective,detect_img;
var officer,office_img;
var play_button,next;
var next,next1,next2,next3,next4,next5,next6,next7,next8,next9,next10,next11;
var background,bg0,bg1,bg2,bg4,bg5,bg6,bg7,bg8,bg9,bg10,bg11,bg12,bg13,bg14,bg15,bg16,bg17,bg18,bg19;
var killed;
var next_button_img;
var gameState = 0;
var start = 0;
var play = 1;
var speech,speech2;
var speechVisibility1=true;
var speechVisibility2=true;
var container = document.querySelector(".text");

var speeds = {
  pause: 500, 
  slow: 120,
  normal: 90,
  fast: 40,
  superFast: 10
};
 
function preload(){
  detect_img = loadImage("images/detective.png");
  office_img = loadImage("images/officer.png")
  bg0 = loadImage("images/start.png");
  bg1 = loadImage("images/house.png");  
  bg2 = loadImage("images/0.PNG");
  bg3 = loadImage("images/1.PNG");
  bg4 = loadImage("images/2.PNG");
  bg5 = loadImage("images/3.PNG");
  bg6 = loadImage("images/inside.PNG");
  
}

function setup(){
 createCanvas(1200,750);
 background = createSprite(600,375,50,50);
 background.addImage(bg0);
 detective = createSprite(150,600,50,50);
 detective.addImage(detect_img);
 officer = createSprite(1050,600,50,50);
 officer.addImage(office_img);
 officer.scale = 1.5
 officer.visible = false;
 play_button =createSprite(643,520,400,200);
 play_button.visible = false;
 
 speech= new Speech(203,375,200,50,"Welcome to my game. Hope you like it");
 speech2= new Speech(203,375,200,50,"Welcome to my game. Hope you like it");
 speechVisibility2 = false;
 next= new NextButton(1100,600,false);
 next1= new NextButton(1100,500,false);
 next2= new NextButton(1100,400,false);
 next3= new NextButton(1100,300,false);
 next4= new NextButton(1100,200,false);
 next5= new NextButton(100,200,false);
 next6= new NextButton(100,300,false);
 next7= new NextButton(100,400,false);
 next8= new NextButton(100,500,false);
 next9= new NextButton(100,600,false);
 next10= new NextButton(100,700,false);
}

function draw(){
  
  if (mousePressedOver(play_button) && gameState === start){
    background.addImage(bg1);
    detective.visible = false;
    officer.visible = false;
    speech= new Speech(180,68,200,50,"Are you ready to play. click next");
    speechVisibility2 = false;
    next.next.visible = true
    gameState = play
  }
  if (next.mousepressed()&&gameState === play ){
    background.addImage(bg2);
    next1.next.visible = true
    speechVisibility2 = false;
    next.destroy();
    speech= new Speech(180,60,200,50,"See what happened!! one night");
    
  }
  
  if(next1.mousepressed()){
    background.addImage(bg3);
    speechVisibility1 = false;
    speechVisibility2 = false;
    next2.next.visible = true
    next1.destroy();
  }
  
  if(next2.mousepressed()){
    background.addImage(bg4);
    speechVisibility1= false;
    speechVisibility2 = false;
    next3.next.visible = true
    next2.destroy();
  }
  if(next3.mousepressed()){
    background.addImage(bg5);
    speechVisibility1= false;
    speechVisibility2 = false;
    next4.next.visible = true
    next3.destroy();
  }
  if(next4.mousepressed()){
    background.addImage(bg6);
    detective.visible=true;
    speechVisibility1 = true;
    speechVisibility2 = false;
    next5.next.visible = true
    speech= new Speech(180,60,200,50,"Hi. I am Detective Amber");
    next4.destroy();
  }
  if(next5.mousepressed()){
    background.addImage(bg6);
    detective.visible=true;
    speechVisibility1 = true;
    speechVisibility2 = false;
    next6.next.visible = true
    speech= new Speech(300,60,200,50,"I am here to investigate. the murder of Dr Sole.");
    next5.destroy();
  }
  if(next6.mousepressed()){
    background.addImage(bg6);
    detective.visible=true;
    speechVisibility1 = true;
    speechVisibility2 = false;
    next7.next.visible = true
    speech= new Speech(300,60,200,50,"office tell me what has. happened.");
    next6.destroy();
  }
  if(next7.mousepressed()){
    background.addImage(bg6);
    detective.visible=true;
    officer.visible=true;
    speechVisibility1 = true;
    speechVisibility2 = false;
    next8.next.visible = true
    speech= new Speech(700,260,350,100,"Dr sole's body was found in the basement at 0726. by the maid when she was restocking food. ");
    next7.destroy();
  }
  if(next8.mousepressed()){
    background.addImage(bg6);
    detective.visible=true;
    officer.visible=true;
    speechVisibility1 = true;
    speechVisibility2 = false;
    next9.next.visible = true
    speech= new Speech(700,260,350,100,"Body has a big wound on it's chest which appeares to be a. stab wounds of a weapon thats pointy like a spear");
    next8.destroy();
  }
  if(next9.mousepressed()){
    background.addImage(bg6);
    detective.visible=true;
    officer.visible=true;
    speechVisibility1 = true;
    speechVisibility2 = true;
    next10.next.visible = true
    speech= new Speech(700,260,390,100,"traces of BENZODIAZEPINE were found in the victim's system. which states he was drugged then murdered.");
    speech2= new Speech(750,360,200,50,"Body was dead for 67mins. Pretty FRESH");
    next9.destroy();
  }
  if(next10.mousepressed()){
    background.addImage(bg6);
    detective.visible=true;
    officer.visible=true;
    speechVisibility1 = true;
    speechVisibility2 = true;
    //next11.next.visible = true
    speech= new Speech(700,260,200,100,"here are the suspect for. questioning!");
    speech2= new Speech(300,360,200,50,"yeah, I will choose who first. Thanks");
    next10.destroy();
  }


      
 
 
  drawSprites();
  if(speechVisibility1 === true){
    speech.display();
  }
  if(speechVisibility2 === true){
    speech2.display();
  }

  text("("+mouseX+","+mouseY+")",mouseX,mouseY);
}   

