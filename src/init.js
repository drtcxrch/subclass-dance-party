$(document).ready(function() {
  window.dancers = [];

  // blinkyDancer functions...
  $('.addBlinkyDancerButton').on('click', function(event) {
    // var dancerMakerFunctionName = $(this).data('class="addBlinkyDancerButton"');
    // var dancerMakerFunction = window[dancerMakerFunctionName];

    let top = $('body').height() * Math.random();
    let bottom = $('body').width() * Math.random();
    let time = Math.random() * 1000;

    let blinkyDancer = {
      name: 'blinkyDancer',
      top: top,
      bottom: bottom,
      time: time
    };

    window.dancers.push(blinkyDancer);

    var blinkyDancerInstance = new makeBlinkyDancer(top, bottom, time);
    $('body').append(blinkyDancerInstance.$node);
  });

  // bmx functions...
  $('.addBmxButton').on('click', function(event) {
    // var dancerMakerFunctionName = $(this).data('class="addBmxButton"');
    // var dancerMakerFunction = window[dancerMakerFunctionName];
    // console.log('clicked');
    let top = $('body').height() * Math.random();
    let bottom = $('body').width() * Math.random();
    let time = Math.random() * 1000;

    let bmxDancer = {
      name: 'bmxDancer',
      top: top,
      bottom: bottom,
      time: time
    };

    window.dancers.push(bmxDancer);
    var bmxInstance = new makebmxDancer(top, bottom, time);
    $('body').append(bmxInstance.$node);
  });

  // generic functions...
  $('.addGenericButton').on('click', function(event) {
    // var dancerMakerFunctionName = $(this).data('class="addBmxButton"');
    // var dancerMakerFunction = window[dancerMakerFunctionName];
    let top = $('body').height() * Math.random();
    let bottom = $('body').width() * Math.random();
    let time = Math.random() * 1000;

    let genericDancer = {
      name: 'genericDancer',
      top: top,
      bottom: bottom,
      time: time
    };

    window.dancers.push(genericDancer);

    var genericInstance = new makegenericDancer(top, bottom, time);
    $('body').append(genericInstance.$node);
  });
});

