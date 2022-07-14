/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const showUser = document.querySelector("#btn");

const renderCards = (info) => {
  const outputLogin = document.createElement("h3");
  outputLogin.textContent = info.login;
  outputLogin.style.textAlign = "center";
  outputLogin.style.fontSize = "32px";

  const outputImg = document.createElement("img");
  outputImg.src = info.avatar_url;
  outputImg.alt = "Profile";
  outputImg.style.width = "100%";
  outputImg.style.height = "90%";
  outputImg.style.borderRadius = "12px";
  outputImg.style.boxShadow = "3px 6px 9px 3px black";

  document.querySelector("#message").textContent = "";

  const card = document.createElement("div");
  card.style.width = "30%";
  card.style.height = "400px";
  card.style.borderRadius = "12px";
  card.style.padding = "12px";
  card.style.margin = "12px";
  card.style.background = "#FC2E20";
  card.style.boxShadow = "1px 2px 3px #FC2E20";

  //Veikia, bet reikia refreshint puslapį (ne dinamiškas)
  window.innerWidth < 768
    ? (card.style.minWidth = "95%")
    : (card.style.minWidth = "31%");

  //kartais veikia kartais ne.....reikia letai keisti ekrano dydį(dinamiškas)
  // const mediaOne = matchMedia("(min-width:760px)");
  // mediaOne.addEventListener("change", () => {
  //   card.style.width = "100%";
  //   card.style.minHeight = "300px";
  // });
  // const mediaTwo = matchMedia("(max-width:770px)");
  // mediaTwo.addEventListener("change", () => {
  //   card.style.width = "30%";
  //   card.style.minHeight = "400px";
  // });

  const output = document.querySelector("#output");
  output.style.display = "flex";
  output.style.flexWrap = "wrap";

  card.append(outputImg, outputLogin);
  output.append(card);
};
showUser.addEventListener("click", () => {
  fetch(ENDPOINT)
    .then((resp) => resp.json())
    .then((response) => {
      response.forEach((info) => renderCards(info));
    })
    .catch((error) => {
      console.log(error);
    });
});
