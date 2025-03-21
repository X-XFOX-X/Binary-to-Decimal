function convertToBinary() {
    const decimalInput = document.getElementById('decimalInput').value;
    const binaryOutput = document.getElementById('binaryOutput');

    if (decimalInput === "") {
        binaryOutput.textContent = "";
        return;
    }

    const number = parseInt(decimalInput, 10);
    if (isNaN(number)) {
        binaryOutput.textContent = "Invalid input. Please enter a valid number.";
    } else {
        binaryOutput.textContent = `Binary: ${number.toString(2)}`;
    }
}

function convertToDecimal() {
    const binaryInput = document.getElementById('binaryInput').value;
    const decimalOutput = document.getElementById('decimalOutput');

    if (binaryInput === "") {
        decimalOutput.textContent = "";
        return;
    }

    if (/^[01]+$/.test(binaryInput)) {
        const number = parseInt(binaryInput, 2);
        decimalOutput.textContent = `Decimal: ${number}`;
    } else {
        decimalOutput.textContent = "Invalid input. Please enter a valid binary number.";
    }
}