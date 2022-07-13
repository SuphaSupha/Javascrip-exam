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
  const outputImg = (document.createAttribute("img").src = info.avatar_url);
  // outputImg.src = info.avatar_url;
  // outputImg.alt = info.avatar_url;

  document.querySelector("#message").textContent = "";

  const card = document.createElement("div");
  card.style.width = "30%";
  card.style.borderRadius = "12px";
  card.style.padding = "12px";
  card.style.margin = "12px";
  card.style.display = "flex";
  card.style.background = "#FC2E20";
  card.style.boxShadow = "3px 6px 9px #FC2E20";

  const output = document.querySelector("#output");
  output.style.display = "flex";
  output.style.flexWrap = "wrap";
  card.append(outputLogin, outputImg);
  output.append(card);
};
showUser.addEventListener("click", () => {
  fetch(ENDPOINT)
    .then((resp) => resp.json())
    .then((response) => {
      console.log(response);
      response.forEach((info) => renderCards(info));
    })
    .catch((error) => {
      console.log(error);
    });
});
