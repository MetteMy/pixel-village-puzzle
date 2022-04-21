
let mapW = 20, mapH = 9, tileW = 64; objectW = 128;
let tileSheet = [];
let tilePosX = [];
let tilePosY = [];
let currentMap = [];
let currentDialogue = [];
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

  let upperLeft2 = currentMap.objects[(upperPlayerY * mapW) + leftPlayerX];
  let upperRight2 = currentMap.objects[(upperPlayerY * mapW) + rightPlayerX];
  let lowerLeft2 = currentMap.objects[(lowerPlayerY * mapW) + leftPlayerX];
  let lowerRight2 = currentMap.objects[(lowerPlayerY * mapW) + rightPlayerX];
  //console.log("upperLeft " + upperLeft + " upperRight " + upperRight + " lowerLeft "+ lowerLeft + " lowerRight "+ lowerRight);



  if (upperLeft > 4 || upperRight > 4 || lowerLeft > 4 || lowerRight > 4 || upperLeft2 > 0 || upperRight2 > 0 || lowerLeft2 > 0 || lowerRight2 > 0) { // 4 is the name of the tile
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
  constructor(xPos, yPos, type, object) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.type = type;
    this.object = object;
  }
  render() {

    image(tileSheet[this.type], this.xPos, this.yPos, tileW, tileW);

    image(objects[this.object], this.xPos, this.yPos, tileW, tileW);


  }


}







function changeMap() {


  if (playerX < 0 || playerX > width || playerY < 0 || playerY > height) {
    if (playerX < 0) { // left
      neighborNr = 0;
    }
    if (playerY < 0) { // up
      neighborNr = 1;
    }
    if (playerX + tileW > width) { // right 
      neighborNr = 2;
    }
    if (playerY + tileW > height) { // down

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

      tiles.push(new Tile(x * tileW, y * tileW, currentMap.gameMap[(y * mapW) + x], currentMap.objects[(y * mapW) + x]));
      tilePosX.push(x * tileW);
      tilePosY.push(y * tileW);

    }
  }

  for (let i = 0; i < tiles.length; i++) {
    tiles[i].render();
  }

  displayNPC();
  playerX = tilePosX[currentMap.playerStartPos];
  playerY = tilePosY[currentMap.playerStartPos];
  
  playerAnimation();
  

}

function updateMap() {

  image(background, 0, 0, width, height);
  for (let i = 0; i < tiles.length; i++) {
    tiles[i].render();
  }
  displayNPC();
  playerAnimation();
}


function displayNPC() {
  if (currentMap == forest) {
    image(lumberJack, tilePosX[currentMap.npcPos], tilePosY[currentMap.npcPos], tileW, tileW);
  }
  if (currentMap == port) {
    image(steamDude, tilePosX[currentMap.npcPos], tilePosY[currentMap.npcPos], tileW, tileW); 
    
  }
  if (currentMap == town) {
    image(girl, tilePosX[currentMap.npcPos], tilePosY[currentMap.npcPos], tileW, tileW);
    
  }
  if (currentMap == mine) {
    image(woman, tilePosX[currentMap.npcPos], tilePosY[currentMap.npcPos], tileW, tileW);
  }
  if (currentMap == ruin) {
    image(oldMan, tilePosX[currentMap.npcPos], tilePosY[currentMap.npcPos], tileW, tileW);
    //rect(tilePosX[currentMap.npcPos], tilePosY[currentMap.npcPos], tileW, tileW);
  }
}