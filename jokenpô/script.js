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
                document.getElementById("choice-bot").src = "img/SPFC.png";
                break;
            case 1:
                document.getElementById("choice-bot").src = "img/SEP.png";
                break;
            case 2:
                document.getElementById("choice-bot").src = "img/SCCP.png";
                break;
        }
        if ((document.getElementById("r1").checked == true && randomizer == 0) ||
            (document.getElementById("r2").checked == true && randomizer == 1) ||
            (document.getElementById("r3").checked == true && randomizer == 2)) {
            document.getElementById("Won").innerHTML = "EMPATE";
        }
        if ((document.getElementById("r1").checked == true && randomizer == 2) ||
            (document.getElementById("r2").checked == true && randomizer == 0) ||
            (document.getElementById("r3").checked == true && randomizer == 1)) {
            document.getElementById("Won").innerHTML = "PONTO DO BOT";
        }
        if ((document.getElementById("r1").checked == true && randomizer == 1) ||
            (document.getElementById("r2").checked == true && randomizer == 2) ||
            (document.getElementById("r3").checked == true && randomizer == 0)) {
            document.getElementById("Won").innerHTML = "PONTO DO PLAYER";
        }
    }
}

function choice() {
    if (document.getElementById("r1").checked == true) {
        document.getElementById("choice-player").src = "img/SPFC.png";
    } if (document.getElementById("r2").checked == true) {
        document.getElementById("choice-player").src = "img/SEP.png";
    } if (document.getElementById("r3").checked == true) {
        document.getElementById("choice-player").src = "img/SCCP.png";
    }
}