const colors = require("colors");
var input = require("readline-sync");
console.log("------LET THE WAR BEGINS------".rainbow.bold.underline);
let playerName = input.question("Enter your name: ");
let balance = 50;
let bet = 1;
console.log("Hello " + playerName + " you have " + (balance + " NIS ").blue);
let choice = 1;



while (choice == 1 && bet <= balance) {

    bet = input.questionInt("place your bet for the next round: 1 to " + balance + ": ");
    if (bet < 1 || bet > balance) {
        console.log("invalid input".black.bgWhite);
        break;
    }



    let userCard = randomCard();
    let cpuCard = randomCard();
    console.log(userCard + suits());
    console.log("vs".yellow.bold);
    console.log(cpuCard + suits());
    if (userCard == cpuCard)   // draw
    {
        console.log("it's a draw you start another round ".green);
        choice = 1;

    }
    // user win
    else if (userCard > cpuCard) {
        balance = balance + bet;
        console.log("Your card is " + userCard + " And my card is " + cpuCard +
            " You won ".magenta + " " + bet + "!!" + " And you have " + balance);
        choice = input.keyIn("choose  one option \n1.Play another round\n2.leave with my money ", { limit: '$<1-2>' });
        if (choice == 2) {
            console.log("have a nice day you left with " + (balance + " NIS").blue);
            break;
        }
        else {
            choice = 1;
        }
    }
    else if (userCard < cpuCard) {      // the user lose
        balance = balance - bet;
        console.log("Your card is " + userCard + " And my card is " + cpuCard +
            " You lost ".red + " " + bet + "!!" + " And you have " + balance);
        if (balance == 0) {
            console.log("You are broke".red);
            break;

        }
        else {
            choice = input.keyIn("choose  one option \n1.Play another round\n2.leave with my money ", { limit: '$<1-2>' });
            if (choice == 2) {
                console.log("have a nice day you left with " + (balance + " NIS").blue);
                break;

            }
            else {
                choice = 1;
            }

        }

    }



    function randomCard() {         // randomize a card
        let i = Math.floor(Math.random() * 12) + 1;
        return i;
    }

}


function suits() {              // add a suits for the card 
    let arrSuits = [('♠'.black), ('♥'.red), ('♣'.black), ('♦'.red)];
    let s = Math.floor(Math.random() * 3) + 1;
    return arrSuits[s];
}