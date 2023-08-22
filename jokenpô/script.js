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
                document.getElementById("choiceB").src = "img/SPFC.png";
                break;
            case 1:
                document.getElementById("choiceB").src = "img/SEP.png";
                break;
            case 2:
                document.getElementById("choiceB").src = "img/SCCP.png";
                break;
        }
        /* checar o resultado */
        if ((document.getElementById("choiceP").checked = "img/SPFC.png" && randomizer == 0) ||
            (document.getElementById("choiceP").checked = "img/SEP.png" && randomizer == 1) ||
            (document.getElementById("choiceP").checked = "img/SCCP.png" && randomizer == 2)) {
            document.getElementById("Won").innerHTML = "EMPATE";
        }
        if ((document.getElementById("choiceP").checked = "img/SPFC.img" && randomizer == 2) ||
            (document.getElementById("choiceP").checked = "img/SEP.png" && randomizer == 0) ||
            (document.getElementById("choiceP").checked = "img/SCCP.png" && randomizer == 1)) {
            document.getElementById("Won").innerHTML = "PONTO DO BOT";
        }
        if ((document.getElementById("choiceP").checked = "img/SPFC.img" && randomizer == 1) ||
            (document.getElementById("choiceP").checked = "img/SEP.png" && randomizer == 2) ||
            (document.getElementById("choiceP").checked = "img/SCCP.png" && randomizer == 0)) {
            document.getElementById("Won").innerHTML = "PONTO DO PLAYER";
        }
        /* reiniciar a imagem do bot */
        function trocarImagem() {
            var image1 = document.getElementById("choiceP");
            var image2 = document.getElementById("choiceB");
            var text = document.getElementById("won");
            image1.src = "img/interrogacao.png";
            image2.src = "img/interrogacao.png";
            text.innerHTML = "";
            document.getElementById("r1").checked = false;
            document.getElementById("r2").checked = false;
            document.getElementById("r3").checked = false;
        }
        setTimeout(trocarImagem, 2000);

        /* Bloquear a escolha enquanto está sendo comparado*/
        
    }
}

/* trocar a imagem do player */
function choice() {
    if (document.getElementById("r1").checked == true) {
        document.getElementById("choiceP").src = "img/SPFC.png";
    } if (document.getElementById("r2").checked == true) {
        document.getElementById("choiceP").src = "img/SEP.png";
    } if (document.getElementById("r3").checked == true) {
        document.getElementById("choiceP").src = "img/SCCP.png";
    }
}