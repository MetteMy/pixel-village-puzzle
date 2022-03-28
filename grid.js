
let mapW = 10, mapH = 5, tileW = 128;
let tileSheet = [];
let tilePosX = [];
let tilePosY = [];
let currentMap = [];
let background;
let playerX, playerY;
let oldPlayerX, oldPlayerY;
let playerXSpeed;
let playerYSpeed;
let speed;
let tiles = [];


function preload() {
  for (let i = 0; i < 19; i++) {

    let img = loadImage("tempStylesheet/png/Tiles/" + String(i) + ".png");
    //console.log("tempStylesheet/png/Tiles/" + String(i) + ".png");
    //"IndustrialTiles/1 Tiles" + "IndustrialTile_" + String(i) + ".png"
    tileSheet.push(img);
  }
  background = loadImage("tempStylesheet/png/BG/BG.png");


  for (let i = 1; i < 8; i++) {
    let playerImg = loadImage("adventure_girl/Run (" + String(i) + ").png");
    playerRun.push(playerImg);
  }
  playerIdle.push(loadImage("adventure_girl/Idle (1).png"));
  console.log("idle image"+playerIdle);
  
  for (let i = 1; i < 9; i++) {
    let playerImg = loadImage("adventure_girl/Jump (" + String(i) + ").png");
    playerJump.push(playerImg);
  }
}



function collision() {

  let leftPlayerX = Math.floor(playerX / tileW);

  let rightPlayerX = Math.floor((playerX + tileW) / tileW);

  let upperPlayerY = Math.floor(playerY / tileW);

  let lowerPlayerY = Math.floor((playerY + tileW) / tileW);
/*

  console.log("upperleft" + currentMap.gameMap[(upperPlayerY * mapW) + leftPlayerX])
  console.log("upperright" + currentMap.gameMap[(upperPlayerY * mapW) + rightPlayerX])
  console.log("lowerleft" + currentMap.gameMap[(lowerPlayerY * mapW) + leftPlayerX])
  console.log("lowerright" + currentMap.gameMap[(lowerPlayerY * mapW) + rightPlayerX])
  console.log("oldX: " + oldPlayerX + " newX: " + playerX);
  console.log("oldY: " + oldPlayerY + " newY: " + playerY);
*/
  let upperLeft = currentMap.gameMap[(upperPlayerY * mapW) + leftPlayerX];
  let upperRight = currentMap.gameMap[(upperPlayerY * mapW) + rightPlayerX];
  let lowerLeft = currentMap.gameMap[(lowerPlayerY * mapW) + leftPlayerX];
  let lowerRight = currentMap.gameMap[(lowerPlayerY * mapW) + rightPlayerX];





  if (upperLeft || upperRight || lowerLeft || lowerRight > 0) {
   
    playerXSpeed = 0;
    playerYSpeed = 0;

    if (oldPlayerY - playerY < 0) { // moving down
      
      playerY -= speed; 
       
    }
    if (oldPlayerY - playerY > 0) { // moving up
      playerY += speed;
      

    }
    if (oldPlayerX - playerX > 0) { // moving left
      
      playerX += speed;
      
    }
    if (oldPlayerX - playerX < 0) { // moving right
      
      playerX -= speed;
     
    }

  }
  else {
    playerXSpeed = speed; 
    playerYSpeed = speed; 
    
    oldPlayerX = playerX; 
    oldPlayerY = playerY; 
    
    
  }


}
class Tile {
  constructor(xPos, yPos, type) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.type = type;

  }
  render() {

    image(tileSheet[this.type], this.xPos , this.yPos , tileW, tileW);

  }
  

}



  



function changeMap() {
  //console.log(currentMap.nextRoom);
  
  if (playerX < 0 || playerX > width || playerY < 0) {
  if (playerX < 0 ){ // left
    neighborNr = 0;
  }
  if (playerY < 0){ // up
    neighborNr = 1;
  }
  if (playerX > width) { // right 
    neighborNr = 2;
  } 
  if (playerY > height){ // down
    neighborNr = 4;
  }
    image(background, 0, 0, width, height);
    console.log(currentMap.nextRoom[2]);
    let nextMap = currentMap.nextRoom[2];
    currentMap = eval(nextMap);
    drawNewMap();
  
}


  
 
}

function drawNewMap() {

  console.log("i'm drawing the map!");
  image(background, 0, 0, width, height);
  tiles.length = 0; 
  for (let y = 0; y < mapH; y++) {
    for (let x = 0; x < mapW; x++) {

      tiles.push(new Tile(x * tileW, y * tileW, currentMap.gameMap[(y * mapW) + x]));
      tilePosX.push(x * tileW);
      tilePosY.push(y * tileW);

    }
  }

  for (let i = 0; i < tiles.length; i++) {
    tiles[i].render();
  }
  // Det her er vores npc for nu
  rect(tilePosX[currentMap.npcPos], tilePosY[currentMap.npcPos], tileW, tileW);
  playerX = tilePosX[currentMap.playerStartPos];
  playerY = tilePosY[currentMap.playerStartPos];
  //rect(playerX, playerY, tileW, tileW);
  playerAnimation();

}

function updateMap(){
  
  image(background, 0, 0, width, height);
  for (let i = 0; i < tiles.length; i++) {
    tiles[i].render();
  }
  // Det her er vores npc for nu
  rect(tilePosX[currentMap.npcPos], tilePosY[currentMap.npcPos], tileW, tileW);
  
  //rect(playerX, playerY, tileW, tileW);
  playerAnimation();
}

