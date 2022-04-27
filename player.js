let playerRun = [];
let playerJump = [];
let playerIdle = [];
let frame = 1;
let playerState = [];
let updated = false;

function playerMovement() {

    playerState = graveRobberIdle;

    if (keyIsPressed == true) {
        if (keyIsDown(LEFT_ARROW)) {
            playerState = graveRobberWalkL;;
            playerX -= playerXSpeed;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            playerState = graveRobberWalkR;;
            playerX += playerXSpeed;
        }
        if (keyIsDown(UP_ARROW)) {
            playerState = graveRobberWalkR;
            playerY -= playerYSpeed;
        }
        if (keyIsDown(DOWN_ARROW)) {
            playerState = graveRobberWalkL;
            playerY += playerYSpeed;


        }

        update();
        updated = false;
    }
    if (keyIsPressed == false) {
        if (updated == false) {
            playerState = graveRobberIdle;
            update();
            updated = true;
        }

    }








}

function playerAnimation() {
    //playerState.length - 1
       if (playerState == graveRobberWalkR || playerState == graveRobberWalkL){
        if (frame < 5) {
            if(frameCount % 4 == 0){
            frame ++
            }
        }
        else {
            frame = 0;
    
        }
    } else {
        frame = 0;
    }
  

    image(playerState, playerX, playerY, tileW, tileW, frame * playerW, 0, playerW, playerH);




    /*
    
        if (frame < playerState.length - 1) {
            frame++
    
        }
        else {
            frame = 0;
    
        }
        //console.log("frame " + frame);
    
    
        image(playerState[frame], playerX, playerY, tileW, tileW);
    
    */
}

