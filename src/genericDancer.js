var genericDancer = function(top, left, timeBetween) {
  genericDancer.call(this, top, left, timeBetween);
};

genericDancer.protottype = Object.create(bmxDancer.prototype);
genericDancer.prototype.constructor = genericDancer;
genericDancer.protottype.prevStep = genericDancer.protottype.step;

genericDancer.protottype.step = function() {
  this.prevStep();

  this.$node.toggle();
};
