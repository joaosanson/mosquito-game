var altura = 0;
var largura = 0;
var vidas = 1;
var timer = 5;

function getGameScreensize() {
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(largura, altura);
}

getGameScreensize();

function createMosquitoPosition() {
    if (document.getElementById("mosquito")) {
        document.getElementById("mosquito").remove();
        if (vidas > 2) {
            window.location.href = "game_over.html";
        } else {
            document.getElementById("v" + vidas).src = "imagens/coracao_vazio.png";
            vidas++;
        }
    }
    var positionX = Math.floor(Math.random() * largura) - 180;
    var positionY = Math.floor(Math.random() * altura) - 180;

    positionX = positionX < 0 ? 0 : positionX;
    positionY = positionY < 0 ? 0 : positionY;

    console.log(positionX, positionY);
    console.log(largura, altura);

    // criar o elemento html

    var mosquito = document.createElement("img");
    mosquito.src = "imagens/mosquito.png";
    mosquito.className = createRandomMosquito() + " " + createRandomSide();
    mosquito.style.left = positionX + "px";
    mosquito.style.top = positionY + "px";
    mosquito.style.position = "absolute";
    mosquito.id = "mosquito";
    mosquito.onclick = function () {
        this.remove();
    };

    document.body.appendChild(mosquito);

    cronometro = document.getElementById("timer");
    cronometro.innerHTML = timer;
    timer--;

    if (timer < 0) {
        window.location.href = "victory.html";
    }
}

function createRandomMosquito() {
    var random_num = Math.floor(Math.random() * 3);

    switch (random_num) {
        case 0:
            return "mosquito1";
        case 1:
            return "mosquito2";
        case 2:
            return "mosquito3";
    }
}

function createRandomSide() {
    var random_num = Math.floor(Math.random() * 2);

    switch (random_num) {
        case 0:
            return "ladoA";
        case 1:
            return "ladoB";
    }
}
setInterval(function () {
    createMosquitoPosition();
}, 1000);
