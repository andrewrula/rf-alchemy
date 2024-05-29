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
function incrementResource(resource, increment){//Generic Resource Increment
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
function payCost(resource, neededValue){//Checks and Pays Cost
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
function checkCost(resource, neededValue){//Checks if we have sufficient resource. Returns boolean.
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
function updateResourceBank(resourceID, newResourceObject){//replaces a resource with new copy
        resourceBank[resourceID] = newResourceObject;
};
function updateResourceHTML(resource){//Updates HTML for provided resource from resourceBank
    const costElement = document.getElementById(resourceBank[resource].id);
    costElement.textContent = resourceBank[resource].quant;
};
function checkCatalyst(resource, neededValue){//NYI

};
function setResource(resource, setValue, ignoreCap){//NYI
    
};
function setVisible(resource){//Sets visibility in resourceBank to true, if false
    console.log("Checking if " + resource + " is visible");    
    if(resourceBank[resource].visible == false){
        console.log(resource + " is not visible. Setting to true!")
        resourceBank[resource].visible = true
    };
};
function setHidden(resource){//Sets visibility in resourceBank to false, if true
    if(resourceBank[resource].visible == true){
        resourceBank[resource].visible = false
    };
};
function updateVisibility(visTrigger){//Updates all resources with provided visTrigger to be visible.
    for(const resource in resourceBank){
        if(resourceBank[resource].visibilityTrigger == visTrigger){
            setVisible(resource);
            updateVisibilityHTML(resource)
        };
    };
};   
function updateVisibilityHTML(resource){//Sets HTML for provided resource to visible
    const visElement = document.getElementById(resourceBank[resource].visibilityTarget);
    visElement.style.setProperty('display','block')
};


//Player Functions
function takeAMoment(){// + energy
    incrementResource("energy", 3)
};
function chopWood(){// +wood, -energy
    if (payCost("energy", 10) == false){
        return;
    }
    incrementResource("wood",5)
};
function sellWood(){// +gold, -wood
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
