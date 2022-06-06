// Nested If else       means there is if else inside if else

// let winningNumber = 12;

// let userGuess = +prompt("Enter Your Guess"); // to take input in number

// if (userGuess === winningNumber) {
//   console.log("You Won");
// } else {

//         if (userGuess > winningNumber) {
//           console.log("You are a bit Higher");
//         } 
//         else {
//           console.log("You are a bit Lower to the actual number");
//         }
// }

let firstName = "Saeed";
let userGuess = prompt("Guess My Name");

if(userGuess===firstName || userGuess === "saeed"){
    console.log("You have guessed it Right");
}else{
    if(userGuess[0] === "s" || userGuess[0] === "S"){
        console.log("You are very Close to My Name");
    }else{
        console.log("Please Try Again");
    }
}
