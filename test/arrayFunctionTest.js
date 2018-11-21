const {map,filter,reduce} = require("../src/arrayLib.js");
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

const isOdd = function(value){
  return value%2;
}

const greater = function(num1,num2){
  if(num1>num2){
    return num1;
  }
  return num2;
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

describe('filter',function() {
  it('should return all the array vlaues',function() {
    deepEqual(filter(returnTrue,[]),[]);
    deepEqual(filter(returnTrue,[1]),[1]);
    deepEqual(filter(returnTrue,[1,2]),[1,2]);
    deepEqual(filter(returnTrue,[1,2,3]),[1,2,3]);
  });

  it('should return odd number',function() {
    deepEqual(filter(isOdd,[1]),[1]);
    deepEqual(filter(isOdd,[1,2]),[1]);
    deepEqual(filter(isOdd,[1,2,3]),[1,3]);

  });
});

describe('Reduce',function(){
  it('should return sum of array',function(){
    deepEqual(reduce(sum,[]),undefined);
    deepEqual(reduce(sum,[1]),1);
    deepEqual(reduce(sum,[1,2,3]),6);
    deepEqual(reduce(sum,[1,2,3],5),11);
  });
  it('should return greatest of array',function(){
    deepEqual(reduce(greater,[]),undefined);
    deepEqual(reduce(greater,[1]),1);
    deepEqual(reduce(greater,[1,2,3]),3);
  });
});
