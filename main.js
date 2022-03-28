
function setup() {
  createCanvas(windowWidth, windowHeight);
  currentMap = level00;
  speed = 10;
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
  }

function update(){
    updateMap();
    collision();
    changeMap();
}