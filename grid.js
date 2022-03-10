
let mapW = 10, mapH = 5, tileW = 128;
let tileSheet = [];
let tilePosX = [];
let tilePosY = [];
let currentMap = [];
let background;

function preload() {
    for (let i = 0; i < 19; i++) {

        let img = loadImage("tempStylesheet/png/Tiles/" + String(i) + ".png");
        //console.log("tempStylesheet/png/Tiles/" + String(i) + ".png");
        //"IndustrialTiles/1 Tiles" + "IndustrialTile_" + String(i) + ".png"
        tileSheet.push(img);

    }
    background = loadImage("tempStylesheet/png/BG/BG.png");
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    currentMap = level00;
    drawMap();
}
function drawMap() {

    console.log("i'm drawing the map!");
    image(background, 0, 0, width, height);
    for (let y = 0; y < mapH; y++) {
        for (let x = 0; x < mapW; x++) {
            image(tileSheet[currentMap.gameMap[(y * mapW) + x]], x * tileW, y * tileW, tileW, tileW);
            tilePosX.push(x * tileW);
            tilePosY.push(y * tileW);
        }
    }
    // Det her er vores npc for nu
    rect(tilePosX[currentMap.npcPos], tilePosY[currentMap.npcPos], tileW, tileW);
}


