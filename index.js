#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellow.bold("Wellcome to Maira Kanwal - CLI Number Guessing Game"));
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([{
        name: "userGuessingNumber",
        type: "number",
        message: "Please guess your number 1 to 10:"
    }
]);
if (answers.userGuessingNumber === randomNumber) {
    console.log(chalk.green("congratulation! you guess right number."));
}
else {
    console.log(chalk.red("sorry! You guessed wrong number."));
}
