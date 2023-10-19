let number: number = 0;
let temp: number = 0;

function refresh (){
    //gera o número aleátorio
    number = Math.floor(Math.random() * 10)
}

function verrifyNumber(){
    let betElement = document.getElementById('bet') as HTMLInputElement;
    let result = document.getElementById('result') 
    let situacao = '';
    if (!betElement || !result) {
        return;
      }
    let bet = parseInt(betElement.value);
    if(isNaN(bet) || bet > 10 || bet < 1){
        situacao = ('invalido')
    } else if( bet > number){
        temp ++;
        situacao = (`O número digitado é MAIOR`)
    } else if (bet < number){
        temp++;
        situacao = ('O número digitado é MENOR')
    } else{
        situacao = (`✅ Parabéns você acertou!  Com ${temp} erros`)
    }
    result.textContent = situacao
    console.log(number)
}
refresh()