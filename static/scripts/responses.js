function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    }
    else if (input == "paper") {
        return "scissors";
    }
    else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    }
    else if (input == "how are you?") {
        return "I am fine and what about you?"
    }
    else if (input == "i am also fine") {
        return "Great!"
    }
    else if (input == "goodbye") {
        return "Talk to you later!";
    }
    else if (input == "how are you?") {
        return "I am fine and what about you?"
    }
    else if (input == "i am also fine") {
        return "Great!"
    }
    else if (input == "goodbye") {
        return "Talk to you later!";
    }
    else {
        return "Try asking something else!";
    }
}