var btn = document.querySelector(".btn");
var btn2 = document.querySelector(".btn2");
var tabela = document.getElementById('tableprodutos');
var linhas = tabela.getElementsByTagName('tr');

btn2.addEventListener("click", function(){

        let totalCompra = Number(document.getElementById("txttotalcompra").value)
        let dinheiro = Number(document.getElementById("txtdinheiro").value)

        if (dinheiro) {

            let troco = dinheiro - totalCompra
            document.getElementById("txttroco").value = troco.toFixed(2).replace('.',',')


        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Parece que deixou algo passar!',
                timer: 2500,
                showConfirmButton: false,

            })
        }


})

btn.addEventListener("click", function(){
    let valorProduto = Number(document.getElementById("txtvalorproduto").value);
    let totalCompra = Number(document.getElementById("txttotalcompra").value);
    let tabela = document.getElementById("tableprodutos");
    let quantidadeItens = tabela.childElementCount;


    if (valorProduto) {

            totalCompra += valorProduto
        
            let linha = document.createElement('tr')
            let coluna1 = document.createElement('td')
            let coluna2 = document.createElement('td')
        
            coluna1.innerHTML = `Produto ${quantidadeItens}`
            coluna2.innerHTML = ` R$ ${valorProduto.toFixed(2).replace('.',',')}`
        
            linha.appendChild(coluna1)
            linha.appendChild(coluna2)
            tabela.appendChild(linha)
        
            document.getElementById("txtvalorproduto").value = '';
            document.getElementById("txttotalcompra").value = totalCompra;

            
          
            if (linhas.length == 7) {
                let table = document.querySelector(".result div.table");
                table.style.overflowy= "scroll";
            } 

    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Parece que deixou algo passar!',
            timer: 2500,
            showConfirmButton: false,

        })
    }
})







