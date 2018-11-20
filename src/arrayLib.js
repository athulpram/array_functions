const map = function(callbackFunction,sourceRecord){
  let mappedRecord = [];
  for(let index in sourceRecord){
    mappedRecord[index] = callbackFunction(sourceRecord[index]);
  }
  return mappedRecord;
}

exports.map = map;
