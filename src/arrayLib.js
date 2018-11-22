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
  if(accumulator==undefined){
    accumulator=sourceArray[0];
    sourceArray=sourceArray.slice(1);
  }
  if(sourceArray.length>0){
    accumulator = reducer(accumulator,sourceArray[0]);
    accumulator = reduce(reducer,sourceArray.slice(1),accumulator);
  }
  return accumulator;
}

exports.map = map;
exports.filter = filter;
exports.reduce = reduce;
