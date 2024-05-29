//Resource Manager
var resourceBank = {
    energy:{
        quant: 0,
        capacity: 20,
        id: "energyCount",
        visible: true,  
    },
    wood:{
        quant: 0,
        capacity: 20,
        id: "woodCount",
        visible: false,
        visibilityTrigger: "energy",
        visibilityTarget: "woodVis",
    },
    gold:{
        quant: 0,
        capacity: 1000,
        id: "goldCount",
        visible: false,
        visibilityTrigger: "wood",
        visibilityTarget: "goldVis",
    },
    exploration:{
        quant: 0,
        capacity: 1000,
        id: "exploreCount",
        visible: false,
    },
    stamina:{
        quant: 0,
        capacity: 50,
        id: "staminaCount",
        visible: false,
    },
    strength:{
        quant: 0,
        capacity: 50,
        id: "strengthCount",
        visible: false,
    },
    dirt:{
        quant: 0,
        capacity: 5000,
        id: "dirtCount",
        visible: false,
    },
    crystal:{
        quant: 0,
        capacity: 5,
        id: "crystalCount",
        visible: false,
    },
    blacksmithReputation:{
        quant: 0,
        capacity: 100,
        id: "blacksmithReputation",
        visible: false,
    },
    innkeepReputation:{
        quant: 0,
        capacity: 100,
        id: "inkeepReputation",
        visible: false,
    },
    herbalistReputation:{
        quant: 0,
        capacity: 100,
        id: "herbalistReputation",
        visible: false,
    },
    hunterReputation:{
        quant: 0,
        capacity: 100,
        id: "hunterReputation",
        visible: false,
    },
    warlordReputation:{
        quant: 0,
        capacity: 100,
        id: "warlordReputation",
        visible: false,
    },
}

//Utility Functions
    //Generic Resource Go Up By (number)
function incrementResource(resource, increment){
//Setup Vars
    var workingResource = resourceBank[resource];
    if(workingResource.quant + increment >= workingResource.capacity){
        workingResource.quant = resourceBank[resource].capacity;
        console.log("Resource incremented but hit cap!");
    }
    else{
        workingResource.quant = workingResource.quant + increment
        console.log("Resource incremented.");
    };
    updateResourceBank(resource, workingResource);
    updateResourceHTML(resource);
    updateVisibility(resource);
};

//Checks and Pays Cost 
    function payCost(resource, neededValue){
    //Checks if cost can be paid
    if(checkCost(resource,neededValue) == false){
        console.log("Failed to Pay Cost")
        return false;
    };
    //Checks if cost is none
    if(resource == "none"){
        return true;
    };
    //Update resourceBank
        //TODO: Update to use updateResourceBank()
    resourceBank[resource].quant = resourceBank[resource].quant - neededValue;
    updateResourceHTML(resource);
    console.log ("Cost Paid")
};

//Checks if we have sufficient resource. Returns boolean.
    function checkCost(resource, neededValue){
        if(resource == "none"){
            return true;}
        else if(resourceBank[resource].quant >= neededValue){
            return true;
            }
        else if (resourceBank[resource].quant < neededValue){
            console.log("Not enough " + resource)
            return false
        }
};

//Updates resourceBank
    function updateResourceBank(resourceID, newResourceObject){
        resourceBank[resourceID] = newResourceObject;
};

//Updates HTML for provided resource from resourceBank
function updateResourceHTML(resource){
    const costElement = document.getElementById(resourceBank[resource].id);
    costElement.textContent = resourceBank[resource].quant;
};



function checkCatalyst(resource, neededValue){//NYI

};

function setResource(resource, setValue, ignoreCap){//NYI
    
};

function setVisible(resource){
    console.log("Checking if " + resource + " is visible");    
    if(resourceBank[resource].visible == false){
        console.log(resource + " is not visible. Setting to true!")
        resourceBank[resource].visible = true
    };
};

function setHidden(resource){
    if(resourceBank[resource].visible == true){
        resourceBank[resource].visible = false
    };
};

function updateVisibility(visTrigger){
    for(const resource in resourceBank){
        if(resourceBank[resource].visibilityTrigger == visTrigger){
            setVisible(resource);
            updateVisibilityHTML(resource)
        };
    }

function updateVisibilityHTML(resource){
    const visElement = document.getElementById(resourceBank[resource].visibilityTarget);
    visElement.style.setProperty('display','block')
};

    //if <visibilityTrigger> == resource
        //setVisible(that resource)
        //updateVisibilityinHTML
    
};



//Player Functions
function takeAMoment(){
    incrementResource("energy", 3)
};
function chopWood(){
    if (payCost("energy", 10) == false){
        return;
    }
    incrementResource("wood",5)
};
function sellWood(){
    if (payCost("wood", 20) == false){
        return;
    }
    incrementResource("gold",1)
};
function explore(){
    if (payCost("energy", 10) == false){
        return;
    }
    incrementResource("exploration",1)
};
function discover(){ //NYI
    if (payCost("exploration", 10) == false){
        return;
    }
    //This function should choose one if the valid, undiscovered things in the game and discover it. To do this, we'll need to have some kind of visibility toggle on all sections of the game field.
};
function workOut(){ //NYI
//Increases strength or stamina?
};
function digHole(){ //NYI
//Rarely also produces crystal

};


console.log("Hello World")
