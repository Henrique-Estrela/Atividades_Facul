  const btn = document.querySelector(".btn");

  btn.addEventListener("click", function(){
    var a = Number(document.querySelector("#numberA").value);
    var b = Number(document.querySelector("#numberB").value);
    var c = Number(document.querySelector("#numberC").value);
    var Resultado = document.querySelector('#resposta');
    var raizmain = {
      raiz1: 0 ,
      raiz2: 0,
      raiz: 0
    }
    var delta = (b * b) - 4 * a * c;


    if (!a && !b && !c) {
      Resultado.innerHTML = 'Insira os valores de a, b e c';
    } else if (delta == 0) {
      raizmain.raiz = (-b + Math.sqrt(delta)) / (2 * a);
      Resultado.innerHTML = "Raiz dupla: " + raizmain.raiz.toFixed(1);
    } else if (delta < 0) {
      Resultado.innerHTML = 'Sem raízes reais';
    } else {
      raizmain.raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
      raizmain.raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
      Resultado.innerHTML = "Raiz 1: " + Number(raizmain.raiz1.toFixed(1)) + "<br/>" + "Raiz 2: " + Number(raizmain.raiz2.toFixed(1));
    }
  
  })

  
