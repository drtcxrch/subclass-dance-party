describe('bmxDancer', function() {

  var bmxDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    // added "new" keyword since we are using pseudoclassical.
    bmxDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(bmxDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(bmxDancer.$node, 'toggle');
    bmxDancer.step();
    expect(bmxDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(bmxDancer, 'step');
      expect(bmxDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(bmxDancer.step.callCount).to.be.equal(2);

      clock.tick(timeBetweenSteps);
      expect(bmxDancer.step.callCount).to.be.equal(3);
    });
  });
});
