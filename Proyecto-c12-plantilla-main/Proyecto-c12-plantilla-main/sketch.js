var path,boy, leftBoundary,rightBoundary,coin,bomb,energyDrink,obstacle1,obstacle2;
var pathImg,boyImg,coinImg,bombImg,energyDrinkImg,obstacle1Img,obstacle2Img;
var i;

function preload(){
  //loadImage de path (camino)
  pathImg = loadImage("path.png");
  //loadAnimation de boy (niño)
  boyImg = loadAnimation("Jake1.png","Jake2.png","Jake3.png","Jake4.png","Jake5.png");
  //loadImage de Coin (moneda)
  coinImg = loadImage("coin.png");
  //loadImage de Bomb (bomba)
  bombImg = loadImage("bomb.png");
  //loadImage de EnergyDrink (bebida)
  energyDrinkImg = loadImage("energyDrink.png");
  //loadImage de Obstacle 1 (obstáculo)
  obstacle1Img = loadImage("obstacle-1.png");
  //loadImage de Obstacle 2 (obstáculo)
  obstacle2Img = loadImage("obstacle-2.png");
}

function setup(){
  
  createCanvas(400,400);
 //crear sprite de path (camino) 
path = createSprite (200,200,400,400)
//agregar imagen de path
path.addImage("path",pathImg);
//Hacer que la pista sea un fondo en movimiento al darle velocidad Y.

//modificar escala de path.
path.scale=1.2;

//crear sprite de boy (niño)
boy=createSprite(200,300);
//agregar animación para boy
boy.addAnimation("Jake",boyImg);
//modificar escala de boy. 
boy.scale=0.6;


// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
////establecer visibilidad como false (falso) para límite izquierdo
leftBoundary.visible = false;

//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
//establecer visibilidad como false (falso) para límite derecho
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moviéndose en el eje X con el mouse
  boy.x = World.mouseX;

  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();

  var select_sprites = Math.round(random(1,5));
  
  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {-
      createCoins();
    } else if (select_sprites == 2) {
      createBombs();
    }else if(select_sprites == 3){
      createEnergyDrinks();
    }else if(select_sprites == 4){
      createObstacle1();
    }else if(select_sprites == 5){
      createObstacle2();
    }
  }

  
  
}


function createCoins() {
  coin = createSprite(random(100, 300),20, 10, 10);
  coin.addImage("moneda",coinImg);
  coin.scale=0.3;
  coin.velocityY = 3;
  coin.lifetime = 150;
  coin.depth = boy.depth -1;
  if(boy.isTouching(coin)){
    coin.destroy;
  }
    
  }

function createBombs() {
  bomb = createSprite(random(70, 300),20, 10, 10);
  bomb.addImage("bomba",bombImg);
  bomb.scale=0.07;
  bomb.velocityY = 3;
  bomb.lifetime = 150;
  bomb.depth = boy.depth -1;
    
  }

function createEnergyDrinks() {
  energyDrink = createSprite(random(70, 300),20, 10, 10);
  energyDrink.addImage("bebida",energyDrinkImg);
  energyDrink.scale=0.07;
  energyDrink.velocityY = 3;
  energyDrink.lifetime = 150;
  energyDrink.depth = boy.depth -1;
    
  }

function createObstacle1() {
  obstacle1 = createSprite(random(70, 300),20, 10, 10);
  obstacle1.addImage("obstacle1",obstacle1Img);
  obstacle1.scale= 0.5;
  obstacle1.velocityY = 3;
  obstacle1.lifetime = 150;
  obstacle1.depth = boy.depth -1;
      
  }
function createObstacle2(){
  obstacle2 = createSprite(random(70,300),20, 10, 10);
  obstacle2.addImage("obstacle2",obstacle2Img);
  obstacle2.scale= 0.5;
  obstacle2.velocityY= 3;
  obstacle2.lifetime= 150;
  obstacle2.depth = boy.depth -1;

}




