var SpinningDancer = function (top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  //debugger;
  this.$node.addClass('spinningDancer');
  this.$node.append('<img src="spin.png">');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //var oldStep = blinkyDancer.step
};

SpinningDancer.prototype = Object.create(MakeDancer.prototype);
SpinningDancer.prototype.constructor = SpinningDancer;

SpinningDancer.prototype.step = function () {
  // call the old version of step at the beginning of any call to this new version of step
  //Animal.prototype.move.call(…)
  //debugger;
  MakeDancer.prototype.step.call(this);
  // oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //debugger;
  // this.$node.animate(
  //   { deg: 180 },
  //   {
  //     duration: 1200,
  //     step: function(now) {
  //       $(this).css({ transform: 'rotate(' + now + 'deg)' });
  //     }
  //   }
  //
  var angle = 0;
  var node = this.$node;
  setInterval(function() {
    node
      .css('-webkit-transform', 'rotate('+angle+'deg)')
      .css('-moz-transform', 'rotate('+angle+'deg)')
      .css('-ms-transform', 'rotate('+angle+'deg)');
      angle++;
  }, 100);
};