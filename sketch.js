var gameState, timer, i, tomatoSel, cheeseSel, capsicumSel, sauceSel, mushSel, peproSel;


function preload(){

  backgroundIMG = loadImage("images/background.png");
  buttonIMG = loadImage("images/buttons.png");
  boardIMG = loadImage("images/board.jpg");
  baseAnimation = loadAnimation("images/pda/1.png", "images/pda/2.png", "images/pda/3.png", "images/pda/4.png", 
  "images/pda/5.png", "images/pda/6.png", "images/pda/7.png", "images/pda/8.png", "images/pda/9.png" ,
  "images/pda/10.png", "images/pda/11.png", "images/pda/12.png", "images/pda/13.png", "images/pda/14.png", "images/pda/15.png");
  baseStillAni = loadAnimation("images/pda/15.png")
  mushroomIMG = loadImage("images/mush.png");
  onionIMG = loadImage("images/oni.png");
  tomatoIMG = loadImage("images/toma.png");
  capsicumIMG = loadImage("images/cap.png");
  GtomatoIMG = loadImage("images/Gtomato.png");
  cheeseIMG = loadImage("images/cheeze.png");
  Gcapsicum = loadImage("images/Gcapsicum.png");
  sauceIMG = loadImage("images/sauce.png");
  Gmush = loadImage("images/Gmush.png");
  pepIMG = loadImage("images/pep.png")
}



function setup(){
  //Sframe = frameCount
  createCanvas(1200,900);
  timer = 0;    
  gameState = "shop"
  i = 0;
  tomatoSel = 0;
  cheeseSel = 0;
  capsicumSel = 0;
  sauceSel = 0;
  mushSel = 0;
  peproSel = 0;

  playButton = createSprite(600, 550, 20, 20);
  playButton.addImage("button", buttonIMG);

  dough = createSprite(515, 525, 200, 200);
  dough.addAnimation("base", baseAnimation);
  dough.addAnimation("still", baseStillAni);
  dough.scale = 0.5
  dough.visible = false;
  timer = 0;

  tom1 = createSprite(1130, 115, 300, 500)
  tom1.addImage("tomatoKaGroup", GtomatoIMG)
  tom1.scale = 0.6
  
  tom2 = createSprite(1130, 155, 100, 100)
  tom2.addImage("tomatoKaGroup", GtomatoIMG)
  tom2.scale = 0.6
  
  tom3 = createSprite(1130, 185, 100, 100)  
  tom3.addImage("tomatoKaGroup", GtomatoIMG)
  tom3.scale = 0.6
  
  tom4 = createSprite(1130, 215, 100, 100)
  tom4.addImage("tomatoKaGroup", GtomatoIMG)
  tom4.scale = 0.6

  cap1 = createSprite(1130, 355, 300, 500)
  cap1.addImage("capsicumkagroup", Gcapsicum)
  cap1.scale = 0.6
  
  cap2 = createSprite(1130, 385, 100, 100)
  cap2.addImage("capsicumkagroup", Gcapsicum)
  cap2.scale = 0.6
  
  cap3 = createSprite(1130, 415, 100, 100)  
  cap3.addImage("capsicumkagroup", Gcapsicum)
  cap3.scale = 0.6
  
  cap4 = createSprite(1130, 455, 100, 100)
  cap4.addImage("capsicumkagroup", Gcapsicum)
  cap4.scale = 0.6

  mush1 = createSprite(1130, 615, 300, 500)
  mush1.addImage("mushroomkagroup", Gmush)
  mush1.scale = 0.6
  
  mush2 = createSprite(1130, 655, 100, 100)
  mush2.addImage("mushroomkagroup", Gmush)
  mush2.scale = 0.6
  
  mush3 = createSprite(1130, 685, 100, 100)  
  mush3.addImage("mushroomkagroup", Gmush)
  mush3.scale = 0.6
  
  mush4 = createSprite(1130, 715, 100, 100)
  mush4.addImage("mushroomkagroup", Gmush)
  mush4.scale = 0.6

  cheese = createSprite(394, 160, 140, 160)
  cheese.visible = false;

  sauce = createSprite(175, 165, 200, 160)
  sauce.visible = false;

  pepro = createSprite(578, 160, 140, 160)
  pepro.visible = false;

  
  //capsicum.visible = false;

  tom1.visible = false;
  tom2.visible = false;
  tom3.visible = false;
  tom4.visible = false;

  cap1.visible = false;
  cap2.visible = false;
  cap3.visible = false;
  cap4.visible = false;

  mush1.visible = false;
  mush2.visible = false;
  mush3.visible = false;
  mush4.visible = false;

  dough.setCollider("circle",-70,15,250);
  dough.debug = true
}

