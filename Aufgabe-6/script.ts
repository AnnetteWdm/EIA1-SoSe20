
var europe: number = 4965.7 + 4616.4 + 4705.8 + 4615.2 + 4541.5 + 4436.9 + 4202 + 4191.6 + 4247.3 + 4278.7 + 4209.3;
var northamerica: number = 6600.4 + 6139.9 + 6375.8 + 6262.8 + 5998.9 + 6167 + 6268.9 + 6048.7 + 5938.3 + 5920.5 + 6035.6;
var africa: number = 1028 + 1041.9 + 1072.1 + 1073.7 + 1107.1 + 1134.4 + 1167.1 + 1174.5 + 1192.1 + 1207 + 1235.5;
var asia: number = 12954.7 + 13246.6 + 13986.8 + 14860.1 + 15308.8 + 15660.2 + 15787.7 + 15877 + 15984 + 16274.3 + 16274.1;
var southamerica: number = 1132.6 + 1093.1 + 1164.2 + 1215.5 + 1262 + 1308.9 + 1331.3 + 1321.7 + 1294.7 + 1279.2 + 1261.5;
var australia: number = 1993 + 1875.7 + 1939.1 + 2035.2 + 2063.2 + 2014.7 + 2027.6 + 1986.8 + 1997.4 + 2001.3 + 2100.5;

// Worlds total emission//
var world: number = europe + northamerica + africa + asia + southamerica + australia;

// Relative to worlds total emission//
var euw: number = (europe / world) * 100;
var naw: number = (northamerica / world) * 100;
var afw: number = (africa / world) * 100;
var asw: number = (asia / world) * 100;
var saw: number = (southamerica / world) * 100;
var auw: number = (australia / world) * 100;

// Difference between 2008 and 2018//
var eudif: number = 4209.3 - 4965.7 ;
var nadif: number = 6035.6 - 6600.4;
var afdif: number = 1235.5 - 1028;
var asdif: number = 16274.1 - 12954.7;
var sadif: number = 1261.5 - 1132.6;
var audif: number = 2100.5 - 1993;

// Growth rate in % between 2008 and 2018
var eupro: number = (eudif / europe) * 100;
var napro: number = (nadif / northamerica) * 100;
var afpro: number = (afdif / africa) * 100;
var aspro: number = (asdif / asia) * 100;
var sapro: number = (sadif / southamerica) * 100;
var aupro: number = (audif / australia) * 100;

