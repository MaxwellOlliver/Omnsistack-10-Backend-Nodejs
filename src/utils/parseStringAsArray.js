module.exports = function parseStringAsArray(arrayStr){
  return arrayStr.split(',').map(value => value.trim());
}