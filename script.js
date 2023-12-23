const choices = ["ROCK", "PAPER", "SCISSORS"];

let choice = prompt(`Input ${choices}, or QUIT:`, "QUIT");
while (choice.toUpperCase() !== "QUIT") {
    let compChoice = () => choices[Math.floor(Math.random() * choices.length)];

}