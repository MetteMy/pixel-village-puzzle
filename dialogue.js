let lumberJackDialogue, womanDialogue, girlDialogue, steamDudeDialogue, oldManDialogue;
let inventory, missionPerson, missionObject, missionText, isMissionAccomplished; 

// the progress determines what string we are at in the array, when the mission is about one or two characters
// the rest just say pointless stuff
lumberJackDialogue = ["A stranger in the forest! the last time i saw someone was when my dear friend came to fish with me, he forgot his fishing rod, can you give it to him", "some of the best advice you will ever hear will come from the forest", "Have you ever tasted lutefish? "]

womanDialogue = ["Hey, and welcome to town. this is the mine though there isn't a lot of mining going on anymore", "Hey. Yeah I'm the girls mother. Thank you for finding me. Please tell her I'm here.", "The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking."]


girlDialogue = ["My teddy bear loves ice cream, and i love ice cream too, do you like ice cream?", "Hello stranger. My mother says to be wary of strangers, but you seem like a nice person. Could you help me please? I can’t find my mother. Help me find her please?", "One two five... Six three nine"]

steamDudeDialogue = ["Ahoy, Welcome to our small town, have you perhaps seen my fishing rod? if you ever forget your mission you can always see it in the inventory, just press I", "Life is like sailing, you can use any wind to go in any direction", "Could you please talk to the man up by the mountain ruins? he makes the best ointment, and I need it to oil the joints of my metal arm"]

oldManDialogue = ["Welcome to the ruin, once upon a time, a great castle stood in this valley. but now all there is left is a couple of stones", "When i was young i used to walk 75 miles across a canyon, in a snowstorm, to get to school ", "Yes of course he can have some more ointment. Here it is. Thank you for bringing it to him.", ]


missionGoal = ["Find and return the fishing rod", "Find the girls mother", "Help the sailor get his ointment"]
// the person you have to talk to, in order to get the object.
missionPerson = ["lumberJack", "woman", "oldMan"]

// the person you have to deliver the object to 
missionAccomplishedPerson = ["steamDude", "girl", "steamDude"]

// the object you must have in your inventory to accomplish to mission  
missionObject = ["Fishing rod", "The mom", "Oinment"]

missionText = ["Thank you for finding it", "Thank you. Now I know where she is. I was right. You are nice.", "You're a real lifesaver y'know. Thank you for doing this."]

localStorage.setItem(progress, 0);
function npcDialogue() {
    progress = JSON.parse(localStorage.getItem("progress"));
    if (progress == null){
        progress = 0;
    }
    let npcText;
    if (isMissionAccomplished == false){
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
}
    checkMissionAccomplished();
    if (isMissionAccomplished == true){ 
        npcText = missionText[(progress -1)];
    }
    fill(240, 215, 155);
    rect(width / 2, height / 4 * 3, 550, 260);
    fill(0);
    text(npcText, width / 2, height / 4 * 3, 550 - 10, 260 - 10);
    
    if (currentMap.npcName == missionPerson[progress]) {
        inventory = missionObject[progress];
    }
    if (currentMap.npcName == missionAccomplishedPerson[progress] ){
        isMissionAccomplished = false;
    }

    displayMissionAndInventory();
}


function checkMissionAccomplished() {
    if (missionObject[progress] == inventory && missionAccomplishedPerson[progress] == currentMap.npcName) {
        console.log("mission accomplished");
        inventory = "nothing"; 
        progress ++;
        localStorage.setItem("progress", JSON.stringify(progress));
        isMissionAccomplished = true;
    }
    else {
        
    }
}


function displayMissionAndInventory() {
    if (keyIsDown(73)) {
        textSize(15);
        fill(240, 215, 155);
        rect(width / 10, height / 10, 200, 80);
        fill(0);
        text("Inventory: " + inventory, width / 10, height / 10, 200, 50);
        text("Mission: " + missionGoal[progress], width / 10, (height / 10) + 25, 200 - 10, 80 - 10);
    }
}     