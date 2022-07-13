/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

const renderCarsCards = (cars) => {
  const { brand, models } = cars;
  const outputBrand = (document.createElement("h2").textContent = brand);
  const brake = document.createElement("br");
  const outputModel = (document.createElement("h3").textContent = models);

  const card = document.createElement("div");
  card.style.width = "47%";
  card.style.minHeight = "120px";
  card.style.borderRadius = "12px";
  card.style.padding = "12px";
  card.style.margin = "12px";

  card.style.background = "#21B6A8";
  card.style.boxShadow = "3px 6px 9px #21B6A8";

  const output = document.querySelector("#output");
  output.style.display = "flex";
  output.style.flexWrap = "wrap";
  card.append(outputBrand, brake, outputModel);
  output.append(card);
};

fetch(ENDPOINT)
  .then((resp) => resp.json())
  .then((response) => {
    console.log(response);
    response.forEach((cars) => renderCarsCards(cars));
  })
  .catch((error) => {
    console.error(error);
  });
