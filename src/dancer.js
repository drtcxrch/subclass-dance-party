// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  var node = this.$node;
  this.$node.mouseover(function() {
    node.fadeOut();
  });
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  MakeDancer.prototype.setPosition.call(this,top, left);
  MakeDancer.prototype.step.call(this);
};

MakeDancer.prototype.step = function () {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var bindedStep = this.step.bind(this);
  setTimeout(bindedStep, this.timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function (top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  this.top = top;
  this.left = left;
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random default point within the body
