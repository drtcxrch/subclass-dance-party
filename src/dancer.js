var makeDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="BlinkyDancer"><img src="/src/img/bike1.png"></span>');

  this.step();
  this.setPosition(top, left);
};


makeDancer.prototype.step = function() {
  var that = this;

  // had to reset where "this" points to, setTimeout auto points to window object.
  setTimeout(function() {
    that.step();
  }, that.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left,
  };
  this.$node.css(styleSettings);
};
