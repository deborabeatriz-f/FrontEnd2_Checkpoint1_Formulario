let titulo = document.querySelector("h1");

titulo.addEventListener("mouseover", colorChange);

function colorChange(event) {
  titulo.style.color = "#e3f6f5";
  console.log(`aconteceu um ${event.type} no titulo`);
}

// com arrow function - anônima
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
  console.log("clicou em mim");

  // impede que o evento padrão aconteça (no caso do form, não envia para um backend)
  event.preventDefault();

  let li = document.createElement("li");
  li.innerText = `Filme: ${field1.value}, Direção: ${field2.value}.`;

  // o código abaixo mostra o endereço do url
  // li = document.createElement("li");
  // li.innerText = field3.value;
  // document.querySelector("ol").appendChild(li);

  let img = document.createElement("img");
  img.setAttribute("src", document.querySelector("#field3").value);
  document.querySelector("main").appendChild(img);

  list.appendChild(li);
});

// dica para adicionar imagem
