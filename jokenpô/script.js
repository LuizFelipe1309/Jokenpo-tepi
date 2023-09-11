let ScoreB = document.getElementById("ScoreB");
let ScoreP = document.getElementById("ScoreP");
ScoreB = 0
ScoreP = 0
//ramdomizar a escolha do bot
function Play() {
    if (document.getElementById("r1").checked == false && document.getElementById("r2").checked == false && document.getElementById("r3").checked == false) {
        alert("SELECIONE UMA OPÇÃO");
    } else {
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
        //checar o resultado
        if ((document.getElementById("r1").checked == true && randomizer == 0) ||
            (document.getElementById("r2").checked == true && randomizer == 1) ||
            (document.getElementById("r3").checked == true && randomizer == 2)) {
            document.getElementById("Won").innerHTML = "EMPATE";
        } else if ((document.getElementById("r1").checked == true && randomizer == 2) ||
            (document.getElementById("r2").checked == true && randomizer == 0) ||
            (document.getElementById("r3").checked == true && randomizer == 1)) {
            document.getElementById("Won").innerHTML = "PONTO DO BOT";
            ScoreB++;
            document.getElementById("ScoreB").innerHTML = ScoreB;
        }
        else {
            document.getElementById("Won").innerHTML = "PONTO DO PLAYER";
            ScoreP++;
            document.getElementById("ScoreP").innerHTML = ScoreP;
        }




        //reiniciar a imagem + quem ganhou a rodada
        function trocarImagem() {
            var image1 = document.getElementById("choiceP");
            var image2 = document.getElementById("choiceB");
            image1.src = "img/interrogacao.png";
            image2.src = "img/interrogacao.png";
            document.getElementById("r1").checked = false;
            document.getElementById("r2").checked = false;
            document.getElementById("r3").checked = false;
            document.getElementById("Won").innerHTML = "";
            
            //quem ganha + resetar o jogo
            if (ScoreB === 5) {
                alert("BOT GANHOU O JOGO");
                location.reload();
            }
            if (ScoreP === 5) {
                alert("PLAYER GANHOU O JOGO");
                location.reload();
            }
        }
        setTimeout(trocarImagem, 900);
    }
}

//trocar a imagem do player
function choice() {
    if (document.getElementById("r1").checked == true) {
        document.getElementById("choiceP").src = "img/SPFC.png";
    }
    if (document.getElementById("r2").checked == true) {
        document.getElementById("choiceP").src = "img/SEP.png";
    }
    if (document.getElementById("r3").checked == true) {
        document.getElementById("choiceP").src = "img/SCCP.png";
    }
}