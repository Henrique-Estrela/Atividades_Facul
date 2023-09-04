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

function verification(sequencia) {
    for (var i = 0; i < sequencia.length - 1; i++) {
        var letraAtual = sequencia[i];
        var proximoCaractere = sequencia[i + 1];

        // Verifique se a letra atual é uma letra ou um dos símbolos desejados
        var regexSimbolos = /[a-zA-Z⊕ʌᴠ→~↔]/;
        var caractereValido = regexSimbolos.test(letraAtual);

        // Verifique se o próximo caractere é um símbolo ou uma letra
        var regexSimbolo = /[⊕ʌᴠ→~↔ ]/;
        var proximoEhSimbolo = regexSimbolo.test(proximoCaractere);

        if (caractereValido && proximoEhSimbolo) {
            return true; // Próximo caractere é um símbolo
        }
    }

    return false; // Nenhuma sequência de caractere seguido de símbolo foi encontrada
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
    
    if (isempty() == true || verification() == true) {
        btn.forEach(function(botao) {
            botao.addEventListener("click", function() {
                var textoBotao = botao.textContent; 
                var input = document.getElementById("operations");
                input.value += textoBotao;
            });
        });
    } 

    
}


newoperation()

var letter = 'Q';
document.getElementById("addvar").addEventListener("click", newbutton);

