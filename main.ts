#! usr/bin/env node
import inquirer from "inquirer";
console.log("welcome to misha babar cli number guessing game")

const randomNumber = Math.floor(Math.random()* 5 + 1);
const answer = await inquirer.prompt ([
    {
        name:"userguessedNumber",
        type:"number",
        message: "Enter your guess number(number limit from 1 to 5):",
    },
]);
if(answer.userguessedNumber===randomNumber){
    console.log("congratulations! you guess a correct number")
}else {
    console.log("sorry , you guess a wrong number")
}
