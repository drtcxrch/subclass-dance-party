
var makebmxDancer = function(top, left, timeBetween) {
  makeBlinkyDancer.call(this, top, left, timeBetween);
  this.$node = $('<span class="BMXDancer animated bounce"><img src="/src/img/bike2.png"></span>');
  this.setPosition(top, left);
  this.top = top;
  this.left = left;
};

makebmxDancer.prototype = Object.create(makeBlinkyDancer.prototype);
makebmxDancer.prototype.constructor = makebmxDancer;
makebmxDancer.prototype.prevStep = makebmxDancer.prototype.step;

makebmxDancer.prototype.step = function() {
  var that = this;

  setTimeout(function() {
    that.step();
  }, that.timeBetweenSteps);

  // this.$node.toggle('slow');
};

