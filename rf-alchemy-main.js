var energy = 0
var energyCap = 100
var energyIncrement = 2

function incrementEnergy(curr,cap,inc){
    console.log("Incrementing Energy")
    if(curr + inc >= cap){
        return cap
    }
    else{
        curr = curr + inc
        return curr;
    }
}

function incrementTest(){
    //parse document, find one that's been assigned the id 'number' and save to a variable
    const numberElement = document.getElementById('number');

    //get the value of the element (which is always a string) and convert it to an int
    let currentNumber = parseInt(numberElement.textContent);

    //increment the saved number by 1
    currentNumber++;

    //set the text of the html element (which is always a string) to the current value of the variable
    numberElement.textContent = currentNumber;
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
unitTest();