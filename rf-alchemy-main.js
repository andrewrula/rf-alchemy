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

//Generic Resource Go Up By (number)
function incrementResource(resource, increment){
    //Declare some vars
    workingResource = resource
    workingResourceCostType = workingResource.costType
    workingResourceCostQuant = workingResource.cost
//Check if there is a cost. If no cost, continue on. Else, check if we have enough. If we don't, evac function. 
        //TODO: Multi-cost-support.
        //TODO: Catalyst support
    if(workingResourceCostType != "none"){
        if(resourceBank[workingResourceCostType].quant < workingResourceCostQuant){
        console.log ("Not Enough " + workingResourceCostType)
        return;
        }        
//If it's not 'none' and we have enough, reduce those costs by the cost amount, and push to the html
        else {
        resourceBank[workingResourceCostType].quant = resourceBank[workingResourceCostType].quant - workingResourceCostQuant;
        const costElement = document.getElementById(resourceBank[workingResourceCostType].id);
        costElement.textContent = resourceBank[workingResourceCostType].quant;
    };
};
//Now we check if we're going to hit capacity. If yes, turn working number into the capacity. If no, change working number into working number + increment. 
    if(workingResource.quant + increment >= workingResource.capacity){
        workingResource.quant = resource.capacity;
        console.log("Resource incremented but is capped!")
        }
        else{
        workingResource.quant = workingResource.quant + increment
        console.log("Resource incremented.")
        };
//Adjust resource as needed and push to html
    resource = workingResource;
    const resourceElement = document.getElementById(resource.id);
    resourceElement.textContent = resource.quant;
};

function unitTest (){
//Increment Test
console.log("Energy:" + energy)
energy = incrementEnergy(energy,energyCap, energyIncrement)
console.log("Energy:" + energy)
console.log("Expected Outcome: 2")

//MultiIncrement Test
energy = incrementEnergy(energy,energyCap, energyIncrement)
energy = incrementEnergy(energy,energyCap, energyIncrement)
energy = incrementEnergy(energy,energyCap, energyIncrement)
console.log("Energy:" + energy)
console.log("Expected Outcome: 8")

//Set and Increment Test
energy = 97
console.log("Setting Energy to 97")
energy = incrementEnergy(energy,energyCap, energyIncrement)

//Cap Test
console.log("Energy:" + energy)
console.log("Expected Outcome: 99")
energy = incrementEnergy(energy,energyCap, energyIncrement)
console.log("Energy:" + energy)
console.log("Expected Outcome: 100")
};

console.log("Hello World")
// unitTest();