const map = function(callbackFunction,sourceRecord){
  let mappedRecord = [];
  for(let value of sourceRecord){
    mappedRecord.push(callbackFunction(value));
  }
  return mappedRecord;
}

exports.map = map;
