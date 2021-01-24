var input = require("readline-sync");
let people = input.question("How many people are you going with?");
people = Number(people);
let floatNum = Number.isInteger(people);
if ((isNaN(people)) || (people <=0) || (floatNum == false)) {
    console.log("worng input");
    throw "stop execution";
}



else {

    if (input.keyInYN("Should it be Kosher?")) {
        if (input.keyInYN("should it be Kashrut Lemehadrin?")) {

            foodType = ["meat", "italian", "sushi"];
            index = input.keyInSelect(foodType, "What kind of food do you want?");
            if (("meat") == (foodType[index])) {
                console.log("reginarest restaurant");
            }
            else if (("italian") == (foodType[index])) {
                console.log("little napoli restaurant");
            }
            else if (("sushi") == (foodType[index])) {
                console.log("oshioshi restaurant");
            }
        }
        else {
            foodType = ["meat", "italian", "sushi"];
            index = input.keyInSelect(foodType, "What kind of food do you want?");
            if (("meat") == (foodType[index])) {
                console.log("memphis restaurant");
            }
            else if (("italian") == (foodType[index])) {
                console.log("florentina restaurant");
            }
            else if (("sushi") == (foodType[index])) {
                console.log("nuchi restaurant");
            }

        }
    }


    else {

        foodType = ["meat", "italian", "sushi"];
        index = input.keyInSelect(foodType, "What kind of food do you want?");
        if (("meat") == (foodType[index])) {
            console.log("rakbasar restaurant");
        }
        else if (("italian") == (foodType[index])) {
            console.log("gusto restaurant");
        }
        else if (("sushi") == (foodType[index])) {
            console.log("onami restaurant");
        }

    }
}


