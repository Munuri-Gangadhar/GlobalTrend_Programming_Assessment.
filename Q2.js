function evaluateExpression(expression) {
    expression = expression.replace(/\s+/g, '');
    
    let result = 0;
    let currentNumber = '';
    let currentOperator = '+';

    function applyOperator(operator, number) {
        if (operator === '+') {
            result += number;
        } else if (operator === '-') {
            result -= number;
        }
    }
    for (let i = 0; i < expression.length; i++) {
        let char = expression[i];
        if (/\d/.test(char)) {
            currentNumber += char;
        }
        if (/[+\-]/.test(char) || i === expression.length - 1) {
            applyOperator(currentOperator, parseInt(currentNumber));
            currentOperator = char;
            currentNumber = '';
        }
    }

    return result;
}

console.log(evaluateExpression("3 + 5 - 2")); 
console.log(evaluateExpression("10 + 20 - 5 + 3")); 
console.log(evaluateExpression("100 - 50 + 25 - 10")); 
