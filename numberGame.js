// JavaScript code for TASK 1: NUMBER GAME

// Function to generate a random number within a specified range
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to start the game
function startGame() {
    let randomNumber = generateRandomNumber(1, 100); // Generate random number between 1 and 100
    let attempts = 0; // Variable to count attempts

    while (true) {
        let userGuess = prompt("Guess the generated number (between 1 and 100):"); // Prompt user for their guess
        attempts++;

        if (userGuess == randomNumber) {
            alert(`Congratulations! You've guessed correctly in ${attempts} attempts.`);
            break; // Exit loop if guessed correctly
        } else if (userGuess < randomNumber) {
            alert("Your guess is too low. Try again.");
        } else if (userGuess > randomNumber) {
            alert("Your guess is too high. Try again.");
        }
        
        // Optional: Limiting the number of attempts can be added here
    }

    // Optional: Code for multiple rounds or users can be added here
    
    // Displaying user's score based on attempts or rounds won can be added here
}

startGame(); // Call function to start game
