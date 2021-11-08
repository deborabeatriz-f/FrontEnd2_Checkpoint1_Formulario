// h1 com hover
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

// inputs do formulario
let field1 = document.querySelector("#field1");
let field2 = document.querySelector("#field2");
let field3 = document.querySelector("#field3");
let btn = document.querySelector("#btn");

let list = document.querySelector("ol");

// deopis de apertar o botão
btn.addEventListener("click", (event) => {
  // array das imagens
  let imagens = [
    "./images/1.jpg",
    "./images/2.jpg",
    "./images/3.jpg",
    "./images/4.jpg",
    "./images/5.jpg",
    "./images/6.jpg",
    "./images/7.jpg",
    "./images/8.jpg",
    "./images/9.jpg",
    "./images/10.jpg",
    "./images/11.jpg",
    "./images/12.jpg",
    "./images/13.jpg",
    "./images/14.jpg",
    "./images/15.jpg",
    "./images/16.jpg",
    "./images/17.jpg",
    "./images/18.jpg",
    "./images/19.jpg",
    "./images/20.jpg",
  ];

  // escolha aleatória das imagens(cartazes)
  let imgIndex1 = Math.floor(Math.random() * imagens.length);
  let img1 = document.querySelector(".img1");
  img1.setAttribute("src", imagens[imgIndex1]);

  let imgIndex2 = Math.floor(Math.random() * imagens.length);
  let img2 = document.querySelector(".img2");
  img2.setAttribute("src", imagens[imgIndex2]);

  let imgIndex3 = Math.floor(Math.random() * imagens.length);
  let img3 = document.querySelector(".img3");
  img3.setAttribute("src", imagens[imgIndex3]);

  let imgIndex4 = Math.floor(Math.random() * imagens.length);
  let img4 = document.querySelector(".img4");
  img4.setAttribute("src", imagens[imgIndex4]);

  // impede que o evento padrão aconteça (no caso do form, não envia para um backend)
  event.preventDefault();

  // alerta se o campo nome do filme e o cartaz não estiverem preenchidos
  if (field1.value == "" || field3.value == "") {
    alert("Preencha o formulário! 😉 🎥");
  } else {
    let displayLista = document.createElement("div");
    displayLista.setAttribute("class", "displayLista");
    document.querySelector(".listaCompleta").appendChild(displayLista);

    // optar por genero do filme
    let genero = document.querySelectorAll("input[type='radio']");
    for (let i = 0; i < genero.length; i++) {
      if (genero[i].checked) {
        genero = genero[i].value;
        break;
      }
    }

    // optar por filme assistido ou não
    let assistido = document.querySelector("input[type='checkbox']");
    let assistidoTxt;
    assistido.checked
      ? (assistidoTxt = "Filme já assistido!")
      : (assistidoTxt = "Filme não assistido.");

    // Frase do Card
    let paragrafo = document.createElement("p");
    paragrafo.innerText = `Filme: ${field1.value}. Direção: ${field2.value}. Gênero: ${genero}. ${assistidoTxt}`;

    displayLista.appendChild(paragrafo);

    // imagem(cartaz) que irá no Card
    let img = document.createElement("img");
    img.setAttribute("class", "cartaz");
    img.setAttribute("src", document.querySelector("#field3").value);
    displayLista.appendChild(img);
  }
});
