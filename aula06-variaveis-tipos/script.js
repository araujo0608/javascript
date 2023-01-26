var nome = window.prompt('Qual é seu nome?');
document.write(`<h1> você se chama ${nome}</h1>`);
document.write(`<h2> -> seu nome tem ${nome.length} letras </h2>`);
document.write(`<h2> -> seu nome em maiusculas é ${nome.toUpperCase()}</h2>`);
document.write(`<h2> -> seu nome em minusculas é ${nome.toLowerCase()}</h2>`);