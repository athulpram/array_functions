const {map} = require("../src/arrayLib.js");
const {deepEqual} = require("assert");

const square = function(number){
  return number*number;
}

const stringLength = function(string){
  return string.length;
}
const sum = function(num1,num2){
  return num1+num2;
}

const sumOfList = function(list){
  return list.reduce(sum);
}

const returnTrue = function(){
  return true;
}

describe('map',function(){
  //Testing map for square function 
  it('should return squares of array values',function() {
    deepEqual(map(square,[]),[]);
    deepEqual(map(square,[1]),[1]);
    deepEqual(map(square,[1,2]),[1,4]);
  });

  //Testing map for inputs as string
  it('should find the length of strings in an array',function() {
    deepEqual(map(stringLength,[]),[]);
    deepEqual(map(stringLength,["computer"]),[8]);
    deepEqual(map(stringLength,["computer","abcd"]),[8,4]);
  });

  //Testing map for nested arrays
  it('should find the sum of lists in arrays',function() {
    deepEqual(map(sumOfList,[[1,2],[1,2,3]]),[3,6]);
  });
});
