describe('genericDancer', function() {

  var genericDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    // added "new" keyword since we are using pseudoclassical.
    genericDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(genericDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(genericDancer.$node, 'toggle');
    genericDancer.step();
    expect(genericDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(genericDancer, 'step');
      expect(genericDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(genericDancer.step.callCount).to.be.equal(2);

      clock.tick(timeBetweenSteps);
      expect(genericDancer.step.callCount).to.be.equal(3);
    });
  });

  // added test
  describe('?!?!?!?!?!', function() {
    it('?!?!?!?!?!', function() {

    });
  });
});
