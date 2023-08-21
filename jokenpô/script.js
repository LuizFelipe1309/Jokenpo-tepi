/* ramdomizar a escolha do bot */
function Play() {
    if (document.getElementById("r1").checked == false && document.getElementById("r2").checked == false && document.getElementById("r3").checked == false) {
        alert("SELECIONE UMA OPÇÃO");
    } else {
        document.getElementById("r1").checked = false;
        document.getElementById("r2").checked = false;
        document.getElementById("r3").checked = false;
        var randomizer = Math.floor(Math.random() * 3);
        switch (randomizer) {
            case 0:
                document.getElementById("choice-bot").src = "img/papel.png";
                break;
            case 1:
                document.getElementById("choice-bot").src = "img/pedra.png";
                break;
            case 2:
                document.getElementById("choice-bot").src = "img/tesoura.png";
                break;
        }
        if ((document.getElementById("r1").checked == true && randomizer == 0) ||
            (document.getElementById("r2").checked == true && randomizer == 1) ||
            (document.getElementById("r3").checked == true && randomizer == 2)) {
            document.getElementById("Won").innerHTML = "EMPATE";
        }
        else if ((document.getElementById("r1").checked == true && randomizer == 2) ||
            (document.getElementById("r2").checked == true && randomizer == 0) ||
            (document.getElementById("r3").checked == true && randomizer == 1)) {
            document.getElementById("Won").innerHTML = "PONTO DO BOT";
        }
        else {
            document.getElementById("Won").innerHTML = "PONTO DO PLAYER"
        }
    }
}
/*
function choice(){
    if(document.getElementById("r1").checked == true){
        document.getElementById("choice-player").src = "img/papel.png";
    } else if(document.getElementById("r2").checked == true){
        document.getElementById("choice-player").src = "img/pedra.png";
    } else(document.getElementById("r3").checked == true);{
        document.getElementById("choice-player").src = "img/tesoura.png"; 
    }
}*/