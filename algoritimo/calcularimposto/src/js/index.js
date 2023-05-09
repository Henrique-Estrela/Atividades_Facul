const btncalcular = document.querySelector(".btn-calcular");
const form = document.querySelector("form");



btncalcular.addEventListener("click", event => {
  
  event.preventDefault();

  const fields = [...document.querySelectorAll(".input-block input.produto")];

  fields.forEach(field => {
    if (field.value === "") form.classList.add("validate-error");
  });

  const formError = document.querySelector(".validate-error");

  if (formError) {
    formError.addEventListener("animationend", event => {
      if (event.animationName === "nono") {
        formError.classList.remove("validate-error");
      }
    });
  } else {
    var txtproduto = document.querySelector("#produto");
    var txtimposto = document.querySelector("#imposto");
    var txttotalproduto = document.querySelector("#final");


    var produto = Number(txtproduto.value);
    var imposto = produto * 60 / 100;
    var totalproduto = produto + imposto;

    txtimposto.value = imposto.toFixed(2).replace('.', ',');
    txttotalproduto.value = totalproduto.toFixed(2).replace('.', ',');
  }
});




form.addEventListener("animationstart", event => {
  if (event.animationName === "down") {
    document.querySelector("body").style.overflow = "hidden";
  }
});

form.addEventListener("animationend", event => {
  if (event.animationName === "down") { 
    form.style.display = "none";
    document.querySelector("body").style.overflow = "none";
  }
});



const ulSquares = document.querySelector("ul.squares");

for(let i = 0; i < 11; i++){
  
  const random = (min, max) => Math.random() * (max - min) + min; 
  
  const li = document.createElement("li");
    
  const size = Math.floor(random(10, 120)); 
  
  const position = random(1, 99);
    
  li.style.width = `${size}px`;
  li.style.height = `${size}px`;
  li.style.bottom = `-${size}px`;
  
  li.style.left = `${position}%`;
  
  
  const delay = random(0.1, 5);
  const duration = random(24, 12);
  
  li.style.animationDelay = `${delay}s`;
  li.style.animationDuration = `${duration}s`;
  li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`; // cada li ficará com o tempo diferente uma da outra
  
  ulSquares.appendChild(li);
  
}



