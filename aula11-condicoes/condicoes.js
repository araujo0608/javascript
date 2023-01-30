
var tempo = new Date();
var diaSemana = tempo.getDay(); // Dia da semana

switch (diaSemana) {
    case 0:
        console.log('Hoje é Domingo!');
        break;
    case 1:
        console.log('Hoje é Segunda-Feira!');
        break;
    case 2:
        console.log('Hoje é Terça-Feira!');
        break;
    case 3:
        console.log('Hoje é Quarta-Feira!');
        break;
    case 4:
        console.log('Hoje é Quinta-Feira!');
        break;
    case 5:
        console.log('Hoje é Sexta-Feira!');
        break;
    default:
        console.log('Hoje é Sábado!');
        break;
}

/* 
var tempo = new Date();
var hora = tempo.getHours(); // Hora atual do sistema

console.log(`Agora são exatamente ${hora}h00`);

if (hora >= 0 && hora <= 5){
    console.log('Boa madrugada!');
}
else if (hora < 12){
    console.log('Bom dia!');
}
else if (hora <= 18){
    console.log('Boa tarde!');
}
else{
    console.log('Boa noite!');
}
*/