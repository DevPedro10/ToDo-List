// Ternary Operator

const valueNumber = 0;
const valueIsValid_WithTernatyOperator = valueNumber ? "It's True." : "It's False.";

console.log(valueIsValid_WithTernatyOperator) // "It's False."
// Cause by default, 0 is a falsy value.



//Nullish Coalescing Operator

const valueIsValid_WithNullishCoalescing = valueNumber ?? "It's False.";
console.log(valueIsValid_WithNullishCoalescing); // 0
//Cause for the Nullish Coalescing Operator, 0 is not a falsy, so the return is true.


