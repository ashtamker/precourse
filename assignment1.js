const colors = require("colors");
var input = require("readline-sync");
const title = 'The Big Bang Theory Quiz'.red;
const subTiltle = 'Are You a True Fan?'.red;
console.log(title.bgWhite.underline.bold + "\n" + subTiltle.underline + "\n");
var score = 0;
var tmp;

// Each object contains the answers and score for each question
let questions1 = {
    Biologists: 0,
    Chemists: 0,
    Astrophysics: 0,
    Physicists: 3
};


let questions2 = {
    '2A': 0,
    '3A': 0,
    '4A': 3,
    '4B': 0
};


let questions3 = {
    'No one knows': 3,
    'Farrah Fowler': 0,
    Bloom: 0,
    Kevins: 0
};


let questions4 = {
    Leonard: 0,
    Amy: 3,
    Sheldon: 0,
    'Leslie Winkle': 0
};


let questions5 = {
    'His ex-girlfriend': 0,
    Penny: 0,
    'He adopted her': 0,
    'Howard and Bernadette': 3
};

// questions number 1
console.log("First Question".blue.underline);
q1 = ["Chemists", "Astrophysics", "Physicists", "Biologists"]; // Physicists
index = input.keyInSelect(q1, "What type of scientists are Sheldon and Leonard?");
tmp = questions1[q1[index]];
tmp = Number(tmp);
score = score + tmp;
// questions number 2
console.log("\nSecond Question".blue.underline);
q2 = ["2A", "3A", "4A", "4B"];  // 4A
index = input.keyInSelect(q2, "What is Sheldons apartments number?");
tmp = questions2[q2[index]];
tmp = Number(tmp);
score = score + tmp;
// questions number 3
console.log("\nThird Question".blue.underline);
q3 = ["No one knows", "Farrah Fowler", "Bloom", "Kevins"]; //No one knows
index = input.keyInSelect(q3, "What is Penny surname?");
tmp = questions3[q3[index]];
tmp = Number(tmp);
score = score + tmp;

// questions number 4
console.log("\nFourth Question".blue.underline);
q4 = ["Leonard", "Amy", "Sheldon", "Leslie Winkle"];
index = input.keyInSelect(q4, "Which character from the show has a PhD in real life?");
tmp = questions4[q4[index]];
tmp = Number(tmp);
score = score + tmp;
// questions number 5
console.log("\nFifth Question".blue.underline);
q5 = ["His ex-girlfriend", "Penny", "He adopted her", "Howard and Bernadette"];
index = input.keyInSelect(q5, "Who gave Raj his dog Cinnamon?");
tmp = questions5[q5[index]];
tmp = Number(tmp);
score = score + tmp;





score = Number(score);
console.log("your score is " + Number(score));
if (score == 15) {
    console.log("You did not missed a single episode, A real fan".rainbow);
}
else if ((score > 5) && (score < 15)) {
    console.log("You have watched many episodes, But there are episodes to complete");
}

else {
    console.log("WOW, We probably did not watch the same TV series".black.bgWhite);
}

