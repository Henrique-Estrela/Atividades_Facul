var btn = document.querySelector(".btn");
var datenasc = document.querySelector("#data");
var result = document.querySelector("#resultado");

function getAge(data) {
    const dataatual = new Date();
    const nascimento = new Date(data);
    let ano = dataatual.getFullYear() - nascimento.getFullYear();
    const mes = dataatual.getMonth() - nascimento.getMonth();
    
    if (mes < 0 || (mes == 0 && dataatual.getDate() < nascimento.getDate())) {
        ano--;
    }
    return ano;
}

btn.addEventListener("click",function(){
    var ano = new Date(datenasc.value);
    let data = ano.toString()
    var resultado = getAge(data);

   if (resultado < 0) {
    result.innerHTML = "Parece que não nasceu ainda!";
   }else if(resultado >= 0){
        resultado == 0 ? result.innerHTML = "Ainda não completou 1 ano ainda": result.innerHTML = "Sua idade é " + resultado;
}
    else {
        result.innerHTML = "Algo de errado não está certo";
   }
 
})





