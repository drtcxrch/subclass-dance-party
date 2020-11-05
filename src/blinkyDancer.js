var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};


makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
makeBlinkyDancer.prototype.prevStep = makeBlinkyDancer.prototype.step;

makeBlinkyDancer.prototype.step = function() {
  this.prevStep();

  this.$node.toggle();
};




