/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const plusBtn = document.querySelector("#btn__element");
const result = document.querySelector("#btn__state");
let count = 0;

plusBtn.addEventListener("click", () => {
  count++;
  result.textContent = count;
  result.style.color = "white";
});
result.addEventListener("click", () => {
  count = 0;
  result.textContent = count;
  result.style.color = "#ff0000";
});
