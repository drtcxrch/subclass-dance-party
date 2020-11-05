$(document).ready(function() {
  window.dancers = [];

  // blinkyDancer functions...
  $('.addBlinkyDancerButton').on('click', function(event) {
    // var dancerMakerFunctionName = $(this).data('class="addBlinkyDancerButton"');
    // var dancerMakerFunction = window[dancerMakerFunctionName];

    let top = $('body').height() * Math.random();
    let left = $('body').width() * Math.random() * 2;
    let time = Math.random() * 1000;

    let blinkyDancer = {
      name: 'blinkyDancer',
      top: top,
      left: left,
      time: time
    };

    window.dancers.push(blinkyDancer);

    var blinkyDancerInstance = new makeBlinkyDancer(top, left, time);
    $('body').append(blinkyDancerInstance.$node);
  });

  // bmx functions...
  $('.addBmxButton').on('click', function(event) {
    // var dancerMakerFunctionName = $(this).data('class="addBmxButton"');
    // var dancerMakerFunction = window[dancerMakerFunctionName];
    // console.log('clicked');
    let top = $('body').height() * Math.random();
    let left = $('body').width() * Math.random() * 2;
    let time = Math.random() * 1000;

    let bmxDancer = {
      name: 'bmxDancer',
      top: top,
      left: left,
      time: time
    };

    window.dancers.push(bmxDancer);
    var bmxInstance = new makebmxDancer(top, left, time);
    $('body').append(bmxInstance.$node);
  });

  // generic functions...
  $('.addGenericButton').on('click', function(event) {
    // var dancerMakerFunctionName = $(this).data('class="addBmxButton"');
    // var dancerMakerFunction = window[dancerMakerFunctionName];
    let top = $('body').height() * Math.random();
    let left = $('body').width() * Math.random() * 2;
    let time = Math.random() * 1000;

    let genericDancer = {
      name: 'genericDancer',
      top: top,
      left: left,
      time: time
    };

    window.dancers.push(genericDancer);

    var genericInstance = new makegenericDancer(top, left, time);
    $('body').append(genericInstance.$node);
  });
});

