let total = 150;
let consumers = {
    name:"ConusmerOne",
    units: "130"
}
let amount;

if(consumers.units <= 20){
    console.log("Npr 80")
}
 else if(consumers.units <= 30){
    console.log("Npr 4.5/units")
}
else if(consumers.units <= 40){
    console.log("Npr 5/units")
}
else if(consumers.units <= 50){
    console.log("Npr 1/units")
}
else if(consumers.units <= 60){
    console.log("Npr 10/units")
}
else if(consumers.units <= 120){
    console.log("Npr 15/units")
}
else{
    console.log("Npr 20/units")
}
console.log("your Name:" + consumers.name);
console.log("your total consumption unit:" + consumers.units);

console.log("your total bill amount" + consumers.amount);