window.addEventListener("load", function(){

// Europe//

document.querySelector(".europeimg").addEventListener("click", clickEU);

function clickEU () {

console.log(`The emission absolute of europe is: ${europe} kg CO2`);
console.log(`Relative to total worlds emission europe emits ${euw}%`);
console.log(`Europes growth rate between 2008 and 2018 is ${eupro}%`);
console.log(`2018 compared to 2008 that are ${eudif} kg CO2`);

document.querySelector ("#titleRegion").innerHTML = "Carbon Dioxide Emissions in Europe";

document.querySelector("#emission").innerHTML = europe;  
document.querySelector("#worldrelative").innerHTML = euw.toFixed(2) + "%";
document.querySelector("#growthrate").innerHTML = eupro.toFixed(2) + "%" ;
document.querySelector("#growth").innerHTML = eudif.toFixed(2);
document.querySelector(".chart").setAttribute("style", `height:${euw} + px`);

}


//Northamerica//

document.querySelector(".northamericaimg").addEventListener("click", clickNA);

function clickNA () {

console.log(`The emission absolute of northamerica is: ${northamerica} kg CO2`);
console.log(`Relative to total worlds emission northamerica emits ${naw}%`);
console.log(`Northamericas growth rate between 2008 and 2018 is ${napro}%`);
console.log(`2018 compared to 2008 that are ${nadif} kg CO2`);

document.getElementById("titleRegion").innerHTML = "Carbon Dioxide Emissions in Northamerica";

document.getElementById("emission").innerHTML = northamerica;  
document.getElementById("worldrelative").innerHTML = naw.toFixed(2) + "%";
document.getElementById("growthrate").innerHTML = napro.toFixed(2) + "%" ;
document.getElementByI("growth").innerHTML = nadif.toFixed(2);
document.querySelector('.chart').setAttribute('style', 'height:'+ naw + 'px');
}

//Africa//
document.querySelector(".africaimg").addEventListener("click", clickAF);
function clickAF () {

console.log(`The emission absolute of africa is: ${africa} kg CO2`);
console.log(`Relative to total worlds emission africa emits ${afw}%`);
console.log(`Africas growth rate between 2008 and 2018 is ${afpro}%`);
console.log(`2018 compared to 2008 that are ${afdif} kg CO2`);

document.getElementById ("titleRegion").innerHTML = "Carbon Dioxide Emissions in Africa";

document.getElementById ("emission").innerHTML = africa;  
document.getElementById ("worldrelative").innerHTML = afw.toFixed(2) + "%";
document.getElementById ("growthrate").innerHTML = afpro.toFixed(2) + "%" ;
document.getElementById ("growth").innerHTML = afdif.toFixed(2);
document.querySelector ( '.chart').setAttribute('style', 'height:'+ afw + 'px');
}


//Asia//
document.querySelector(".asiaimg").addEventListener("click", clickAS);
function clickAS () {

console.log(`The emission absolute of asia is: ${asia} kg CO2`);
console.log(`Relative to total worlds emission asia emits ${asw}%`);
console.log(`Asias growth rate between 2008 and 2018 is ${aspro}%`);
console.log(`2018 compared to 2008 that are ${asdif} kg CO2`);

document.getElementById ("titleRegion").innerHTML = "Carbon Dioxide Emissions in Asia";

document.getElementById ("emission").innerHTML = asia;  
document.getElementById ("worldrelative").innerHTML = asw.toFixed(2) + "%";
document.getElementById ("growthrate").innerHTML = aspro.toFixed(2) + "%" ;
document.getElementById ("growth").innerHTML = asdif.toFixed(2);
document.querySelector ( '.chart').setAttribute('style', 'height:'+ asw + 'px');
}

//Southamerica//
document.querySelector(".southamericaimg").addEventListener("click", clickSA);
function clickSA () {

console.log(`The emission absolute of southamerica is: ${southamerica} kg CO2`);
console.log(`Relative to total worlds emission southamerica emits ${saw}%`);
console.log(`Southamericas growth rate between 2008 and 2018 is ${sapro}%`);
console.log(`2018 compared to 2008 that are ${sadif} kg CO2`);

document.getElementById ("titleRegion").innerHTML = "Carbon Dioxide Emissions in Southamerica";
document.getElementById ("emission").innerHTML = southamerica;  
document.getElementById ("worldrelative").innerHTML = saw.toFixed(2) + "%";
document.getElementById ("growthrate").innerHTML = sapro.toFixed(2) + "%" ;
document.getElementById ("growth").innerHTML = sadif.toFixed(2);
document.querySelector ( '.chart').setAttribute('style', 'height:'+ saw + 'px');
}

//Australia//
document.querySelector(".australiaimg").addEventListener("click", clickAU);
function clickAU () {

console.log(`The emission absolute of australia is: ${australia} kg CO2`);
console.log(`Relative to total worlds emission australia emits ${auw}%`);
console.log(`Australias growth rate between 2008 and 2018 is ${aupro}%`);
console.log(`2018 compared to 2008 that are ${audif} kg CO2`);

document.getElementById ("titleRegion").innerHTML = "Carbon Dioxide Emissions in Australia";
document.getElementById ("emission").innerHTML = australia;  
document.getElementById ("worldrelative").innerHTML = auw.toFixed(2) + "%";
document.getElementById ("growthrate").innerHTML = aupro.toFixed(2) + "%" ;
document.getElementById ("growth").innerHTML = audif.toFixed(2);
document.querySelector ( '.chart').setAttribute('style', 'height:'+ auw + 'px');
} 

)}