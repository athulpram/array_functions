const {map} = require("../src/arrayLib.js");
const {deepEqual} = require("assert");

const square = function(number){
  return number*number;
}

const stringLength = function(string){
  return string.length;
}

const mapTest = function(){
  //Testing map for square function 
  deepEqual(map(square,[]),[]);
  deepEqual(map(square,[1]),[1]);
  deepEqual(map(square,[1,2]),[1,4]);

  //Testing map for inputs as string
  deepEqual(map(stringLength,[]),[]);
  deepEqual(map(stringLength,["computer"]),[8]);
  deepEqual(map(stringLength,["computer","abcd"]),[8,4]);
}
console.log("testing map functions");
mapTest();
console.log("map tests passed");
