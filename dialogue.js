let lumberJackDialogue, womanDialogue, girlDialogue, steamDudeDialogue, oldManDialogue;
let progress, inventory, missionPerson, missionObject;

// the progress determines what string we are at in the array, when the mission is about one or two characters
// the rest just say pointless stuff
lumberJackDialogue = ["Hi, i found this fishing rod, can you give it to my friend down at the port", "Can you help me with something, i cant find my raincoat, i might have left it down at the harbor"]

womanDialogue = ["Hello", ""]


girlDialogue = ["Hey", ""]

steamDudeDialogue = ["Ahoy, Welcome to our town, have you seen my fishing rod? if you ever forget your mission you can always see it in the inventory, just press I", "I found this raincoat do you know who it belongs to?",]

oldManDialogue = ["Welcome to the ruin, once upon a time, a great castle stood in this valley. but now all there is left is a couple of stones", " i wonder where my hearing aid is"]

// 
missionGoal = ["find and return the fishing rod",]
// the person you have to talk to, in order to get the object.
missionPerson = ["lumberJack"]

// the person you have to deliver the object to 
missionAccomplishedPerson = ["steamDude"]

// the object you must have in your inventory to accomplish to mission  
missionObject = ["fishing rod",]

function npcDialogue() {
    let npcText;



    if (currentMap === forest) {
        npcText = lumberJackDialogue[progress];
    }
    if (currentMap === town) {
        npcText = girlDialogue[progress];
    }
    if (currentMap === mine) {
        npcText = womanDialogue[progress];
    }
    if (currentMap === port) {
        npcText = steamDudeDialogue[progress];
    }
    if (currentMap === ruin) {
        npcText = oldManDialogue[progress];
    }
    IsmissionAccomplished();

    fill(240, 215, 155);
    rect(width / 2, height / 4 * 3, 550, 260);
    fill(0);
    text(npcText, width / 2, height / 4 * 3, 550 - 10, 260 - 10);
    if (currentMap.npcName == missionPerson[progress]) {
        inventory = missionObject[progress];
    }
    displayMissionAndInventory();
}


function IsmissionAccomplished() {
    if (missionObject[progress] == inventory && missionAccomplishedPerson[progress] == currentMap.npcName) {
        alert("Mission accomplished");
        progress++
        inventory = "nothing";

    }
}


function displayMissionAndInventory() {
    if (keyIsDown(73)) {
        textSize(15);
        fill(240, 215, 155);
        rect(width / 18, height / 18, 200, 80);
        fill(0);
        text("Inventory: " + inventory, 10, 10, 200, 50);
        text("Mission: " + missionGoal, width / 18, height / 18, 200 - 10, 80 - 10);
    }
}     