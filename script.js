function calcWeights(weight) {
  var weights = [],
    available = [2.5, 5, 10, 25, 45].reverse();

  weight = weight - 45;

  if (!weight || weight < 5) {
    throw Error('Invalid input.');
  }

  available.forEach(function(e){
    while(weight && (weight / 2)  >= e) {
      weight = weight - (e * 2);
      weights.push(e);
    }
  });

  return weights
}

module.exports = {
  calcWeights : calcWeights
};
