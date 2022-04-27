let playerRun = [];
let playerJump = [];
let playerIdle = [];
let frame = 1;
let playerState = [];
let updated = false;

function playerMovement() {

    playerState = playerIdle;

    if (keyIsPressed == true) {
        if (keyIsDown(65) || keyIsDown(37)) {//Left
            playerState = playerRun;
            playerX -= playerXSpeed;
        }
        if (keyIsDown(68) || keyIsDown(39)) {//Right
            playerState = playerRun;
            playerX += playerXSpeed;
        }
        if (keyIsDown(87) || keyIsDown(38)) {//Up
            playerState = playerJump;
            playerY -= playerYSpeed;
        }
        if (keyIsDown(83) || keyIsDown(40)) {//Down
            playerY += playerYSpeed;

        }//WASD & Arrows

        update();
        updated = false;
    }
    if (keyIsPressed == false) {
        if (updated == false) {
            playerState = playerIdle;
            update();
            updated = true;
        }

    }








}

function playerAnimation() {


    if (frame < playerState.length - 1) {
        frame++

    }
    else {
        frame = 0;

    }
    //console.log("frame " + frame);


    image(playerState[frame], playerX, playerY, tileW, tileW);


}

