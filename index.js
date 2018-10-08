var inquirer = require("inquirer");


var words = ["subatomic", "underground", "railroad", "chimney", "rocket", "Onomatopoeia", "filthy", "easy", "airborne",
"green", "random", "doomed", "forever"];

function gameBegin() {
inquirer.prompt([ 
        {
            name: "userGuess",
            type: "input",
            message: "Guess a letter"
        },



    ])





    .then(function(response) {
        var wordSplit = words[0].split("")
        console.log(response.userGuess.split(""))
        console.log(wordSplit)
    }) 
}

gameBegin()


// I plan on creating a gameStart to run 1st, and a gameEnd function to run when the loser runs out of guesses using conditionals
// gameEnd()


