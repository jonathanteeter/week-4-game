    
var counter = 0;
var wins = 0;
var losses = 0;

$('#numberWins').text('0');
$('#numberLosses').text('0');

// Here we establish the "targetNumber" from 19 to 120
var targetNumber = Math.floor(Math.random() * 101) + 19;
console.log(targetNumber);

$("#number-to-guess").text(targetNumber);

var crystals = $("#crystals");

var crystalArray = [1, 2, 3, 4];

// Next we create a for loop to create crystals for every numberOption.
for (var i = 0; i < crystalArray.length; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-button");

    // Establish each crystal number from 1 to 12
    var crystalNumber = Math.floor(Math.random() * 11) + 1;
    crystalArray[i] = crystalNumber;
    console.log(crystalNumber);

    // Each imageCrystal will be given a src link to the crystal image
    var caseOf = i;
    switch(caseOf) {
        case 0:
            imageCrystal.attr('src', 'assets/images/BlueCrystal.png', 'alt', 'Blue Crystal');
            break;

        case 1:
            imageCrystal.attr('src', 'assets/images/YellowCrystal.png', 'alt', 'Yellow Crystal');
            break;

        case 2:
            imageCrystal.attr('src', 'assets/images/PurpleCrystal.png', 'alt', 'Purple Crystal');
            break;

        case 3:
            imageCrystal.attr('src', 'assets/images/GreenCrystal.png', 'alt', 'Green Crystal');
            break;

        default:
            break;
    }

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", crystalArray[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    crystals.append(imageCrystal);
}

// This time, our click event applies to every single crystal on the page. Not just one.
$("#crystals").on("click",".crystal-button", function() {

    // event.preventDefault();

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    $("#userInput").text(counter);

    // Here we created some logic to "check" if the click counter matches the targetNumber.
    // Remember, this click event will be triggered with each click.
    // With each click the counter will increase by 10 and be re-evaluated against target.
    if (counter === targetNumber) {

        // If the numbers match we'll celebrate the user's win.
        wins++;
        $('#numberWins').text(wins);
        alert("You win!  " + wins);
        counter = 0;
        resetGame();
    }   
    // Here we added an "else if" condition. If the user's counter ever exceeds the targetNumber...
    else if (counter >= targetNumber) {

        // Then they are alerted with a loss.
        losses++;
        $('#numberLosses').text(losses);
        alert("You lose!!  " + losses);
        counter = 0;
        resetGame();
    }
    crystalValue = 0;
});
counter = 0;

$("#userInput").text('0');


function resetGame() {
    console.log("RESET GAME");

    targetNumber = Math.floor(Math.random() * 101) + 19;
    $("#number-to-guess").text(targetNumber);
    console.log(targetNumber);
    
    $("#crystals").empty();

    for (var i = 0; i < crystalArray.length; i++) {

        // For each iteration, we will create an imageCrystal
        var imageCrystal = $("<img>");

        // First each crystal will be given the class ".crystal-image".
        // This will allow the CSS to take effect.
        imageCrystal.addClass("crystal-button");

        // Establish each crystal number from 1 to 12
        var crystalNumber = Math.floor(Math.random() * 11) + 1;
        crystalArray[i] = crystalNumber;
        console.log(crystalNumber);

        // Each imageCrystal will be given a src link to the crystal image
        var caseOf = i;
        switch(caseOf) {
            case 0:
                imageCrystal.attr('src', 'assets/images/BlueCrystal.png', 'alt', 'Blue Crystal');
                break;

            case 1:
                imageCrystal.attr('src', 'assets/images/YellowCrystal.png', 'alt', 'Yellow Crystal');
                break;

            case 2:
                imageCrystal.attr('src', 'assets/images/PurpleCrystal.png', 'alt', 'Purple Crystal');
                break;

            case 3:
                imageCrystal.attr('src', 'assets/images/GreenCrystal.png', 'alt', 'Green Crystal');
                break;

            default:
                break;
        }
        // Each imageCrystal will be given a data attribute called data-crystalValue.
        // This data attribute will be set equal to the array value.
        imageCrystal.attr("data-crystalvalue", crystalArray[i]);

        // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
        crystals.append(imageCrystal);
    };

    $("#userInput").text('0');
}
