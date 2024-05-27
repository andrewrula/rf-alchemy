//Resource Manager
var resourceBank = {
    wood:{
        quant: 0,
        capacity: 20,
        cost: 10,
        costType: "energy",
        id: "woodCount"
    },
    energy:{
        quant: 0,
        capacity: 20,
        cost: 0,
        costType: "none",
        id: "energyCount"
    },
    gold:{
        quant: 0,
        capacity: 1000,
        cost: 20,
        costType: "wood",
        id: "goldCount"
    },
}

//Utility Functions
    //Generic Resource Go Up By (number)
        function incrementResource(resource, increment){
        //Setup Vars
            var workingResource = resourceBank[resource]
            if(workingResource.quant + increment >= workingResource.capacity){
                workingResource.quant = resourceBank[resource].capacity;
                console.log("Resource incremented but hit cap!")
                }
            else{
                workingResource.quant = workingResource.quant + increment
                console.log("Resource incremented.")
                };
            updateResourceBank(resource, workingResource);
            updateResourceHTML(resource)
    };

    //Checks and Pays Cost 
        function payCost(resource, neededValue){
        //Checks if cost can be paid
        if(checkCost(resource,neededValue) == false){
            console.log("Failed to Pay Cost")
            return false;
        };
        //Checks if cost is none
        if(resource == "none"){return true;}
        //Update resourceBank
        resourceBank[resource].quant = resourceBank[resource].quant - neededValue;
        console.log ("Cost Paid")
        //Update HTML display
        updateResourceHTML(resource);
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
            resourceBank[resourceID] = newResourceObject
        }

    //Updates HTML for provided resource from resourceBank
        function updateResourceHTML(resource){
        const costElement = document.getElementById(resourceBank[resource].id);
        costElement.textContent = resourceBank[resource].quant;
    };

    //NYI - 
        function checkCatalyst(resource, neededValue){

    };
    //NYI
        function setResource(resource, setValue, ignoreCap){
        
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
}
function sellWood(){
    if (payCost("wood", 20) == false){
        return;
    }
    incrementResource("gold",1)
}

console.log("Hello World")
