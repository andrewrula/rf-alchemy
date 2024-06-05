var discoveryTree = {
    village: {
        researchId: "village",
        isResearchable: true,
        isResearched: false,
        prerequisites: [],
        successors: ["blacksmith","miller","steward", "farmer", "herbalist"]
    },
    blacksmith: {
        researchId: "blacksmith",
        isResearchable: false,
        isResearched: false,
        prerequisites: ["village"],
        successors: ["smithApprentice", "mine", "tooling"]  
    },
};


var validDiscoveries = {};

function updateDiscoveries() {//Populates validDiscoveries with all current possible discoveries.   
};

function discover(){//Discovers one validDiscovery

}