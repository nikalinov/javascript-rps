const choices = ["ROCK", "PAPER", "SCISSORS"];

function defineWinner(choice, compChoice) {
    choice = choice.toUpperCase();
    compChoice = compChoice.toUpperCase();

    let result = `The opponent's choice: ${compChoice}. `;
    if ((choice === "ROCK" && compChoice === "PAPER") ||
        (choice === "PAPER" && compChoice === "SCISSORS") ||
        (choice === "SCISSORS" && compChoice === "ROCK")) {
        return "computer";
    } else if (choice === compChoice) {
        return "tie";
    } else {
        return "player";
    }
}

let choice = "";
while (choice !== "QUIT") {
    let scores = {player: 0, computer: 0};

    while (scores.player <= 2 && scores.computer <= 2) {
        choice = prompt(`Input ${choices}, or QUIT:`, "QUIT").toUpperCase();
        if (choice === "QUIT") {
            break;
        }
        let defineCompChoice = () => choices[Math.floor(Math.random() * choices.length)].toLowerCase();
        let compChoice = defineCompChoice();
        let result = defineWinner(choice, compChoice);
        let message = "";

        if (result === "player") {
            scores.player += 1;
            message += "You won this one!";
        } else if (result === "computer") {
            scores.computer += 1;
            message += "You lost this one :( ";
        } else {
            message += "Tie! "
        }

        message += `Computer's choice: ${compChoice}. Score: ${scores.player} (you) : ${scores.computer} (computer)`;
        alert(message);
    }
}