const map = function(callbackFunction,sourceRecord){
  let mappedRecord = [];
  for(let value of sourceRecord){
    mappedRecord.push(callbackFunction(value));
  }
  return mappedRecord;
}

const filter = function(callbackFunction,sourceRecord){
  let filteredRecord = [];
  for(let value of sourceRecord){
    if(callbackFunction(value)){
      filteredRecord.push(value);
    }
  }
  return filteredRecord;
}

const reduce = function(callbackFunction,sourceArray,accumulator){
  let index=0;
  if(!accumulator){
    index=1;
    accumulator=sourceArray[0];
  }
  while(index<sourceArray.length){
    accumulator=callbackFunction(accumulator,sourceArray[index++]);
  }
  return accumulator;
}

exports.map = map;
exports.filter = filter;
exports.reduce = reduce;
