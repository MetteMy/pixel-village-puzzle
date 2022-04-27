
function setup() {
  createCanvas(windowWidth, windowHeight);
  currentMap = port;
  speed = 4;
  playerYSpeed = 0;
  playerXSpeed = speed;
  playerState = graveRobberIdle;
  progress = 0;
  inventory = "nothing"
   
  playerX = tilePosX[currentMap.playerStartPos];
  playerY = tilePosY[currentMap.playerStartPos];
  //rect(playerX, playerY, tileW, tileW);
  drawNewMap();
}


function draw() {
  playerMovement();
  npcDistance()
  displayMissionAndInventory();
}
function update(){ // update runs when moving
    updateMap();
    collision();
    changeMap();
    

}