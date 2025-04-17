// Game difficulty settings
const difficultySettings = {
    easy: {
        options: 3,
        colorRange: 150, // Colors will be more distinct
        lives: 5
    },
    medium: {
        options: 4,
        colorRange: 100,
        lives: 3
    },
    hard: {
        options: 5,
        colorRange: 50, // Colors will be very similar
        lives: 2
    }
};

// Game status
let currentScore = 0;
let remainingLives = 5;
let correctColor = null;
let currentDifficulty = 'easy';
