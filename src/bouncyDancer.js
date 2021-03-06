var BouncyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  //debugger;
  this.$node.addClass('bouncyDancer');
  this.$node.append('<img src="bouncySmall.png">');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //var oldStep = blinkyDancer.step
};

BouncyDancer.prototype = Object.create(MakeDancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  //Animal.prototype.move.call(…)
  //debugger;
  MakeDancer.prototype.step.call(this);
 // oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //debugger;
  this.$node.effect( "bounce", {times:3}, 300 );
};