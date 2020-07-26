

let bezeichnung: number = 1;



const randomNum: number = 7;

const randomNum: number = 2; //kann nicht neu deklariert werden

console.log (randomNum); // 7 wird ausgegeben

var randomNum: number = 3; //kann auch nicht mit var deklariert werden

if (randomNum == 7) {

    const randomNum: number = 4; //kann neu deklariert werden,
                               // da in einem neuen Block deklariert wird

    console.log (randomNum); // 4 wird ausgegeben
}










interface Mensch {

  name: string;
  nationality: string;
  age: number;
  languages: string[];
  lovesKöttbullar: boolean;  
}

var personen: Mensch[] = [
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



var person1: Mensch = {

    name: "Marcus",
    nationality: "swedish",
    age: 32,
    languages: ["swedish, english, german"],
    lovesKöttbullar: true

};

var person2: Mensch = {

    name: "Annette",
    nationality: "german",
    age: 20,
    languages: ["german, english, swedish, french"],
    lovesKöttbullar: true

};







var objektName: any = {
    key1: "value",
    key2: "value",
    key3: 32,
    key4: [0, 1, 2],
    key5: true
};


console.log(objektName.key1);



var hometownSE: string = "Kristianstad" ;
var hometownNZ: string = "Tauranga" ;
var hometownDE: string = "Furtwangen" ;

var hometowns: string [] = [" Kristianstad", "Tauranga", "Furtwangen"];

console.log(hometowns[0]);

