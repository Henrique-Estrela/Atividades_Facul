function loading() {
    document.querySelector(".telaload").style.display = "none";
    document.querySelector(".container").style.display = "block";
}

function newbutton() {
    if (letter.charCodeAt(0) <= 'S'.charCodeAt(0)) {
        var btn = document.createElement("button");
        btn.textContent = letter;
        btn.className = "btn addelement";

        btn.addEventListener("click", function() {
            var textoBotao = btn.textContent;
            var input = document.getElementById("operations");
            input.value += textoBotao;
        });

        document.getElementById("containerbtn").appendChild(btn);
        letter = String.fromCharCode(letter.charCodeAt(0) + 1);
    } else {
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'O limite de Variáveis é 4!',
            showConfirmButton: false,
            color: '#c501e2',
            iconColor: '#c501e2',
            background: '#19191a',
            timer: 2500
        });
    }
}

function isempty() {
    var input = document.getElementById("operations");

    if (input.value === "") {
        return true; 
    } else {
        return false; 
    }
}

function newoperation() {
    var btn = document.querySelectorAll(".addelement");    
    var input = document.getElementById("operations");


    if (isempty()) {
            btn.forEach(function(botao) {
            botao.addEventListener("click", function() {
                var textoBotao = botao.textContent; 
                var input = document.getElementById("operations");
                input.value += textoBotao;
            });
        });
    } 

    
}

function verificaSeDuasLetrasConsecutivas(sequencia) {
    for (var i = 0; i < sequencia.length - 1; i++) {
        var letraAtual = sequencia[i];
        var proximoCaractere = sequencia[i + 1];

        // Verifique se a letra atual e o próximo caractere são letras
        var regexLetra = /[a-zA-Z]/;
        var letraAtualEhLetra = regexLetra.test(letraAtual);
        var proximoEhLetra = regexLetra.test(proximoCaractere);

        if (letraAtualEhLetra && proximoEhLetra) {
            return true; // Duas letras consecutivas foram encontradas
        }
    }

    return false; // Nenhuma sequência de duas letras consecutivas foi encontrada
}

function verificaDoisSimbolosConsecutivos(sequencia) {
    for (var i = 0; i < sequencia.length - 1; i++) {
        var caractereAtual = sequencia[i];
        var proximoCaractere = sequencia[i + 1];

        // Verifique se o caractere atual e o próximo caractere são símbolos
        var regexSimbolo = /[⊕ʌᴠ→~↔]/;
        var caractereAtualEhSimbolo = regexSimbolo.test(caractereAtual);
        var proximoEhSimbolo = regexSimbolo.test(proximoCaractere);

        if (caractereAtualEhSimbolo && proximoEhSimbolo) {
            return true; // Dois símbolos consecutivos foram encontrados
        }
    }

    return false; // Nenhuma sequência de dois símbolos consecutivos foi encontrada
}

function verificaSequencia(sequencia) {
    // Adicione aqui a sua lógica de validação da sequência
    // Por exemplo, você pode usar as funções verificaSeDuasLetrasConsecutivas e verificaDoisSimbolosConsecutivos mencionadas anteriormente
    if (verificaSeDuasLetrasConsecutivas(sequencia) || verificaDoisSimbolosConsecutivos(sequencia)) {
        return false;
    } else {
        return true;
    }
}

function criarTabelaVerdade() {
    var tabelaVerdadeHTML = '<table>' +
        '<thead>' +
        '<tr>' +
        '<th>A</th>' +
        '<th>B</th>' +
        '<th>A AND B</th>' +
        '<th>A OR B</th>' +
        '<th>NOT A</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>';

    for (var a = 0; a <= 1; a++) {
        for (var b = 0; b <= 1; b++) {
            tabelaVerdadeHTML += '<tr>' +
                '<td>' + a + '</td>' +
                '<td>' + b + '</td>' +
                '<td>' + (a && b) + '</td>' +
                '<td>' + (a || b) + '</td>' +
                '<td>' + !a + '</td>' +
                '</tr>';
        }
    }

    tabelaVerdadeHTML += '</tbody>' +
        '</table>';

    // Insere a tabela verdade gerada na div com a classe "resulttable"
    var resultTableDiv = document.querySelector(".resulttable");
    resultTableDiv.innerHTML = tabelaVerdadeHTML;
}




var letter = 'Q';

newoperation();



document.getElementById("addvar").addEventListener("click", newbutton);

document.getElementById("make").addEventListener("click", function() {
    var sequencia = document.getElementById("operations").value;
    
    if (!verificaSequencia(sequencia)) {
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Deu algo de errado ai!',
            showConfirmButton: false,
            color: '#c501e2',
            iconColor: '#c501e2',
            background: '#19191a',
            timer: 2500
        });
    }else{
        criarTabelaVerdade();
    }

});