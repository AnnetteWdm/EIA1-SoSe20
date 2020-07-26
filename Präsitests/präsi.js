let bezeichnung = 1;
const randomNum = 7;
const randomNum = 2; //kann nicht neu deklariert werden
console.log(randomNum); // 7 wird ausgegeben
var randomNum = 3; //kann auch nicht mit var deklariert werden
if (randomNum == 7) {
    const randomNum = 4; //kann neu deklariert werden,
    // da in einem neuen Block deklariert wird
    console.log(randomNum); // 4 wird ausgegeben
}
var personen = [
    {
        name: "Marcus",
        nationality: "swedish",
        age: 32,
        languages: ["swedish, english, german"],
        lovesKöttbullar: true
    },
    {
        name: "Annette",
        nationality: "german",
        age: 20,
        languages: ["german, english, swedish, french"],
        lovesKöttbullar: true
    }
];
console.log(personen[0].name);
var person1 = {
    name: "Marcus",
    nationality: "swedish",
    age: 32,
    languages: ["swedish, english, german"],
    lovesKöttbullar: true
};
var person2 = {
    name: "Annette",
    nationality: "german",
    age: 20,
    languages: ["german, english, swedish, french"],
    lovesKöttbullar: true
};
var objektName = {
    key1: "value",
    key2: "value",
    key3: 32,
    key4: [0, 1, 2],
    key5: true
};
console.log(objektName.key1);
var hometownSE = "Kristianstad";
var hometownNZ = "Tauranga";
var hometownDE = "Furtwangen";
var hometowns = [" Kristianstad", "Tauranga", "Furtwangen"];
console.log(hometowns[0]);
//# sourceMappingURL=präsi.js.map