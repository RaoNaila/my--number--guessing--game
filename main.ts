#!/usr/bin/env node
import inquirer from "inquirer";

const systemGenerateNo = Math.floor(Math.random() *10) + 1;

const{userGuess} : {userGuess:number} = await inquirer.prompt({

    type:"number",
    name:"userguess",
    message:"Guess the number between 1 to 10:",
});

if (userGuess===systemGenerateNo){
    console.log("congraulation your guess is right");
}else{
    console.log(`oops the correct number was ${systemGenerateNo}.Good luck for next time`);
}