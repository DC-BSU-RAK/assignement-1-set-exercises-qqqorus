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
});

function lightMode() {
    var element = document.body;
    element.classList.toggle("light-mode");
}