function draw() {
  background(backgroundIMG); 
  

  if(mousePressedOver(playButton)){
    gameState = "play";
  }

  if(gameState === "shop"){

    push();
      textSize(70);
      fill("black");
      textFont("Lucida Handwriting")
      text("PIZZA MAKING", 400, 350)
    pop();

  }

  if (gameState === "play"){
    
    timer += 0.1;
    //frame = frameCount;
    //console.log(frame)
    background(boardIMG);
    //dough.frameDelay = 25;
    playButton.destroy();
    tom1.visible = true;
    tom2.visible = true;
    tom3.visible = true;
    tom4.visible = true;
    
    cap1.visible = true;
    cap2.visible = true;
    cap3.visible = true;
    cap4.visible = true;

    mush1.visible = true;
    mush2.visible = true;
    mush3.visible = true;
    mush4.visible = true;
    
    dough.visible = true;

    if(timer > 3){
      dough.changeAnimation("still", baseStillAni);
      

    }

    if(mousePressedOver(tom1)){
      tomatoSel = 1
      cheeseSel = 0
      mushSel = 0
      sauceSel = 0
      capsicumSel = 0
      peproSel = 0
      //console.log(tomatoSel)
    }
    if(tomatoSel === 1 && mousePressedOver(dough)){
      //console.log("working")
      //pos1 = mouseX;
      //pos2 = mouseY;
      
      /*tomato[i] = createSprite(pos1, pos2, 20, 20)
      tomato[i].addImage(tomatoIMG);
      tomato[i].depth = 10;
      i = i + 1;*/
        
      //image(tomatoIMG, pos1, pos2);

      var tomato = createSprite(515, 525, 10, 20);
      tomato.addImage(tomatoIMG);
      tomato.scale = 0.4
      tomato.x = mouseX
      tomato.y = mouseY

    } 

    if(mousePressedOver(cheese)){
      cheeseSel = 1
      tomatoSel = 0
      sauceSel = 0
      mushSel = 0
      capsicumSel = 0
      peproSel = 0
      console.log(cheeseSel)
    }
    if(cheeseSel === 1 && mousePressedOver(dough)){
      var gratedCheese = createSprite(515, 525, 10, 20);
      gratedCheese.addImage(cheeseIMG);
      gratedCheese.scale = 0.4
      gratedCheese.x = mouseX
      gratedCheese.y = mouseY

    }

    if(mousePressedOver(cap1)){
      cheeseSel = 0
      tomatoSel = 0
      capsicumSel = 1
      sauceSel = 0
      mushSel = 0
      peproSel = 0
      console.log(capsicumSel)
    }
    if(capsicumSel === 1 && mousePressedOver(dough)){
      var capsicum = createSprite(515, 525, 10, 20);
      capsicum.addImage(capsicumIMG);
      capsicum.scale = 0.4
      capsicum.x = mouseX
      capsicum.y = mouseY

    }

    if(mousePressedOver(sauce)){
      cheeseSel = 0
      tomatoSel = 0
      capsicumSel = 0
      sauceSel = 1
      mushSel = 0
      peproSel = 0
    }
    if(sauceSel === 1 && mousePressedOver(dough)){
      var sauces = createSprite(515, 525, 10, 20);
      sauces.addImage(sauceIMG);
      sauces.scale = 0.4
      sauces.x = mouseX   
      sauces.y = mouseY

    }

    if(mousePressedOver(mush1)){
      cheeseSel = 0
      tomatoSel = 0
      capsicumSel = 0
      sauceSel = 0
      mushSel = 1
      peproSel = 0

    }
    if(mushSel === 1 && mousePressedOver(dough)){
      var mushroom = createSprite(515, 525, 10, 20);
      mushroom.addImage(mushroomIMG);
      mushroom.scale = 0.3
      mushroom.x = mouseX
      mushroom.y = mouseY

    }

    if(mousePressedOver(pepro)){
      cheeseSel = 0
      tomatoSel = 0
      sauceSel = 0
      mushSel = 0
      capsicumSel = 0
      peproSel = 1
      
    }
    if(peproSel === 1 && mousePressedOver(dough)){
      var peproni = createSprite(515, 525, 10, 20);
      peproni.addImage(pepIMG);
      peproni.scale = 0.2
      peproni.x = mouseX
      peproni.y = mouseY 

    }
    
  }

  


  
  drawSprites();

  
  
}