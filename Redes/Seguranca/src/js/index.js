const lamp01 = document.getElementById("lamp01");
const lamp02 = document.getElementById("lamp02");
const lamp03 = document.getElementById("lamp03");
var conectivo = document.getElementById("conectivo");
var lamp = {
    l1: 0,
    l2: 0
}

function result() {
    lamp02.style.display = 'block';
    switch (parseInt(conectivo.value)) {
        case 1:   
            if (lamp.l1 == 1 && lamp.l2 == 1) {
                lamp03.src = "https://i.postimg.cc/3JxkQLnb/ligada.jpg";
            }else{
                lamp03.src = "https://i.postimg.cc/6qYTGR50/desligada.jpg";
            }
            break;
        case 2:
            if (lamp.l1 == 1 || lamp.l2 == 1) {
                lamp03.src = "https://i.postimg.cc/3JxkQLnb/ligada.jpg";
            }else{
                lamp03.src = "https://i.postimg.cc/6qYTGR50/desligada.jpg";
            }
            break;
        case 3:
            if (lamp.l1 == 1 && lamp.l2 == 0 || lamp.l1 == 0 && lamp.l2 == 1 ) {
                lamp03.src = "https://i.postimg.cc/3JxkQLnb/ligada.jpg";
            }else{
                lamp03.src = "https://i.postimg.cc/6qYTGR50/desligada.jpg";
            }
            break;
        case 4:
            if (lamp.l1 == 1 && lamp.l2 == 0) {
                lamp03.src = "https://i.postimg.cc/6qYTGR50/desligada.jpg";
            }else{
                lamp03.src = "https://i.postimg.cc/3JxkQLnb/ligada.jpg";
            }
            break;
        case 5:
            if (lamp.l1 == 1 && lamp.l2 == 1 || lamp.l1 == 0 && lamp.l2 == 0) {
                return lamp03.src = "https://i.postimg.cc/3JxkQLnb/ligada.jpg";
            }else{
                lamp03.src = "https://i.postimg.cc/6qYTGR50/desligada.jpg";
            }
            break;
        case 6:
            lamp02.style.display = 'none'
            if (!lamp.l1) {
                return lamp03.src = "https://i.postimg.cc/3JxkQLnb/ligada.jpg";
            }else{
                lamp03.src = "https://i.postimg.cc/6qYTGR50/desligada.jpg";
            }
            break;
        
        default:
            alert("Escolha algum conectivo")
            break;
    } 
}

function lamp1() {
    if (lamp.l1 == 0) {
	    lamp01.src = "https://i.postimg.cc/3JxkQLnb/ligada.jpg";
        lamp.l1 = 1;
    }else{
        lamp01.src = "https://i.postimg.cc/6qYTGR50/desligada.jpg";
        lamp.l1 = 0;
    }
    result()
}

function lamp2() {
    if (lamp.l2 == 0) {
	    lamp02.src = "https://i.postimg.cc/3JxkQLnb/ligada.jpg";
        lamp.l2 = 1;
    }else{
        lamp02.src = "https://i.postimg.cc/6qYTGR50/desligada.jpg";
        lamp.l2 = 0;
    }
    result()
}


lamp01.addEventListener("click", lamp1);
lamp02.addEventListener("click", lamp2);

