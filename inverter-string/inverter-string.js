// Programa para inverter uma string

let texto = "ABACATE";

let textoInvertido = "";

for(let x = texto.length; x > 0; x--){
    textoInvertido += texto[x - 1];    
}

console.log(textoInvertido);