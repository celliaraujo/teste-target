/* 
Tendo um valor definido na variável 'numero' será feito o cálculo da sequência Fibonacci até 1000 valores. Caso o número seja encontrado nesta sequência, será exibida a mensagem de que o número pertence a ela e o loop interrompido. Se ele não encontrar, o loop continuará até atingir os 1000 valores. E ao final será exibida a mensagem de que o número não pertence a sequência.
*/

let numero = 1548008755920; //Número a ser testado
let anterior = 0;
let atual = 1;
let proximo = 0;

let pertence = false;

while(!pertence){
    for(let x = 0; x < 1000; x++){
        //console.log(anterior); 
        if(numero == anterior){
            pertence = true;
            console.log("Pertence a sequencia Fibonacci!")
            break;
        }       
        proximo = anterior + atual;    
        anterior = atual;
        atual = proximo;                
    }
    break;  
}

if(pertence == false) console.log("Não pertence a sequencia Fibonacci!");