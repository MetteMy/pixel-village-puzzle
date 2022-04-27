let startGameBtn;

function setup() {
  createCanvas(windowWidth, windowHeight);
  currentMap = port;
  speed = 4;
  playerYSpeed = 0;
  playerXSpeed = speed;
  playerState = graveRobberIdle;
  rectMode(CENTER);
  textAlign(CENTER);

  playerX = tilePosX[currentMap.playerStartPos];
  playerY = tilePosY[currentMap.playerStartPos];
  //rect(playerX, playerY, tileW, tileW);
  startScreen();
}


function draw() {
  playerMovement();
  npcDistance()
}
function update() { // update runs when moving
  updateMap();
  collision();
  changeMap();

}

function startScreen() {
  image(background, 0, 0, width, height);
  textSize(100);
  fill(25, 100, 126);
  text("Pixel Village Puzzle", width / 2, height / 4);
  textSize(10);
  text("Creators: Mette & Amelie", 60, 10);
  startGameBtn = createButton('Start Game').style('background-color', "#2B9EB3").style('font-size', '30px').size(200, 80).position((width / 2) - 100, height / 2);
  startGameBtn.mousePressed(function () {
    startGameBtn.hide();
    drawNewMap();
  })
}