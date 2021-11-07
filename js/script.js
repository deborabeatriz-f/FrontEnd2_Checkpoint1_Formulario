let titulo = document.querySelector("h1");

titulo.addEventListener("mouseover", colorChange);

function colorChange(event) {
  titulo.style.color = "#e3f6f5";
  console.log(`aconteceu um ${event.type} no titulo`);
}

titulo.addEventListener("mouseout", (evento) => {
  titulo.style.color = "#e2d1c3";
  console.log(`aconteceu um ${evento.type} no titulo`);
});

let field1 = document.querySelector("#field1");
let field2 = document.querySelector("#field2");
let field3 = document.querySelector("#field3");
let btn = document.querySelector("#btn");

let list = document.querySelector("ol");

btn.addEventListener("click", (event) => {
  let displayLista = document.createElement("div");
  displayLista.setAttribute("class", "displayLista");
  document.querySelector(".listaCompleta").appendChild(displayLista);

  console.log("clicou em mim");

  // impede que o evento padrão aconteça (no caso do form, não envia para um backend)
  event.preventDefault();

  let genero = document.querySelectorAll("input[type='radio']");
  for (let i = 0; i < genero.length; i++) {
    if (genero[i].checked) {
      genero = genero[i].value;
      break;
    }
  }

  let assistido = document.querySelector("input[type='checkbox']");
  let assistidoTxt;
  assistido.checked
    ? (assistidoTxt = "Filme já assistido!")
    : (assistidoTxt = "Filme não assistido");

  let paragrafo = document.createElement("p");
  paragrafo.innerText = `Filme: ${field1.value}. Direção: ${field2.value}. Gênero: ${genero}. ${assistidoTxt}.`;

  displayLista.appendChild(paragrafo);

  let img = document.createElement("img");
  img.setAttribute("class", "cartaz");
  img.setAttribute("src", document.querySelector("#field3").value);
  displayLista.appendChild(img);
});
