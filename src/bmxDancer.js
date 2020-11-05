
var makebmxDancer = function(top, left, timeBetween) {
  makeBlinkyDancer.call(this, top, left, timeBetween);
  this.$node = $('<span class="BMXDancer"><img src="/src/img/bike2.png"></span>');
  this.setPosition(top, left);
};

makebmxDancer.prototype = Object.create(makeBlinkyDancer.prototype);
makebmxDancer.prototype.constructor = makebmxDancer;
makebmxDancer.prototype.prevStep = makebmxDancer.prototype.step;
makebmxDancer.prototype.bounce = function(bouncingCount, speed) {
  var top = 200;
  var speedRatio = speed / top;
  var heightRatio = top / bouncingCount;

  for (var i = 1; i <= bouncingCount; i++) {
    $('.BMXDancer').animate({
      'bottom' : top
    }, speed);
    $('.BMXDancer').animate({
      'bottom' : 0
    }, speed / 2);
    top = top - (heightRatio);
    speed = speedRatio * top;
  }
};


makebmxDancer.prototype.step = function() {
  var that = this;

  setTimeout(function() {
    that.step();
  }, that.timeBetweenSteps);

  this.$node.slideUp(750);
  this.$node.slideDown(750);
  this.bounce(10, 500);
  // this.$node.toggle();
  // this.$node.toggle('bounce');



};





