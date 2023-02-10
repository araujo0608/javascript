var btnAdd = document.querySelector('input#btnadd');
var btnCalc = document.querySelector('input#btncalc');
var btnLimpar = document.querySelector('input#btnlimpar');

btnAdd.addEventListener('click', add);
btnCalc.addEventListener('click', calc);
btnLimpar.addEventListener('click', limpar);

var numeros = [];
var selectNum = document.querySelector('select#selnum');
var divRes = document.querySelector('div#res');

function add(){
    var txtNum = document.querySelector('input#txtnum');
    var num = Number(txtNum.value);

    if (txtNum.value.length == 0){
        window.alert('[ERRO] caixa de texto vazia, digite um número!');
    }
    else if(num < 1 || num > 100){
        window.alert('[ERRO] digite um número entre 1 e 100!');
    }
    else{
        if(numeros.includes(num)){ // valor já esta na lista
            window.alert('[ERRO] valor já está na lista')
        }
        else{
            let item = document.createElement('option');
            item.text = `Adicionado valor ${num}`;
            selectNum.appendChild(item); // adicionando no select
            numeros.push(num); // adicionando no array
            txtNum.value = '';
            txtNum.focus();
        }
    }


}

function calc(){
    if (numeros.length == 0){
        window.alert('[ERRO] adicione elementos a lista')
    }
    else{
        let tamanho = numeros.length;
        let maior = Math.max.apply(null, numeros);
        let menor = Math.min.apply(null, numeros);
        let soma = 0;
        for(let index = 0; index < numeros.length; index++){
            soma += numeros[index];
        let media = Number(soma / tamanho);
        divRes.innerText = `Tamanho: ${tamanho}\nMaior valor: ${maior}\nMenor valor: ${menor}\nSoma dos valores: ${soma}\nMédia dos valores: ${media}`;
    }
}
   
}

function limpar(){
    divRes.innerHTML = '';
    selectNum.innerHTML = '';
    numeros = [];
}