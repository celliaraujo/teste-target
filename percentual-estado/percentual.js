let estados = ["SP", "RJ", "MG", "ES", "OUTROS"];
let valores = [67836.43, 3678.66, 29229.88, 27165.48, 19849.53];

let valorTotal = 0;

valores.forEach((valor) => {
    valorTotal+=valor;
});


console.log('Percentual de representação mensal por estado:');

valores.forEach((valor, index) =>{
    let percentual = ((valor / valorTotal) * 100).toFixed(2);
    console.log(`${estados[index]} foi de ${percentual}%.`);
});