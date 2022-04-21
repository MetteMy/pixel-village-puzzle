
function setup() {
  createCanvas(windowWidth, windowHeight);
  currentMap = town;
  speed = 5;
  playerYSpeed = 0;
  playerXSpeed = speed;
  playerState = playerRun;
  
   
  playerX = tilePosX[currentMap.playerStartPos];
  playerY = tilePosY[currentMap.playerStartPos];
  //rect(playerX, playerY, tileW, tileW);
  drawNewMap();
}


function draw() {
  playerMovement();
  npcDistance()
}
function update(){ // update runs when moving
    updateMap();
    collision();
    changeMap();

}