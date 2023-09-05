function loading() {
    document.querySelector(".telaload").style.display = "none";
    document.querySelector(".container").style.display = "block";
}

function newbutton() {
    if (letter.charCodeAt(0) <= 'Q'.charCodeAt(0)) {
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
            title: 'O limite de Variáveis é 2!',
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

        var regexLetra = /[a-zA-Z]/;
        var letraAtualEhLetra = regexLetra.test(letraAtual);
        var proximoEhLetra = regexLetra.test(proximoCaractere);

        if (letraAtualEhLetra && proximoEhLetra) {
            return true;
        }
    }

    return false; // Nenhuma sequência de duas letras consecutivas foi encontrada
}

function verificaDoisSimbolosConsecutivos(sequencia) {
    for (var i = 0; i < sequencia.length - 1; i++) {
        var caractereAtual = sequencia[i];
        var proximoCaractere = sequencia[i + 1];

        var regexSimbolo = /[⊕ʌᴠ→~↔]/;
        var caractereAtualEhSimbolo = regexSimbolo.test(caractereAtual);
        var proximoEhSimbolo = regexSimbolo.test(proximoCaractere);

        if (caractereAtualEhSimbolo && proximoEhSimbolo) {
            return true; 
        }
    }

    return false; // Nenhuma sequência de dois símbolos consecutivos foi encontrada
}

function verificaSequencia(sequencia) {
    if (verificaSeDuasLetrasConsecutivas(sequencia) || verificaDoisSimbolosConsecutivos(sequencia)) {
        return false;
    } else {
        return true;
    }
}

function contarLetras() {
    var input = document.getElementById("operations");
    var sequencia = input.value;
    
    var regexLetras = /[a-zA-Z]/g;
    var letrasEncontradas = sequencia.match(regexLetras);

    if (letrasEncontradas) {
        var letrasUnicas = new Set(letrasEncontradas);

        var numeroDeLetrasUnicas = letrasUnicas.size;
        return numeroDeLetrasUnicas;
    }

    return 0;
}

function criarTabelaVerdade() {
    var sequencia = document.getElementById("operations").value;
    var numeroDeVariaveis = contarLetras();
    var numeroDeLinhas = Math.pow(2, numeroDeVariaveis);
    var tabelaHTML = '<table>';

    // Cabeçalho da tabela
    tabelaHTML += '<tr>';
    for (var i = 0; i < numeroDeVariaveis; i++) {
        tabelaHTML += '<th>' + String.fromCharCode(80 + i) + '</th>';
    }
    tabelaHTML += '<th>' + sequencia + '</th>';
    tabelaHTML += '</tr>';

    // Geração das linhas da tabela verdade
    for (var linha = 0; linha < numeroDeLinhas; linha++) {
        var linhaBinaria = (linha).toString(2).padStart(numeroDeVariaveis, '0');
        var entrada = {};

        for (var i = 0; i < numeroDeVariaveis; i++) {
            entrada[String.fromCharCode(80 + i)] = linhaBinaria[i] === '0' ? 'F' : 'V';
        }

        var resultado = calcularExpressao(sequencia, entrada); 
        resultado = resultado ? 'V' : 'F'; 
        tabelaHTML += '<tr>';

        for (var i = 0; i < numeroDeVariaveis; i++) {
            tabelaHTML += '<td>' + entrada[String.fromCharCode(80 + i)] + '</td>';
        }

        tabelaHTML += '<td>' + resultado + '</td>';
        tabelaHTML += '</tr>';
    }

    tabelaHTML += '</table>';

    document.getElementById("resulttable").innerHTML = tabelaHTML;
    document.getElementById("result").style.display = "block"
}

function calcularExpressao(expressao, entrada) {
    if (expressao.includes('⊕')) {
        return (entrada.P === 'V' && entrada.Q === 'F') || (entrada.P === 'F' && entrada.Q === 'V');
    } else if (expressao.includes('ʌ')) {
        return (entrada.P === 'V' && entrada.Q === 'V');
    } else if (expressao.includes('ᴠ')) {
        return (entrada.P === 'V' || entrada.Q === 'V');
    } else if (expressao.includes('→')) {
        return (entrada.P === 'V' && entrada.Q === 'F') 
    } else if (expressao.includes('~')) {
        return entrada.P !== 'V';
    } else if (expressao.includes('↔')) {
        return (entrada.P === 'V' && entrada.Q === 'V') || (entrada.P === 'F' && entrada.Q === 'F');
    } else {
        return "Erro"
    }
}

var letter = 'Q';
newoperation();

document.getElementById("addvar").addEventListener("click", newbutton);

document.getElementById("make").addEventListener("click", function() {
    var sequencia = document.getElementById("operations").value;

    if (!verificaSequencia(sequencia) || isempty()) {
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
    } else {
        criarTabelaVerdade();
    }
});