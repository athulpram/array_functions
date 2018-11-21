const map = function(mapper,sourceRecord){
  let mappedRecord = [];
  for(let value of sourceRecord){
    mappedRecord.push(mapper(value));
  }
  return mappedRecord;
}

const filter = function(predicate,sourceRecord){
  let filteredRecord = [];
  for(let value of sourceRecord){
    if(predicate(value)){
      filteredRecord.push(value);
    }
  }
  return filteredRecord;
}

const reduce = function(reducer,sourceArray,accumulator){
  index=0;
  if(!accumulator){
    index=1;
    accumulator=sourceArray[0];
  }
  while(index<sourceArray.length){
    accumulator=reducer(accumulator,sourceArray[index++]);
  }
  return accumulator;
}

exports.map = map;
exports.filter = filter;
exports.reduce = reduce;
