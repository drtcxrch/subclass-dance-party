$(document).ready(function() {
  window.dancers = [];



  // blinkyDancer functions...
  $('.addBlinkyDancerButton').on('click', function(event) {

    let top = $('body').height() * Math.random() / 2;
    let left = $('body').width() * Math.random();
    let time = Math.random() * 1000;

    var blinkyDancerInstance = new makeBlinkyDancer(top, left, time);
    $('body').append(blinkyDancerInstance.$node);
    window.dancers.push(blinkyDancerInstance);
    console.log(window.dancers);
  });



  // bmx functions...
  $('.addBmxButton').on('click', function(event) {
    let top = $('body').height() * Math.random() / 2;
    let left = $('body').width() * Math.random();
    let time = Math.random() * 1000;

    var bmxInstance = new makebmxDancer(top, left, time);
    $('body').append(bmxInstance.$node);
    window.dancers.push(bmxInstance);
  });



  // generic functions...
  $('.addGenericButton').on('click', function(event) {
    let top = $('body').height() * Math.random() / 2;
    let left = $('body').width() * Math.random();
    let time = Math.random() * 1000;

    var genericInstance = new makegenericDancer(top, left, time);
    $('body').append(genericInstance.$node);
    window.dancers.push(genericInstance);
  });


  // line up function
  $('.lineupButton').on('click', function(event) {
    let shiftLeft = {
      left: 100
    };

    let shiftRight = {
      left: 1350
    };

    let { dancers } = window;
    for (let i = 0; i < dancers.length; i++) {

      if (i % 2 === 0) {
        dancers[i].$node.css(shiftLeft);
      } else {
        dancers[i].$node.css(shiftRight);
      }
    }
  });

  // teamup function
  $('.teamupButton').on('click', function(event) {
    let bunnyHop = {
      top: 100, // should increase so its not stacked
      left: 100
    };

    let freeStyle = {
      top: 100, // should increase so its not stacked
      left: 1350
    };

    let blinky = {
      top: 550,
      left: 550
    };
    let { dancers } = window;

    for (let i = 0; i < dancers.length; i++) {
      if (dancers[i].$node[0].classList.contains('BlinkyDancer')) {
        dancers[i].$node.css(blinky);
        blinky.left += 100;

      } else if (dancers[i].$node[0].classList.contains('BMXDancer')) {
        dancers[i].$node.css(bunnyHop);
        bunnyHop.top += 100;

      } else {
        dancers[i].$node.css(freeStyle);
        freeStyle.top += 100;
      }
    }
  });
});
