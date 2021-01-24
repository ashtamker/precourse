const colors = require("colors");
var input = require("readline-sync");
var figlet = require("figlet");


console.log(figlet.textSync("HANG-MAN", { font: "Swamp Land", horizontalLayout: "full" }).cyan);

let wordsBank = ["elephant", "hippopotamus", "dolphin", "turtle", "crocodile",
    "badger", "cheetah", "leopard", "gorilla", "chimpanzee"];
var counter = 10;
let guesword = pickWord(wordsBank);
let answerWord = [];
for (i = 0; i < guesword.length; i++) {
    answerWord[i] = "*";

}



while (counter != 0) {
    console.log("The word is: \n".blue.underline + answerWord.join(""));

    if (counter == 0) {
        console.log("Sorry it's was your last chance!");
        break;

    }
    else if (answerWord.join("") == guesword) {
        console.log("good, you did it".toUpperCase().rainbow);
        break;
    }

    let letter = input.question("What is your guess? ");
    letter = letter.toLowerCase();     // change to lower case if the user enter a upper cases
              // check for invalid guess
    if (letter < 'a' || letter > 'z') {
        console.log("Enter a letter please");
        counter++;
    }

    let firstCheck = (checkLetter(guesword, letter));
    if (firstCheck == -1) {
        counter--;
        console.log("You have " + counter + " attempts left to guess");
    }
    // check where the letter in the word and it will be print  
    else {
        for (j = 0; j < guesword.length; j++) {
            if (guesword[j] === letter) {
                answerWord[j] = letter;

            }
        }


    }

}


// choose a word 
function pickWord(x) {
    let word = x[Math.floor(Math.random() * 10)];
    return word;
}
// check if the letter in the word
function checkLetter(arr, l) {

    let x = arr.indexOf(l.toUpperCase());
    let y = arr.indexOf(l.toLowerCase());
    if (x == -1 && y == -1) {
        return -1;
    }
    else {
        return 1;
    }

}

