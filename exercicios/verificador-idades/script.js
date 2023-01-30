var btnVerificar = document.querySelector('input#btnVerificar');
btnVerificar.addEventListener('click', verificar);


function verificar(){
    var data = new Date();
    var ano_atual = data.getFullYear();

    var divRes = document.querySelector('div#res');
    var txtNasc = document.querySelector('input#txtNasc');
    var radSexo = document.getElementsByName('radsexo');


    if (txtNasc.value.length == 0 || Number(txtNasc.value) > ano_atual){
        window.alert('[ERRO] verifique os dados e tente novamente!');
    }else{
        var idade = ano_atual - Number(txtNasc.value);
        var genero = radSexo[0].checked ? 'homem' : 'mulher';
        divRes.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        var img = document.querySelector('img#show-img');
        var t = document.createElement('img')
        t.setAttribute('id', 'idvalue')


        if (genero == 'homem'){
            if (idade >= 0 && idade < 10){
                // criança/bebe
                img.src = "assets/bebe-homem.jpg";
            } else if (idade < 21){
                // jovem
                img.src = "assets/jovem-homem.jpg";
            } else if (idade < 50){
                // adulto
                img.src = "assets/homem-adulto.jpg";
            } else{
                // idoso
                img.src = "assets/velho-homem.jpg";
            }
        } else {
            if (idade >= 0 && idade < 10){
                // criança/bebe
                img.src = "assets/bebe-mulher.jpg";
            } else if (idade < 21){
                // jovem
                img.src = "assets/jovem-mulher.jpg";
            } else if (idade < 50){
                // adulto
                img.src = "assets/mulher-adulta.jpg";
            } else{
                // idosa
                img.src = "assets/velha-mulher.jpg";
            }
        }
    }
}