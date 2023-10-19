var number = 0;
var temp = 0;
function refresh() {
    //gera o número aleátorio
    number = Math.floor(Math.random() * 10);
}
function verrifyNumber() {
    var betElement = document.getElementById('bet');
    var result = document.getElementById('result');
    var situacao = '';
    if (!betElement || !result) {
        return;
    }
    var bet = parseInt(betElement.value);
    if (isNaN(bet) || bet > 10 || bet < 1) {
        situacao = ('invalido');
    }
    else if (bet > number) {
        temp++;
        situacao = ("O n\u00FAmero digitado \u00E9 MAIOR");
    }
    else if (bet < number) {
        temp++;
        situacao = ('O número digitado é MENOR');
    }
    else {
        situacao = ("\u2705 Parab\u00E9ns voc\u00EA acertou!  Com ".concat(temp, " erros"));
    }
    result.textContent = situacao;
    console.log(number);
}
refresh();
