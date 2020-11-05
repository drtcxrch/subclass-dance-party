var makegenericDancer = function(top, left, timeBetween) {
  makebmxDancer.call(this, top, left, timeBetween);
  this.$node = $('<span class="GENERICDancer shift"><img src="/src/img/bike3.png"></span>');
  this.setPosition(top, left);

};

makegenericDancer.prototype = Object.create(makebmxDancer.prototype);
makegenericDancer.prototype.constructor = makegenericDancer;
makegenericDancer.prototype.prevStep = makegenericDancer.prototype.step;

makegenericDancer.prototype.step = function() {
  var that = this;

  setTimeout(function() {
    that.step();
  }, that.timeBetweenSteps);
};


