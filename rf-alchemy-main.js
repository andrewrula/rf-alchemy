var resourceBank = {
    wood:{
        quant: 0,
        capacity: 20,
        increment: 5,
        cost: 10,
        costType: "energy",
    },
    energy:{
        quant: 0,
        capacity: 20,
        increment: 3,
        cost: 10,
        costType: "none",

    },
}

function incrementEnergy(){
    console.log("Incrementing Energy") 
    workingEnergy = resourceBank.energy.quant;
    if(workingEnergy + resourceBank.energy.increment >= resourceBank.energy.capacity){
        workingEnergy = resourceBank.energy.capacity;
    }
    else{
        workingEnergy = workingEnergy + resourceBank.energy.increment
    };
    resourceBank.energy.quant = workingEnergy;
    const numberElement = document.getElementById('energyNumber');
    numberElement.textContent = resourceBank.energy.quant;
}

function incrementWood(){
    console.log("Incrementing Wood") 
    workingWood = resourceBank.wood.quant;
    if(resourceBank.energy.quant < resourceBank.wood.cost){
        console.log ("Not Enough Energy")
        return;
    }
    else if(workingWood + resourceBank.wood.increment >= resourceBank.wood.capacity){
        workingWood = resourceBank.wood.capacity;
        resourceBank.energy.quant = resourceBank.energy.quant - resourceBank.wood.cost;
    }
    else{
        workingWood = workingWood + resourceBank.wood.increment;
        resourceBank.energy.quant = resourceBank.energy.quant - resourceBank.wood.cost;
    }
    resourceBank.wood.quant = workingWood;
    const woodNumberElement = document.getElementById('woodNumber');
    woodNumberElement.textContent = resourceBank.wood.quant;
    const energyNumberElement = document.getElementById('energyNumber');
    energyNumberElement.textContent = resourceBank.energy.quant;
}


//Generic Resource Go Up By (number)
function incrementResource(resource, increment){

}
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
console.log(resourceBank.wood)
// unitTest();