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

exports.map = map;
exports.filter = filter;
