var btnContar = document.querySelector('input#btncontar');
btnContar.addEventListener('click', contar);

function contar(){
    var txtInicio = document.querySelector('input#txtinicio');
    var txtPasso = document.querySelector('input#txtpasso');
    var txtFim = document.querySelector('input#txtfim');
    var divRes = document.querySelector('div#res');

    
    if (txtInicio.value.length == 0 || txtFim.value.length == 0 || txtPasso.value.length == 0){
        divRes.innerHTML = `impossível contar! faltam dados!`;
    }else{
        divRes.innerHTML = '';
        var inicio = Number(txtInicio.value);
        var passo = Number(txtPasso.value);
        var fim = Number(txtFim.value);

        if (passo <= 0){
            passo = 1;
            window.alert('passo inválido! o programa vai considerar passo 1');
        }

        // crescente
        if (inicio < fim){
            for(let index = inicio; index <= fim; index += passo){
                divRes.innerHTML += `👉 ${index} `;
            }
            divRes.innerHTML += '✋';
        }
        else{ // regressiva

            for(let index = inicio; index >= fim; index -= passo){
                divRes.innerHTML += `👉 ${index} `;
            }
            divRes.innerHTML += '✋';
        }
    }
    //console.log(`Inicio: ${txtInicio.value.length}\nPasso: ${txtPasso.value}\nFim: ${txtFim.value}`);
}