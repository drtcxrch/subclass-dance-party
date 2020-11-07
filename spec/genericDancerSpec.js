describe('genericDancer', function() {

  var genericDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    // added "new" keyword since we are using pseudoclassical.
    genericDancer = new makegenericDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(genericDancer.$node).to.be.an.instanceof(jQuery);
  });

  // added test
  describe('dance', function() {
    it('should have a shift class that makes the dancer spin', function() {
      expect(genericDancer.$node[0].classList.value).to.include('shift');
    });
  });
});
