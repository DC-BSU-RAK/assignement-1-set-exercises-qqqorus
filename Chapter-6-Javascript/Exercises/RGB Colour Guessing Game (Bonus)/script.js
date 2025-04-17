// Game difficulty settings
const difficultySettings = {
    easy: {
        options: 3,
        colorRange: 150, // Colors will still be identifiable
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

// Game state
let currentScore = 0;
let remainingLives = 3;
let correctColor = null;
let currentDifficulty = 'easy';

// DOM Elements
const scoreElement = document.getElementById('score');
const livesElement = document.getElementById('lives');
const targetRgbElement = document.getElementById('target-rgb');
const colorOptionsElement = document.getElementById('color-options');
const feedbackElement = document.getElementById('feedback');
const gameOverElement = document.getElementById('game-over');
const finalScoreElement = document.getElementById('final-score');
const playAgainButton = document.getElementById('play-again');
const difficultyButtons = document.querySelectorAll('.difficulty-button');

// Initialize game
document.addEventListener('DOMContentLoaded', function() {
    setupDifficultyButtons();
});

// Set up difficulty buttons
function setupDifficultyButtons() {
    difficultyButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            difficultyButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Set new difficulty and restart game
            currentDifficulty = this.dataset.difficulty;
        });
    });
}

