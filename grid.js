
let mapW = 20, mapH = 9, tileW = 64; objectW = 128;
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






function collision() {
  
  let leftPlayerX = Math.floor(playerX / tileW);

  let rightPlayerX = Math.floor((playerX + tileW) / tileW);

  let upperPlayerY = Math.floor(playerY / tileW);

  let lowerPlayerY = Math.floor((playerY + tileW) / tileW);



  let upperLeft = currentMap.gameMap[(upperPlayerY * mapW) + leftPlayerX];
  let upperRight = currentMap.gameMap[(upperPlayerY * mapW) + rightPlayerX];
  let lowerLeft = currentMap.gameMap[(lowerPlayerY * mapW) + leftPlayerX];
  let lowerRight = currentMap.gameMap[(lowerPlayerY * mapW) + rightPlayerX];

  //console.log("upperLeft " + upperLeft + " upperRight " + upperRight + " lowerLeft "+ lowerLeft + " lowerRight "+ lowerRight);



  if (upperLeft > 4 || upperRight > 4 || lowerLeft > 4 || lowerRight > 4){ // 4 is the name of the tile
    //console.log("collision");
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
  
  
  if (playerX < 0 || playerX > width || playerY < 0 || playerY > height) {
  if (playerX <= 0 ){ // left
    neighborNr = 0;
  }
  if (playerY <= 0){ // up
    neighborNr = 1;
  }
  if (playerX + tileW >= width) { // right 
    neighborNr = 2;
  } 
  if (playerY + tileW >= height){ // down
    
    neighborNr = 3;
  } 
  
    image(background, 0, 0, width, height);
    
    let nextMap = currentMap.nextRoom[neighborNr];
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
  console.log("currentmap " + currentMap);

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

