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

const returnFalse = function(){
  return false;
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
  it('',function() {
    deepEqual(map(square,[]),[]);
    deepEqual(map(stringLength,[]),[]);
    deepEqual(filter(returnTrue,[]),[]);
  });

  //Testing map for inputs as string
  it(' should return a single element array for a single element array',function() {
    deepEqual(map(stringLength,["computer"]),[8]);
    deepEqual(map(square,[1]),[1]);
  });

  //Testing map for nested arrays
  it('should return the same length array as that of input array',function() {
    deepEqual(map(sumOfList,[[1,2],[1,2,3]]),[3,6]);
    deepEqual(map(stringLength,["computer","abcd"]),[8,4]);
    deepEqual(map(sumOfList,[[1],[2],[1,2]]),[1,2,3]);
    deepEqual(map(square,[1,2]),[1,4]);
  });
});

describe('filter',function() {
  it('should return an empty array for a empty array input',function() {
    deepEqual(filter(returnTrue,[]),[]);
    deepEqual(filter(returnFalse,[]),[]);
    deepEqual(filter(isOdd,[]),[]);
  });
  it('should return the same element array for an input of one element which returns true for element',function() {
    deepEqual(filter(returnTrue,[1]),[1]);
    deepEqual(filter(isOdd,[1]),[1]);
  });

  it('should return empty array for an element array of which returns false for filter',function(){
    deepEqual(filter(returnFalse,[1]),[]);
    deepEqual(filter(isOdd,[2]),[]);
  });

  it('should return odd number',function() {
    deepEqual(filter(returnTrue,[1,2,3]),[1,2,3]);
    deepEqual(filter(returnFalse,[1,2]),[1]);
    deepEqual(filter(isOdd,[1,2]),[1]);

  });
});

describe('Reduce',function(){
  it('should return undefined for an empty array of input',function(){
    deepEqual(reduce(sum,[]),undefined);
    deepEqual(reduce(greater,[]),undefined);
  });

  it('should return a value for for a single element array',function(){
    deepEqual(reduce(sum,[1]),1);
    deepEqual(reduce(greater,[1]),1);
  });

  it('should return a value for multiple inputs',function(){
    deepEqual(reduce(sum,[1,2,3,4]),10);
    deepEqual(reduce(greater,[1,2,3]),3);
  });

  it('should return a value even passes an extra initial value', function(){
    deepEqual(reduce(sum,[1,2,3,4],10),20);
    deepEqual(reduce(greater,[1,2,3,4],6),6);
  });
});
