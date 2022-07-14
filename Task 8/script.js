/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator() {
  this.sum = (a, b) => {
    return a + b;
  };
  this.subtraction = (a, b) => {
    return a - b;
  };
  this.multiplication = (a, b) => {
    return a * b;
  };
  this.division = (a, b) => {
    return a / b;
  };
}
Calculator();

console.log(sum(2, 2));
console.log(subtraction(10, 7));
console.log(multiplication(3, 3));
console.log(division(12, 4));
