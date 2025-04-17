// Game difficulty settings
const difficultySettings = {
    easy: {
        options: 3,
        colorVariance: 150,  // Colors will still be identifiable
        lives: 5
    },
    medium: {
        options: 4,
        colorVariance: 80,
        lives: 3
    },
    hard: {
        options: 5,
        colorVariance: 30,  // Colors will be very similar
        lives: 2
    }
};

// Game state
let score = 0;
let lives = 3;
let correctColor = null;
let currentDifficulty = 'easy';
let colorOptions = [];

// DOM elements
const scoreDisplay = document.getElementById('score');
const livesDisplay = document.getElementById('lives');
const targetRgbDisplay = document.getElementById('target-rgb');
const colorOptionsContainer = document.getElementById('color-options');
const feedbackDisplay = document.getElementById('feedback');
const gameOverModal = document.getElementById('game-over');
const finalScoreDisplay = document.getElementById('final-score');
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

// Correct color RGB
function generateRandomRGB() {
    return {
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256)
    };
}

// Functions to help the main functions of the script

// Clamp function from MDN Math.max and Math.min examples (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

// Shuffle algorithm from StackOverflow (https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Common RGB comparison pattern from color manipulation libraries
function colorsEqual(color1, color2) {
    return color1.r === color2.r && color1.g === color2.g && color1.b === color2.b;
}

// Main function to generate a similar color to the correct color
function generateSimilarColor(baseColor) {
    const variance = difficultySettings[currentDifficulty].colorVariance;
    return {
        r: clamp(baseColor.r + Math.floor(Math.random() * variance * 2) - variance, 0, 255),
        g: clamp(baseColor.g + Math.floor(Math.random() * variance * 2) - variance, 0, 255),
        b: clamp(baseColor.b + Math.floor(Math.random() * variance * 2) - variance, 0, 255)
    };
}
