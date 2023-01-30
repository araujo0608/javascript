var tempo = new Date();
hora_atual = tempo.getHours();

var divHorario = document.querySelector('div#div-horario');
divHorario.innerHTML = `Agora são ${hora_atual}h00`;

if (hora_atual < 12 && hora_atual >= 6){
    var corpo = document.querySelector('body');
    var img = document.querySelector('img#show-img');

    corpo.style.backgroundColor = "rgb(9,107,255)";
    img.src = 'assets/manha.jpg';
}
else if(hora_atual <= 18 && hora_atual > 12){
    var corpo = document.querySelector('body');
    var img = document.querySelector('img#show-img');

    corpo.style.backgroundColor = "rgb(235, 120, 14)";
    img.src = 'assets/tarde.jpg';
}
else{
    var corpo = document.querySelector('body');
    var img = document.querySelector('img#show-img');
    
    corpo.style.backgroundColor = "rgb(20, 14, 43)";
    img.src = 'assets/noite.png';
}