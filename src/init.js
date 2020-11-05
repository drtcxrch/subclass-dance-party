$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('class="addDancerButton"');
    var dancerMakerFunction = window[dancerMakerFunctionName];

    let top = $('body').height() * Math.random();
    let bottom = $('body').width() * Math.random();
    let time = Math.random() * 1000;

    let blinkyDancer = {
      name: 'blinkyDancer',
      top: top,
      bottom: bottom
    };

    var blinkyDancerInstance = new makeBlinkyDancer(top, bottom, time);
    $('body').append(blinkyDancerInstance.$node);
    window.dancers.push(blinkyDancer);
    // console.log(window.dancers);
  });
});

/* This function sets up the click handlers for the create-dancer
  * buttons on dancefloor.html. You should only need to make one small change to it.
  * As long as the "data-dancer-maker-function-name" attribute of a
  * class="addDancerButton" DOM node matches one of the names of the
  * maker functions available in the global scope, clicking that node
  * will call the function to make the dancer.
  */

// get the maker function for the kind of dancer we're supposed to make
// make a dancer with a random position

/* dancerMakerFunctionName is a string which must match
  * one of the dancer maker functions available in global scope.
  * A new object of the given type will be created and added
  * to the stage.
  */

// var dancer = dancerMakerFunction(
//   $('body').height() * Math.random(),
//   $('body').width() * Math.random(),
//   Math.random() * 1000
// );
// $('body').append(dancer.$node);