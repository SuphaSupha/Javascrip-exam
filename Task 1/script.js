/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const weightForm = document.querySelector("form");
weightForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const weight = document.querySelector("#search");
  const pound = kgToLb(weight.value);
  const grams = kgToG(weight.value);
  const ounce = kgToOz(weight.value);
  const result = document.querySelector("#output");
  result.style.color = "#fec631";
  result.style.width = "60%";
  result.style.margin = "0 auto";
  result.style.padding = "16px";
  result.style.borderRadius = "12px";
  result.style.boxShadow = "4px 8px 12px #8f7121";
  result.style.background = "black";
  result.style.fontSize = "32px";
  result.style.textAlign = "center";

  result.textContent = `lb: ${pound}, g: ${grams}, oz: ${ounce}`;

  function kgToLb(weight) {
    return Number(weight) * 2.2046;
  }
  function kgToG(weight) {
    return Number(weight) / 0.001;
  }
  function kgToOz(weight) {
    return Number(weight) * 35.274;
  }
});
