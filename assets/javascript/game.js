
var randomResult;
var win = 0;
var loss = 0;
var pastNumber = 0;

var images = [
            'assets/images/yellowcrystal.jpeg',
            'assets/images/clearcrystal.jpeg',
            'assets/images/mintcrystal.jpg', 
            'assets/images/purplecrystal.jpg',
        ];

var startGame = function(){
    
    $(".crystals").empty();

    randomResult = Math.floor(Math.random() * 69) + 30;

    $("#result").html("Random Result: "  + randomResult);
    
    for(var i = 0; i < 4; i++){
        
    var random = Math.floor(Math.random() * 11) + 1;
    
    var crystal = $("<div>"); 
    crystal.attr({
        "class": "crystal",
        "number-random": random
        
    });
    crystal.css({
        "background-image": "url('" + images[i] + " ')",
        "background-size": "cover",
    });

    crystal.html(random);

    $(".crystals").append(crystal);
    }
  $("#pastNumber").html("Score: "  + pastNumber);
}

startGame();


    $(document).on("click",".crystal", function(){
        startGame();
        
    
        var num = parseInt($(this).attr("number-random"));
        pastNumber += num;
        $("#pastNumber").html("Score: "  + pastNumber);
        
        if (pastNumber === randomResult){
            win++;
            pastNumber = 0;
            alert("Winner Winner Chicken Dinner!");
            $("#win").html("Win Count: " + win);
            startGame();
        }
        else if(pastNumber > randomResult){
            loss++;
            pastNumber =0;
            alert("Sorry, better luck next time");
            $("#loss").html("Lost Count: " + loss);
            startGame();

        }
    
    
    });

// a game with 4 crystals that has a random number 
// new number is generated for crystals every win/loss
// clicking any crystal should add with the previous code until it equals
// the total score
// if its not equal, we lose and start the game over, if is equal we win