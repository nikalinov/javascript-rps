const choices = ["ROCK", "PAPER", "SCISSORS"];

function announceWinner(choice, compChoice) {
    choice = choice.toUpperCase();
    compChoice = compChoice.toUpperCase();

    let result = `The opponent's choice: ${compChoice}. `;
    if ((choice === "ROCK" && compChoice === "PAPER") ||
        (choice === "PAPER" && compChoice === "SCISSORS") ||
        (choice === "SCISSORS" && compChoice === "ROCK")) {
        result += "You lost!";
    } else if (choice === compChoice) {
        result += "Tie!";
    } else {
        result += "You won!";
    }
    return result;
}

let choice = prompt(`Input ${choices}, or QUIT:`, "QUIT").toUpperCase();
while (choice !== "QUIT") {
    let compChoice = () => choices[Math.floor(Math.random() * choices.length)].toLowerCase();
    let result = announceWinner(choice, compChoice());
    alert(result);
    choice = prompt(`Input ${choices}, or QUIT:`, "QUIT").toUpperCase();
}