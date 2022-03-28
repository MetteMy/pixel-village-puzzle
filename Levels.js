let level00, level01, level02, level03, level04;

level00 = {
    gameMap: [    
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 13, 14, 15, 0, 
    0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 
    2, 3, 0, 0, 0, 2, 0, 0, 0, 0, 
    7, 10, 11, 2, 2, 7, 17, 17, 11,2],
    npcPos: 34, 
    playerStartPos: 10, 
    doors: [49,39],
    nextRoom: ["level01", "level02", "level03", "level04"], // i rækkefølgen venstre, op, højre, ned
    

}


level01 = {
    gameMap: [
    0, 0, 0, 0, 0, 3, 2, 7, 0, 5, 
    0, 0, 0, 0, 2, 3, 2, 0, 0, 0, 
    0, 0, 0, 0, 2, 3, 2, 0, 2, 0, 
    0, 0, 0, 0, 2, 3, 8, 0, 8, 0, 
    2, 2, 2, 2, 2, 3, 7, 2, 5, 12], 
    npcPos: 35, 
    playerStartPos: 11, 
    doors: [10,20],
    nextRoom: [level04, level02, level00, level04],
}

level02 = {
    gameMap: [
    0, 0, 0, 0, 0, 3, 2, 5, 5, 5, 
    0, 0, 0, 7, 0, 3, 0, 7, 7, 7, 
    0, 0, 0, 7, 0, 3, 0, 7, 0, 7, 
    0, 7, 7, 7, 0, 3, 8, 7, 8, 7, 
    0, 0, 0, 0, 2, 3, 7, 2, 7, 12], 
    npcPos: 24, 
    playerStartPos: 21, 
    doors: [10,20],
    nextRoom: [level01, level04, level03, level00],
}
level03 = {
    gameMap: [
    0, 0, 0, 0, 0, 3, 2, 5, 5, 5, 
    0, 0, 0, 0, 2, 3, 2, 0, 0, 0, 
    0, 0, 0, 0, 2, 3, 2, 0, 2, 0, 
    0, 0, 0, 0, 2, 3, 8, 0, 8, 0, 
    11, 11, 11, 11, 11, 3, 7, 11, 0, 12], 
    npcPos: 35, 
    playerStartPos: 11, 
    doors: [10,20],
    nextRoom: [level00, level02, level01, level04],
}
level04 = {
    gameMap: [
    0, 0, 0, 0, 0, 3, 11, 8, 8, 8, 
    0, 0, 0, 0, 11, 3, 11, 0, 0, 0, 
    0, 0, 0, 0, 11, 3, 11, 0, 11, 0, 
    0, 0, 0, 0, 11, 3, 0, 0, 0, 0, 
    11, 11, 2, 2, 2, 3, 7, 2, 5, 12], 
    npcPos: 35, 
    playerStartPos: 11, 
    doors: [10,20],
    nextRoom: [level01, level00, level03, level02],
}