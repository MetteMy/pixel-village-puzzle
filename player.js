let playerRun = [];
let playerJump = [];
let playerIdle = [];
let frame = 1;
let playerState = [];
let updated = false; 

function playerMovement() {

    playerState = playerIdle;
    
    if (keyIsPressed == true){
        if (keyIsDown(LEFT_ARROW)) {
            playerState = playerRun;
            playerX -= playerXSpeed;           
        }
        if (keyIsDown(RIGHT_ARROW)) {
            playerState = playerRun;
            playerX += playerXSpeed;            
        }
        if (keyIsDown(UP_ARROW)) {
            playerState = playerJump;
            playerY -= playerYSpeed;            
        }
        if (keyIsDown(DOWN_ARROW)) {
            playerY += playerYSpeed;
           
        } 
        
        update();
        updated = false;
    }
    if (keyIsPressed == false){
        if(updated == false){
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
    console.log("frame " + frame);
    

    image(playerState[frame], playerX, playerY, tileW, tileW);


}

