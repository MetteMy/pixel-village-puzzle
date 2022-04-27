let objects = [];

function preload() {
    for (let i = 0; i < 11; i++) {
      
      let img = loadImage("mapPack/1 Tiles/Map_tile_" + String(i) + ".png");
      //console.log("tempStylesheet/png/Tiles/" + String(i) + ".png");
      //"IndustrialTiles/1 Tiles" + "IndustrialTile_" + String(i) + ".png"
      //
      tileSheet.push(img);
    }
    background = loadImage("tempStylesheet/png/BG/BG.png");
    lumberJack = loadImage("craftpix-891178-free-3-character-sprite-sheets-pixel-art/1 Woodcutter/Woodcutter.png");
    steamDude = loadImage("craftpix-891178-free-3-character-sprite-sheets-pixel-art/3 SteamMan/SteamMan.png");
    woman = loadImage("craftpix-781111-free-villagers-sprite-sheets-pixel-art/4 Woman/Woman.png");
    girl = loadImage("craftpix-781111-free-villagers-sprite-sheets-pixel-art/6 Girl/Girl.png");
    oldMan = loadImage("craftpix-781111-free-villagers-sprite-sheets-pixel-art/1 Old_man/Old_man.png");
    graveRobberWalkR = loadImage("craftpix-891178-free-3-character-sprite-sheets-pixel-art/2 GraveRobber/GraveRobber_walk.png");
    graveRobberWalkL = loadImage("craftpix-891178-free-3-character-sprite-sheets-pixel-art/2 GraveRobber/GraveRobber_walk_Left.png")
    graveRobberIdle = loadImage("craftpix-891178-free-3-character-sprite-sheets-pixel-art/2 GraveRobber/GraveRobber.png");
    for (let i = 1; i < 8; i++) {
      let playerImg = loadImage("adventure_girl/Run (" + String(i) + ").png");
      playerRun.push(playerImg);
    }

    playerIdle.push(loadImage("adventure_girl/Idle (1).png"));
    console.log("idle image" + playerIdle);
    
    for (let i = 1; i < 9; i++) {
      let playerImg = loadImage("adventure_girl/Jump (" + String(i) + ").png");
      playerJump.push(playerImg);
    }
      //objects
      
    for (let i = 0; i < 31; i++) {
      let objImg = loadImage("mapPack/2 Objects/Houses/" + String(i)+".png"); 
      objects.push(objImg);

    }    
  }