
var randomResult;
var win = 0;
var loss = 0;


var startGame = function(){
    
    $(".crystals").empty();

    randomResult = Math.floor(Math.random()* 69) +30;

    $("#result").html("Random Result: " + randomResult);
    for (var i = 0; i < 4; i++){
        
        var random = Math.floor(Math.random() *11) +1 ;
        console.log(random);


        var crystal = $("<div>"); 
        crystal.attr({
            "class": "crystal",
            "random": random
        });

        crystal.html(random);

        $(".crystals").append(crystal);
    }
}

startGame();


    $(document).on("click",".crystal", function(){
        startGame();

        $("#win").html("Win Count:" + win);
        $("#loss").html("Lost Count:" + loss);
    });

// a game with 4 crystals that has a random number 
// new number is generated for crystals every win/loss
// clicking any crystal should add with the previous code until it equals
// the total score
// if its not equal, we lose and start game over, if is equal we win