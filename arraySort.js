var sidekicks = [
    { name: "Robin",     hero: "Batman"   },
    { name: "Supergirl", hero: "Superman" },
    { name: "Oracle",    hero: "Batman"   },
    { name: "Krypto",    hero: "Superman" }
];

var sortedBatKickNames = sidekicks.filter(function (el) {
    return (el.hero === "Superman");
}).map(function(el) {
    return el.name;
}).sort();

// Outputs: ["Oracle", "Robin"];
console.log(sortedBatKickNames);