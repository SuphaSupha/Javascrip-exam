/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator(num1, num2) {
  this.numberOne = num1;
  this.numberTwo = num2;
  this.sum = () => {
    return this.numberOne + this.numberTwo;
  };
  this.subtraction = () => {
    return this.numberOne - this.numberTwo;
  };
  this.multiplication = () => {
    return this.numberOne * this.numberTwo;
  };
  this.division = () => {
    return this.numberOne / this.numberTwo;
  };
}
const numberArr = new Calculator(4, 7);

console.log(numberArr.sum());
console.log(numberArr.subtraction());
console.log(numberArr.multiplication());
console.log(numberArr.division());
