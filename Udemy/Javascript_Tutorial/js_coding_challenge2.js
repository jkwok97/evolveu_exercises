// CODING CHALLENGE #2

// John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
// 1. Calculate the average score for each team
// 2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
// 3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
// 4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
// 5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
// GOOD LUCK 😀

var game1John, game2John, game3John;
game1John = 89;
game2John = 120;
game3John = 103;

var game1Mike, game2Mike, game3Mike;
game1Mike = 116;
game2Mike = 94;
game3Mike = 123;

var game1Mary, game2Mary, game3Mary;
game1Mary = 97;
game2Mary = 134;
game3Mary = 200;

var gameAvgJohn = (game1John + game2John + game3John) / 3;
var gameAvgMike = (game1Mike + game2Mike + game3Mike) / 3; 
var gameAvgMary = (game1Mary + game2Mary + game3Mary) / 3; 

// var winner = gameAvgJohn > gameAvgMike ? "John's team has a higher avg with " + gameAvgJohn : "Mike's team has a higher avg with " + gameAvgMike
// console.log(winner);

if (gameAvgJohn > gameAvgMike && gameAvgJohn > gameAvgMary) {
    console.log("John's team has a higher avg with " + gameAvgJohn);
} else if (gameAvgJohn < gameAvgMike && game1Mike > gameAvgMary) {
    console.log("Mike's team has a higher avg with " + gameAvgMike);
} else if (gameAvgJohn < gameAvgMike && game1Mike < gameAvgMary) {
    console.log("Mary's team has a higher avg with " + gameAvgMary);
} else {
    console.log("All teams have the same average");
}
