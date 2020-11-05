var bmxDancer = function(top, left, timeBetween) {
  makeBlinkyDancer.call(this, top, left, timeBetween);
};

bmxDancer.protottype = Object.create(makeBlinkyDancer.prototype);
bmxDancer.prototype.constructor = bmxDancer;
bmxDancer.protottype.prevStep = bmxDancer.protottype.step;

bmxDancer.protottype.step = function() {
  this.prevStep();

  this.$node.toggle();
};

