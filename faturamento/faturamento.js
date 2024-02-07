let faturamentoDia = [];
let maiorValor = 0;
let menorValor = 0;
let valorTotal = 0;
let mediaMensal = 0;
let diasAcimaMedia = 0

const tratarFaturamento = async () =>{
    const response = await fetch('faturamento.json');
    const faturamento = await response.json();
    //console.log(faturamento);

    faturamento.forEach(dia => {
        if(dia.valor > 0){
            valorTotal += dia.valor;
            faturamentoDia.push(dia.valor);
            if(menorValor == 0){
                menorValor = dia.valor;
            }
            if (dia.valor > maiorValor){
                maiorValor = dia.valor;
            }
            if (dia.valor < menorValor){
                menorValor = dia.valor;
            }
        } 
        
    });
    

    mediaMensal = valorTotal / faturamentoDia.length;

    faturamentoDia.forEach((valor) => {
        if(valor > mediaMensal) {
            diasAcimaMedia++;
        }

    });
}

const exibirResultados = async () =>{

    await tratarFaturamento();


    console.log(`O menor valor de faturamento em um dia no mês foi: ${menorValor}`);
    console.log(`O maior valor de faturamento em um dia no mês foi: ${maiorValor}`);
    console.log(`Quantidade de dias que o faturamento superou média mensal: ${diasAcimaMedia}`);

}

exibirResultados();