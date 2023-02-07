const btnCalc = document.querySelector('input#btncalc');
btnCalc.addEventListener('click', calcular);

function calcular(){
    let txtNum = document.querySelector('input#txtnum');
    let selectTab = document.querySelector('select#seltab');

    if (txtNum.value.length == 0){
        window.alert('[ERRO]: número é obrigatório!');
    }
    else{
        let numero = Number.parseInt(txtNum.value);
        selectTab.innerHTML = "";
        for(let cont = 1; cont <= numero; cont++){
            let item = document.createElement('option');
            item.text = `${numero} X ${cont} = ${numero * cont}`;
            item.value = `tab${cont}`; // atributo value (pro PHP faz mais sentido)
            selectTab.appendChild(item); // inserindo de fato no <selection>
        }
    }
}    