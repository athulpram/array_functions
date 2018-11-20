const {map} = require("../src/arrayLib.js");
const {deepEqual} = require("assert");

const square = function(number){
  return number*number;
}

const mapTest = function(){
  //Testing map for square function 
  deepEqual(map(square,[]),[]);
}

console.log("testing map functions");
mapTest();
console.log("map tests passed");
