var btnContar = document.querySelector('input#btncontar');
btnContar.addEventListener('click', contar);

function contar(){
    var txtInicio = document.querySelector('input#txtinicio');
    var txtPasso = document.querySelector('input#txtpasso');
    var txtFim = document.querySelector('input#txtfim');
    var divRes = document.querySelector('div#res');

    
    if (txtInicio.value.length == 0){
        divRes.innerHTML = `impossível contar...`;
    }else{
        divRes.innerHTML = '';
        var inicio = Number(txtInicio.value);
        var passo = Number(txtPasso.value);
        var fim = Number(txtFim.value);

        if (passo == 0){
            passo = 1;
            window.alert('passo inválido! o programa vai considerar passo 1');
        }

        for(let index = inicio; index != fim + 1; index += passo){
            divRes.innerHTML += `👉 ${index} `;
        }
        divRes.innerHTML += '✋';
    }
    //console.log(`Inicio: ${txtInicio.value.length}\nPasso: ${txtPasso.value}\nFim: ${txtFim.value}`);
}