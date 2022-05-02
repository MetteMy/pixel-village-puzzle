let lumberJackDialogue, womanDialogue, girlDialogue, steamDudeDialogue, oldManDialogue;
let progress, inventory, missionPerson, missionObject;

// the progress determines what string we are at in the array, when the mission is about one or two characters
// the rest just say pointless stuff
lumberJackDialogue = ["Hi, i found this fishing rod, can you give it to my friend down at the port", "some of the best advice you will ever hear will come from the forest", "Have you ever tasted lutefish? "]

womanDialogue = ["Hello", "Hey. Yeah I'm the girls mother. Thank you for finding me. Please tell her I'm here."]


girlDialogue = ["Hey", "Hello stranger. My mother says to be wary of strangers, but you seem like a nice person. Could you help me please? I can’t find my mother. Help me find her please?"]

steamDudeDialogue = ["Ahoy, Welcome to our town, have you seen my fishing rod? if you ever forget your mission you can always see it in the inventory, just press I", "Life is like sailing, you can use any wind to go in any direction", "Could you please talk to the man up by the mountain ruins? he makes the best ointment, and I need it to oil the joints of my metal arm"]

oldManDialogue = ["Welcome to the ruin, once upon a time, a great castle stood in this valley. but now all there is left is a couple of stones", "When i was young i used to walk 75 miles across a canyon, in a snowstorm, to get to school ", "Yes of course he can have some more ointment. Here it is. Thank you for bringing it to him.", ]

// 
missionGoal = ["find and return the fishing rod", "Find the girls mother", "Help the sailor get his ointment"]
// the person you have to talk to, in order to get the object.
missionPerson = ["lumberJack", "woman", "oldMan"]

// the person you have to deliver the object to 
missionAccomplishedPerson = ["steamDude", "girl", "steamDude"]

// the object you must have in your inventory to accomplish to mission  
missionObject = ["Fishing rod", "The mom", "Oinment"]

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
        rect(0, 0, 200, 80);
        fill(0);
        text("Inventory: " + inventory, 10, 10, 200, 50);
        text("Mission: " + missionGoal, 10, 25, 200, 50);
    }
}     