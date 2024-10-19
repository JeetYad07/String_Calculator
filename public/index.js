
// Function to handle calculation on the frontend
function calculate() {
    const numbersInput = document.getElementById('numbersInput').value;
    const resultDiv = document.getElementById('result');

    try {
        const sum = add(numbersInput);
        resultDiv.innerHTML = `Sum: ${sum}`;
        resultDiv.className = '';
    } catch (error) {
        resultDiv.innerHTML = error.message;
        resultDiv.className = 'error';
    }
}

// The add function from the backend (copied here for frontend use)
function add(numbers) {
    if (!numbers) {
        return 0;
    }

    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
        const delimiterEnd = numbers.indexOf("\n");
        delimiter = new RegExp(numbers.substring(2, delimiterEnd));
        numbers = numbers.substring(delimiterEnd + 1);
    }

    const numberArray = numbers.split(delimiter);
    const negatives = numberArray.filter(num => parseInt(num) < 0);
    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }

    return numberArray.reduce((sum, num) => sum + (parseInt(num) || 0), 0);
}
