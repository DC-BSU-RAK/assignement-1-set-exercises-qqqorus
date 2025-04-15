// The DOM should be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Get the references to the DOM elements which will be used here
    const costPerLiterInput = document.getElementById('cost-per-liter');
    const litersInput = document.getElementById('liters');
    const calculateBtn = document.getElementById('calculate-btn');
    const resultDisplay = document.getElementById('result');

    // Executes the calculateTotalCost function when the button is clicked
    calculateBtn.addEventListener('click', calculateTotalCost);

    // Function to calculate and display the total cost
    function calculateTotalCost() {
        // Get the values from the input fields and convert them to numbers
        const costPerLiter = parseFloat(costPerLiterInput.value);
        const liters = parseFloat(litersInput.value);
        
        // Checks the inputs if the value is "Not-a-Number" or NaN, and if the value is below 0
        if (isNaN(costPerLiter) || isNaN(liters) || costPerLiter < 0 || liters < 0) {
            resultDisplay.textContent = 'Please enter valid positive numbers';
            return; // Displays the message if the following criteria is met
        }
        
        // Calculates the total cost
        const totalCost = costPerLiter * liters;
        
        // Display the result with 2 decimal places and euro symbol
        resultDisplay.textContent = `Total Cost: €${totalCost.toFixed(2)}`;
    }

    // Theme toggle button's functionality
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Checks for saved theme preference or use system preference
    const currentTheme = localStorage.getItem('theme') || 
                        (prefersDarkScheme.matches ? 'dark' : 'light');
    
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀️ Light Mode';
    }
    
    // Changes the theme when the button is clicked
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        
        // Changes the theme and text when the current theme is the opposite 
        if (isLight) {
            themeToggle.textContent = '🌙 Dark Mode';
            localStorage.setItem('theme', 'light');
        } else {
            themeToggle.textContent = '☀️ Light Mode';
            localStorage.setItem('theme', 'dark');
        }
    });
});

