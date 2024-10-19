
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

// Export the add function for testing
module.exports = add;
