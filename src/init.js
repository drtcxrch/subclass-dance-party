$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineUpButton').on('click', function(event) {
    var top = 50;
    for (var i = 0; i < window.dancers.length; i++) {
      var dancer = window.dancers[i];
      top += 50;
      dancer.setPosition(top, 500);
    }
  });

  $('.interactButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) { //dancer1 (x1, y1) dancer2 (x2, y2)
      var dancer1 = window.dancers[i];
      for (var j = i+ 1; j < window.dancers.length; j++) {
        var dancer2 = window.dancers[j];
        var topDistance = dancer1.top - dancer2.top;
        var bottomDistance = dancer1.left - dancer2.left;
        var totalDistance = Math.sqrt((topDistance * topDistance) + (bottomDistance * bottomDistance));
        if (totalDistance < 200){
          dancer1.$node.effect( "shake" );
          dancer2.$node.effect( "shake" );
        }

      }
    }
  });
});

