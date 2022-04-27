let playerRun = [];
let playerJump = [];
let playerIdle = [];
let frame = 1;
let playerState = [];
let updated = false;

function playerMovement() {

    playerState = graveRobberIdle;

    if (keyIsPressed == true) {
        if (keyIsDown(65) || keyIsDown(37)) {//Left
            playerState = graveRobberWalkL;
            playerX -= playerXSpeed;
        }
        if (keyIsDown(68) || keyIsDown(39)) {//Right
            playerState = graveRobberWalkR;
            playerX += playerXSpeed;
        }
        if (keyIsDown(87) || keyIsDown(38)) {//Up
            playerState = graveRobberWalkR;
            playerY -= playerYSpeed;
        }
        if (keyIsDown(83) || keyIsDown(40)) {//Down
            playerState = graveRobberWalkL;
            playerY += playerYSpeed;
        }//WASD & Arrows

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
    if (playerState == graveRobberWalkR || playerState == graveRobberWalkL) {
        if (frame < 5) {
            if (frameCount % 4 == 0) {
                frame++
            }
        }
        else {
            frame = 0;

        }
    } else {
        frame = 0;
    }


    image(playerState, playerX, playerY, tileW, tileW, frame * playerW, 0, playerW, playerH);

}

