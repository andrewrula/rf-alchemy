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
    workingResource = resource
    workingResourceCostType = workingResource.costType
    workingResourceCostQuant = workingResource.cost
    if(workingResourceCostType != "none"){
        if(resourceBank[workingResourceCostType].quant < workingResourceCostQuant){
        console.log ("Not Enough " + workingResourceCostType)
        return;
        }
    }
    if(workingResource.quant + increment >= workingResource.capacity){
        workingResource.quant = resource.capacity;
        if(workingResourceCostType != "none"){
        resourceBank[workingResourceCostType].quant = resourceBank[workingResourceCostType].quant - workingResourceCostQuant;
        };
        console.log("Capped!")
        }
        else{
        if(workingResourceCostType != "none"){
            resourceBank[workingResourceCostType].quant = resourceBank[workingResourceCostType].quant - workingResourceCostQuant;
            };
        workingResource.quant = workingResource.quant + increment
        };
    resource = workingResource;
    const resourceElement = document.getElementById(resource.id);
    resourceElement.textContent = resource.quant;
    if(workingResourceCostType != "none"){
        const costElement = document.getElementById(resourceBank[workingResourceCostType].id);
        costElement.textContent = resourceBank[workingResourceCostType].quant;
        };
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